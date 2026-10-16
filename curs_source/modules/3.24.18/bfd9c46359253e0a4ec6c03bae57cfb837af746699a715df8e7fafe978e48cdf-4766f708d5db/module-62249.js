"use strict";
require.d(exports, {
    EVC: ()=>Hr,
    waD: ()=>up,
    Rxj: ()=>Vr,
    _Ji: ()=>an,
    BNF: ()=>a,
    khl: ()=>hl,
    E1e: ()=>Ve,
    KOV: ()=>Wr,
    O0K: ()=>qd,
    aAA: ()=>Nd,
    gRo: ()=>Ud,
    Npg: ()=>Gd,
    d2r: ()=>mu,
    DvK: ()=>td,
    VzO: ()=>nn,
    utt: ()=>Vs,
    x7h: ()=>yo,
    NB: ()=>dd,
    Px0: ()=>zr,
    o_K: ()=>on,
    aZ7: ()=>uu,
    mAh: ()=>Zl,
    r5P: ()=>p,
    hQM: ()=>St,
    V2h: ()=>zt,
    BQk: ()=>At,
    ky5: ()=>Fe,
    T2h: ()=>Id,
    gTO: ()=>Ue,
    a82: ()=>Ne.a8,
    myO: ()=>eu,
    yeE: ()=>He,
    o9_: ()=>Pe,
    ba_: ()=>Sr,
    Rhp: ()=>Od,
    gMI: ()=>We
});
var n = require("./module-51455.js"), s = require("./module-76760.js"), o = require.t(s, 2);
const i = 2592e6, a = 864e5, c = [
    ".txt",
    ".json",
    ".jsonl"
], l = [
    "agent-transcripts",
    "agent-tools"
], u = 100;
async function d(e, t, r, o, i, a) {
    let c = 0, l = 0, p = !0;
    try {
        const m = await (0, n.readdir)(e, {
            withFileTypes: !0
        });
        for (const h of m){
            a.entriesSinceYield++, a.entriesSinceYield >= u && (a.entriesSinceYield = 0, await new Promise((e)=>setImmediate(e)));
            const m = (0, s.join)(e, h.name);
            if (h.isDirectory()) {
                if (!i) {
                    p = !1;
                    continue;
                }
                const e = await d(m, t, r, o, i, a);
                if (c += e.scannedFiles, l += e.deletedFiles, !e.isEmpty) {
                    p = !1;
                    continue;
                }
                try {
                    await (0, n.rmdir)(m);
                } catch  {
                    p = !1;
                }
                continue;
            }
            if (h.isFile() && o.some((e)=>h.name.endsWith(e))) {
                c++;
                try {
                    const e = await (0, n.stat)(m);
                    Number.isFinite(e.mtimeMs) && t - e.mtimeMs > r ? (await (0, n.rm)(m, {
                        force: !0
                    }), l++) : p = !1;
                } catch  {
                    p = !1;
                }
            } else p = !1;
        }
    } catch  {
        p = !1;
    }
    return {
        scannedFiles: c,
        deletedFiles: l,
        isEmpty: p
    };
}
async function p(e) {
    const t = e.nowMs ?? Date.now(), r = e.ttlMs ?? i, o = e.allowedExtensions ?? c, a = e.subdirs ?? l;
    let u = 0, p = 0, m = 0;
    const h = {
        entriesSinceYield: 0
    };
    try {
        const i = await (0, n.readdir)(e.projectsDir, {
            withFileTypes: !0
        });
        for (const c of i)if (c.isDirectory()) {
            u++;
            for (const i of a){
                const a = (0, s.join)(e.projectsDir, c.name, i);
                try {
                    if (!(await (0, n.lstat)(a)).isDirectory()) continue;
                } catch  {
                    continue;
                }
                const l = await d(a, t, r, o, "agent-tools" === i, h);
                p += l.scannedFiles, m += l.deletedFiles;
            }
        }
    } catch  {}
    return {
        scannedProjects: u,
        scannedFiles: p,
        deletedFiles: m
    };
}
var m = require("./module-27998.js");
const h = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, f = new Set, g = "object" == typeof process && process ? process : {}, y = (e, t, r, n)=>{
    "function" == typeof g.emitWarning ? g.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`);
};
let w = globalThis.AbortController, v = globalThis.AbortSignal;
if (void 0 === w) {
    v = class {
        onabort;
        _onabort = [];
        reason;
        aborted = !1;
        addEventListener(e, t) {
            this._onabort.push(t);
        }
    }, w = class {
        constructor(){
            t();
        }
        signal = new v;
        abort(e) {
            if (!this.signal.aborted) {
                this.signal.reason = e, this.signal.aborted = !0;
                for (const t of this.signal._onabort)t(e);
                this.signal.onabort?.(e);
            }
        }
    };
    let e = "1" !== g.env?.LRU_CACHE_IGNORE_AC_WARNING;
    const t = ()=>{
        e && (e = !1, y("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
    };
}
Symbol("type");
const _ = (e)=>e && e === Math.floor(e) && e > 0 && isFinite(e), b = (e)=>_(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? S : null : null;
class S extends Array {
    constructor(e){
        super(e), this.fill(0);
    }
}
class k {
    heap;
    length;
    static #O = !1;
    static create(e) {
        const t = b(e);
        if (!t) return [];
        k.#O = !0;
        const r = new k(e, t);
        return k.#O = !1, r;
    }
    constructor(e, t){
        if (!k.#O) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new t(e), this.length = 0;
    }
    push(e) {
        this.heap[this.length++] = e;
    }
    pop() {
        return this.heap[--this.length];
    }
}
class x {
    #B;
    #D;
    #q;
    #N;
    #F;
    #U;
    #L;
    #$;
    get perf() {
        return this.#$;
    }
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #j;
    #G;
    #z;
    #W;
    #H;
    #K;
    #V;
    #Y;
    #Q;
    #X;
    #Z;
    #ee;
    #te;
    #re;
    #ne;
    #se;
    #oe;
    #ie;
    #ae;
    static unsafeExposeInternals(e) {
        return {
            starts: e.#te,
            ttls: e.#re,
            autopurgeTimers: e.#ne,
            sizes: e.#ee,
            keyMap: e.#z,
            keyList: e.#W,
            valList: e.#H,
            next: e.#K,
            prev: e.#V,
            get head () {
                return e.#Y;
            },
            get tail () {
                return e.#Q;
            },
            free: e.#X,
            isBackgroundFetch: (t)=>e.#ce(t),
            backgroundFetch: (t, r, n, s)=>e.#le(t, r, n, s),
            moveToTail: (t)=>e.#ue(t),
            indexes: (t)=>e.#de(t),
            rindexes: (t)=>e.#pe(t),
            isStale: (t)=>e.#me(t)
        };
    }
    get max() {
        return this.#B;
    }
    get maxSize() {
        return this.#D;
    }
    get calculatedSize() {
        return this.#G;
    }
    get size() {
        return this.#j;
    }
    get fetchMethod() {
        return this.#U;
    }
    get memoMethod() {
        return this.#L;
    }
    get dispose() {
        return this.#q;
    }
    get onInsert() {
        return this.#N;
    }
    get disposeAfter() {
        return this.#F;
    }
    constructor(e){
        const { max: t = 0, ttl: r, ttlResolution: n = 1, ttlAutopurge: s, updateAgeOnGet: o, updateAgeOnHas: i, allowStale: a, dispose: c, onInsert: l, disposeAfter: u, noDisposeOnSet: d, noUpdateTTL: p, maxSize: m = 0, maxEntrySize: g = 0, sizeCalculation: w, fetchMethod: v, memoMethod: S, noDeleteOnFetchRejection: E, noDeleteOnStaleGet: I, allowStaleOnFetchRejection: T, allowStaleOnFetchAbort: C, ignoreFetchAbort: P, perf: A } = e;
        if (void 0 !== A && "function" != typeof A?.now) throw new TypeError("perf option must have a now() method if specified");
        if (this.#$ = A ?? h, 0 !== t && !_(t)) throw new TypeError("max option must be a nonnegative integer");
        const R = t ? b(t) : Array;
        if (!R) throw new Error("invalid max value: " + t);
        if (this.#B = t, this.#D = m, this.maxEntrySize = g || this.#D, this.sizeCalculation = w, this.sizeCalculation) {
            if (!this.#D && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== S && "function" != typeof S) throw new TypeError("memoMethod must be a function if defined");
        if (this.#L = S, void 0 !== v && "function" != typeof v) throw new TypeError("fetchMethod must be a function if specified");
        if (this.#U = v, this.#oe = !!v, this.#z = new Map, this.#W = new Array(t).fill(void 0), this.#H = new Array(t).fill(void 0), this.#K = new R(t), this.#V = new R(t), this.#Y = 0, this.#Q = 0, this.#X = k.create(t), this.#j = 0, this.#G = 0, "function" == typeof c && (this.#q = c), "function" == typeof l && (this.#N = l), "function" == typeof u ? (this.#F = u, this.#Z = []) : (this.#F = void 0, this.#Z = void 0), this.#se = !!this.#q, this.#ae = !!this.#N, this.#ie = !!this.#F, this.noDisposeOnSet = !!d, this.noUpdateTTL = !!p, this.noDeleteOnFetchRejection = !!E, this.allowStaleOnFetchRejection = !!T, this.allowStaleOnFetchAbort = !!C, this.ignoreFetchAbort = !!P, 0 !== this.maxEntrySize) {
            if (0 !== this.#D && !_(this.#D)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!_(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#he();
        }
        if (this.allowStale = !!a, this.noDeleteOnStaleGet = !!I, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!i, this.ttlResolution = _(n) || 0 === n ? n : 1, this.ttlAutopurge = !!s, this.ttl = r || 0, this.ttl) {
            if (!_(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#fe();
        }
        if (0 === this.#B && 0 === this.ttl && 0 === this.#D) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !this.#B && !this.#D) {
            const e = "LRU_CACHE_UNBOUNDED";
            if (((e)=>!f.has(e))(e)) {
                f.add(e);
                y("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, x);
            }
        }
    }
    getRemainingTTL(e) {
        return this.#z.has(e) ? 1 / 0 : 0;
    }
    #fe() {
        const e = new S(this.#B), t = new S(this.#B);
        this.#re = e, this.#te = t;
        const r = this.ttlAutopurge ? new Array(this.#B) : void 0;
        this.#ne = r, this.#ge = (n, s, o = this.#$.now())=>{
            if (t[n] = 0 !== s ? o : 0, e[n] = s, r?.[n] && (clearTimeout(r[n]), r[n] = void 0), 0 !== s && r) {
                const e = setTimeout(()=>{
                    this.#me(n) && this.#ye(this.#W[n], "expire");
                }, s + 1);
                e.unref && e.unref(), r[n] = e;
            }
        }, this.#we = (r)=>{
            t[r] = 0 !== e[r] ? this.#$.now() : 0;
        }, this.#ve = (r, o)=>{
            if (e[o]) {
                const i = e[o], a = t[o];
                if (!i || !a) return;
                r.ttl = i, r.start = a, r.now = n || s();
                const c = r.now - a;
                r.remainingTTL = i - c;
            }
        };
        let n = 0;
        const s = ()=>{
            const e = this.#$.now();
            if (this.ttlResolution > 0) {
                n = e;
                const t = setTimeout(()=>n = 0, this.ttlResolution);
                t.unref && t.unref();
            }
            return e;
        };
        this.getRemainingTTL = (r)=>{
            const o = this.#z.get(r);
            if (void 0 === o) return 0;
            const i = e[o], a = t[o];
            if (!i || !a) return 1 / 0;
            return i - ((n || s()) - a);
        }, this.#me = (r)=>{
            const o = t[r], i = e[r];
            return !!i && !!o && (n || s()) - o > i;
        };
    }
    #we = ()=>{};
    #ve = ()=>{};
    #ge = ()=>{};
    #me = ()=>!1;
    #he() {
        const e = new S(this.#B);
        this.#G = 0, this.#ee = e, this.#_e = (t)=>{
            this.#G -= e[t], e[t] = 0;
        }, this.#be = (e, t, r, n)=>{
            if (this.#ce(t)) return 0;
            if (!_(r)) {
                if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
                if (r = n(t, e), !_(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            }
            return r;
        }, this.#Se = (t, r, n)=>{
            if (e[t] = r, this.#D) {
                const r = this.#D - e[t];
                for(; this.#G > r;)this.#ke(!0);
            }
            this.#G += e[t], n && (n.entrySize = r, n.totalCalculatedSize = this.#G);
        };
    }
    #_e = (e)=>{};
    #Se = (e, t, r)=>{};
    #be = (e, t, r, n)=>{
        if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
    };
    *#de({ allowStale: e = this.allowStale } = {}) {
        if (this.#j) for(let t = this.#Q; this.#xe(t) && (!e && this.#me(t) || (yield t), t !== this.#Y);)t = this.#V[t];
    }
    *#pe({ allowStale: e = this.allowStale } = {}) {
        if (this.#j) for(let t = this.#Y; this.#xe(t) && (!e && this.#me(t) || (yield t), t !== this.#Q);)t = this.#K[t];
    }
    #xe(e) {
        return void 0 !== e && this.#z.get(this.#W[e]) === e;
    }
    *entries() {
        for (const e of this.#de())void 0 === this.#H[e] || void 0 === this.#W[e] || this.#ce(this.#H[e]) || (yield [
            this.#W[e],
            this.#H[e]
        ]);
    }
    *rentries() {
        for (const e of this.#pe())void 0 === this.#H[e] || void 0 === this.#W[e] || this.#ce(this.#H[e]) || (yield [
            this.#W[e],
            this.#H[e]
        ]);
    }
    *keys() {
        for (const e of this.#de()){
            const t = this.#W[e];
            void 0 === t || this.#ce(this.#H[e]) || (yield t);
        }
    }
    *rkeys() {
        for (const e of this.#pe()){
            const t = this.#W[e];
            void 0 === t || this.#ce(this.#H[e]) || (yield t);
        }
    }
    *values() {
        for (const e of this.#de()){
            void 0 === this.#H[e] || this.#ce(this.#H[e]) || (yield this.#H[e]);
        }
    }
    *rvalues() {
        for (const e of this.#pe()){
            void 0 === this.#H[e] || this.#ce(this.#H[e]) || (yield this.#H[e]);
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    [Symbol.toStringTag] = "LRUCache";
    find(e, t = {}) {
        for (const r of this.#de()){
            const n = this.#H[r], s = this.#ce(n) ? n.__staleWhileFetching : n;
            if (void 0 !== s && e(s, this.#W[r], this)) return this.get(this.#W[r], t);
        }
    }
    forEach(e, t = this) {
        for (const r of this.#de()){
            const n = this.#H[r], s = this.#ce(n) ? n.__staleWhileFetching : n;
            void 0 !== s && e.call(t, s, this.#W[r], this);
        }
    }
    rforEach(e, t = this) {
        for (const r of this.#pe()){
            const n = this.#H[r], s = this.#ce(n) ? n.__staleWhileFetching : n;
            void 0 !== s && e.call(t, s, this.#W[r], this);
        }
    }
    purgeStale() {
        let e = !1;
        for (const t of this.#pe({
            allowStale: !0
        }))this.#me(t) && (this.#ye(this.#W[t], "expire"), e = !0);
        return e;
    }
    info(e) {
        const t = this.#z.get(e);
        if (void 0 === t) return;
        const r = this.#H[t], n = this.#ce(r) ? r.__staleWhileFetching : r;
        if (void 0 === n) return;
        const s = {
            value: n
        };
        if (this.#re && this.#te) {
            const e = this.#re[t], r = this.#te[t];
            if (e && r) {
                const t = e - (this.#$.now() - r);
                s.ttl = t, s.start = Date.now();
            }
        }
        return this.#ee && (s.size = this.#ee[t]), s;
    }
    dump() {
        const e = [];
        for (const t of this.#de({
            allowStale: !0
        })){
            const r = this.#W[t], n = this.#H[t], s = this.#ce(n) ? n.__staleWhileFetching : n;
            if (void 0 === s || void 0 === r) continue;
            const o = {
                value: s
            };
            if (this.#re && this.#te) {
                o.ttl = this.#re[t];
                const e = this.#$.now() - this.#te[t];
                o.start = Math.floor(Date.now() - e);
            }
            this.#ee && (o.size = this.#ee[t]), e.unshift([
                r,
                o
            ]);
        }
        return e;
    }
    load(e) {
        this.clear();
        for (const [t, r] of e){
            if (r.start) {
                const e = Date.now() - r.start;
                r.start = this.#$.now() - e;
            }
            this.set(t, r.value, r);
        }
    }
    set(e, t, r = {}) {
        if (void 0 === t) return this.delete(e), this;
        const { ttl: n = this.ttl, start: s, noDisposeOnSet: o = this.noDisposeOnSet, sizeCalculation: i = this.sizeCalculation, status: a } = r;
        let { noUpdateTTL: c = this.noUpdateTTL } = r;
        const l = this.#be(e, t, r.size || 0, i);
        if (this.maxEntrySize && l > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.#ye(e, "set"), this;
        let u = 0 === this.#j ? void 0 : this.#z.get(e);
        if (void 0 === u) u = 0 === this.#j ? this.#Q : 0 !== this.#X.length ? this.#X.pop() : this.#j === this.#B ? this.#ke(!1) : this.#j, this.#W[u] = e, this.#H[u] = t, this.#z.set(e, u), this.#K[this.#Q] = u, this.#V[u] = this.#Q, this.#Q = u, this.#j++, this.#Se(u, l, a), a && (a.set = "add"), c = !1, this.#ae && this.#N?.(t, e, "add");
        else {
            this.#ue(u);
            const r = this.#H[u];
            if (t !== r) {
                if (this.#oe && this.#ce(r)) {
                    r.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: t } = r;
                    void 0 === t || o || (this.#se && this.#q?.(t, e, "set"), this.#ie && this.#Z?.push([
                        t,
                        e,
                        "set"
                    ]));
                } else o || (this.#se && this.#q?.(r, e, "set"), this.#ie && this.#Z?.push([
                    r,
                    e,
                    "set"
                ]));
                if (this.#_e(u), this.#Se(u, l, a), this.#H[u] = t, a) {
                    a.set = "replace";
                    const e = r && this.#ce(r) ? r.__staleWhileFetching : r;
                    void 0 !== e && (a.oldValue = e);
                }
            } else a && (a.set = "update");
            this.#ae && this.onInsert?.(t, e, t === r ? "update" : "replace");
        }
        if (0 === n || this.#re || this.#fe(), this.#re && (c || this.#ge(u, n, s), a && this.#ve(a, u)), !o && this.#ie && this.#Z) {
            const e = this.#Z;
            let t;
            for(; t = e?.shift();)this.#F?.(...t);
        }
        return this;
    }
    pop() {
        try {
            for(; this.#j;){
                const e = this.#H[this.#Y];
                if (this.#ke(!0), this.#ce(e)) {
                    if (e.__staleWhileFetching) return e.__staleWhileFetching;
                } else if (void 0 !== e) return e;
            }
        } finally{
            if (this.#ie && this.#Z) {
                const e = this.#Z;
                let t;
                for(; t = e?.shift();)this.#F?.(...t);
            }
        }
    }
    #ke(e) {
        const t = this.#Y, r = this.#W[t], n = this.#H[t];
        return this.#oe && this.#ce(n) ? n.__abortController.abort(new Error("evicted")) : (this.#se || this.#ie) && (this.#se && this.#q?.(n, r, "evict"), this.#ie && this.#Z?.push([
            n,
            r,
            "evict"
        ])), this.#_e(t), this.#ne?.[t] && (clearTimeout(this.#ne[t]), this.#ne[t] = void 0), e && (this.#W[t] = void 0, this.#H[t] = void 0, this.#X.push(t)), 1 === this.#j ? (this.#Y = this.#Q = 0, this.#X.length = 0) : this.#Y = this.#K[t], this.#z.delete(r), this.#j--, t;
    }
    has(e, t = {}) {
        const { updateAgeOnHas: r = this.updateAgeOnHas, status: n } = t, s = this.#z.get(e);
        if (void 0 !== s) {
            const e = this.#H[s];
            if (this.#ce(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#me(s)) return r && this.#we(s), n && (n.has = "hit", this.#ve(n, s)), !0;
            n && (n.has = "stale", this.#ve(n, s));
        } else n && (n.has = "miss");
        return !1;
    }
    peek(e, t = {}) {
        const { allowStale: r = this.allowStale } = t, n = this.#z.get(e);
        if (void 0 === n || !r && this.#me(n)) return;
        const s = this.#H[n];
        return this.#ce(s) ? s.__staleWhileFetching : s;
    }
    #le(e, t, r, n) {
        const s = void 0 === t ? void 0 : this.#H[t];
        if (this.#ce(s)) return s;
        const o = new w, { signal: i } = r;
        i?.addEventListener("abort", ()=>o.abort(i.reason), {
            signal: o.signal
        });
        const a = {
            signal: o.signal,
            options: r,
            context: n
        }, c = (n, s = !1)=>{
            const { aborted: i } = o.signal, c = r.ignoreFetchAbort && void 0 !== n, d = r.ignoreFetchAbort || !(!r.allowStaleOnFetchAbort || void 0 === n);
            if (r.status && (i && !s ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, c && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), i && !c && !s) return l(o.signal.reason, d);
            const p = u, m = this.#H[t];
            return (m === u || c && s && void 0 === m) && (void 0 === n ? void 0 !== p.__staleWhileFetching ? this.#H[t] = p.__staleWhileFetching : this.#ye(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, a.options))), n;
        }, l = (n, s)=>{
            const { aborted: i } = o.signal, a = i && r.allowStaleOnFetchAbort, c = a || r.allowStaleOnFetchRejection, l = c || r.noDeleteOnFetchRejection, d = u;
            if (this.#H[t] === u) {
                !l || !s && void 0 === d.__staleWhileFetching ? this.#ye(e, "fetch") : a || (this.#H[t] = d.__staleWhileFetching);
            }
            if (c) return r.status && void 0 !== d.__staleWhileFetching && (r.status.returnedStale = !0), d.__staleWhileFetching;
            if (d.__returned === d) throw n;
        };
        r.status && (r.status.fetchDispatched = !0);
        const u = new Promise((t, n)=>{
            const i = this.#U?.(e, s, a);
            i && i instanceof Promise && i.then((e)=>t(void 0 === e ? void 0 : e), n), o.signal.addEventListener("abort", ()=>{
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = (e)=>c(e, !0)));
            });
        }).then(c, (e)=>(r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), l(e, !1))), d = Object.assign(u, {
            __abortController: o,
            __staleWhileFetching: s,
            __returned: void 0
        });
        return void 0 === t ? (this.set(e, d, {
            ...a.options,
            status: void 0
        }), t = this.#z.get(e)) : this.#H[t] = d, d;
    }
    #ce(e) {
        if (!this.#oe) return !1;
        const t = e;
        return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof w;
    }
    async fetch(e, t = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: i = this.noDisposeOnSet, size: a = 0, sizeCalculation: c = this.sizeCalculation, noUpdateTTL: l = this.noUpdateTTL, noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection, ignoreFetchAbort: p = this.ignoreFetchAbort, allowStaleOnFetchAbort: m = this.allowStaleOnFetchAbort, context: h, forceRefresh: f = !1, status: g, signal: y } = t;
        if (!this.#oe) return g && (g.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: s,
            status: g
        });
        const w = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: s,
            ttl: o,
            noDisposeOnSet: i,
            size: a,
            sizeCalculation: c,
            noUpdateTTL: l,
            noDeleteOnFetchRejection: u,
            allowStaleOnFetchRejection: d,
            allowStaleOnFetchAbort: m,
            ignoreFetchAbort: p,
            status: g,
            signal: y
        };
        let v = this.#z.get(e);
        if (void 0 === v) {
            g && (g.fetch = "miss");
            const t = this.#le(e, v, w, h);
            return t.__returned = t;
        }
        {
            const t = this.#H[v];
            if (this.#ce(t)) {
                const e = r && void 0 !== t.__staleWhileFetching;
                return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t;
            }
            const s = this.#me(v);
            if (!f && !s) return g && (g.fetch = "hit"), this.#ue(v), n && this.#we(v), g && this.#ve(g, v), t;
            const o = this.#le(e, v, w, h), i = void 0 !== o.__staleWhileFetching && r;
            return g && (g.fetch = s ? "stale" : "refresh", i && s && (g.returnedStale = !0)), i ? o.__staleWhileFetching : o.__returned = o;
        }
    }
    async forceFetch(e, t = {}) {
        const r = await this.fetch(e, t);
        if (void 0 === r) throw new Error("fetch() returned undefined");
        return r;
    }
    memo(e, t = {}) {
        const r = this.#L;
        if (!r) throw new Error("no memoMethod provided to constructor");
        const { context: n, forceRefresh: s, ...o } = t, i = this.get(e, o);
        if (!s && void 0 !== i) return i;
        const a = r(e, i, {
            options: o,
            context: n
        });
        return this.set(e, a, o), a;
    }
    get(e, t = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, status: o } = t, i = this.#z.get(e);
        if (void 0 !== i) {
            const t = this.#H[i], a = this.#ce(t);
            return o && this.#ve(o, i), this.#me(i) ? (o && (o.get = "stale"), a ? (o && r && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (s || this.#ye(e, "expire"), o && r && (o.returnedStale = !0), r ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#ue(i), n && this.#we(i), t));
        }
        o && (o.get = "miss");
    }
    #Ee(e, t) {
        this.#V[t] = e, this.#K[e] = t;
    }
    #ue(e) {
        e !== this.#Q && (e === this.#Y ? this.#Y = this.#K[e] : this.#Ee(this.#V[e], this.#K[e]), this.#Ee(this.#Q, e), this.#Q = e);
    }
    delete(e) {
        return this.#ye(e, "delete");
    }
    #ye(e, t) {
        let r = !1;
        if (0 !== this.#j) {
            const n = this.#z.get(e);
            if (void 0 !== n) if (this.#ne?.[n] && (clearTimeout(this.#ne?.[n]), this.#ne[n] = void 0), r = !0, 1 === this.#j) this.#Ie(t);
            else {
                this.#_e(n);
                const r = this.#H[n];
                if (this.#ce(r) ? r.__abortController.abort(new Error("deleted")) : (this.#se || this.#ie) && (this.#se && this.#q?.(r, e, t), this.#ie && this.#Z?.push([
                    r,
                    e,
                    t
                ])), this.#z.delete(e), this.#W[n] = void 0, this.#H[n] = void 0, n === this.#Q) this.#Q = this.#V[n];
                else if (n === this.#Y) this.#Y = this.#K[n];
                else {
                    const e = this.#V[n];
                    this.#K[e] = this.#K[n];
                    const t = this.#K[n];
                    this.#V[t] = this.#V[n];
                }
                this.#j--, this.#X.push(n);
            }
        }
        if (this.#ie && this.#Z?.length) {
            const e = this.#Z;
            let t;
            for(; t = e?.shift();)this.#F?.(...t);
        }
        return r;
    }
    clear() {
        return this.#Ie("delete");
    }
    #Ie(e) {
        for (const t of this.#pe({
            allowStale: !0
        })){
            const r = this.#H[t];
            if (this.#ce(r)) r.__abortController.abort(new Error("deleted"));
            else {
                const n = this.#W[t];
                this.#se && this.#q?.(r, n, e), this.#ie && this.#Z?.push([
                    r,
                    n,
                    e
                ]);
            }
        }
        if (this.#z.clear(), this.#H.fill(void 0), this.#W.fill(void 0), this.#re && this.#te) {
            this.#re.fill(0), this.#te.fill(0);
            for (const e of this.#ne ?? [])void 0 !== e && clearTimeout(e);
            this.#ne?.fill(void 0);
        }
        if (this.#ee && this.#ee.fill(0), this.#Y = 0, this.#Q = 0, this.#X.length = 0, this.#G = 0, this.#j = 0, this.#ie && this.#Z) {
            const e = this.#Z;
            let t;
            for(; t = e?.shift();)this.#F?.(...t);
        }
    }
}
var E = require("./module-4573.js"), I = require("./module-73024.js"), T = require("./module-37949.js"), C = require("./module-98875.js"), P = require("./module-44498.js"), A = require("./module-62671.js"), R = require("./module-25925.js"), M = require("./module-37374.js"), J = require("./module-97051.js"), O = require("./module-68388.js");
const B = async (e)=>{
    const t = (0, O.o1)(e);
    try {
        return await (0, n.realpath)(t);
    } catch  {
        return t;
    }
}, D = "CURSOR_FORCED_SHELL_EGRESS_NETWORK_DEFAULT", q = "CURSOR_FORCED_SHELL_EGRESS_DEPENDENCY_DENY_DOMAINS", N = /\$\(|`|<\(|>\(/, F = /[;&|]/;
let U, L, $, j;
function G() {
    if (void 0 === U) {
        const e = (process.env.CURSOR_FORCED_SHELL_EGRESS ?? "").trim().toLowerCase();
        U = "" !== e && "0" !== e && "false" !== e && "off" !== e;
    }
    return U;
}
function z(e) {
    const t = (process.env[e] ?? "").trim();
    if (t) try {
        return new RegExp(t, "i"), t;
    } catch (t) {
        throw new Error(`[forced-egress] invalid regex in ${e}: ${String(t)}`);
    }
}
function W(e) {
    return (process.env[e] ?? "").split(",").map((e)=>e.trim()).filter((e)=>e.length > 0);
}
function H(e) {
    const t = (process.env[e] ?? "").split(":").map((e)=>e.trim()).filter((e)=>e.length > 0), r = t.filter((e)=>e.startsWith("/")), n = t.length - r.length;
    return n > 0 && console.error(`[forced-egress] ignoring ${n} non-absolute path(s) in ${e}.`), r;
}
function K() {
    if (void 0 === j) {
        const e = (process.env[D] ?? "").trim().toLowerCase();
        let t = "deny";
        "allow" === e || "deny" === e ? t = e : "" !== e && console.error(`[forced-egress] ignoring invalid value in ${D} (expected "allow" or "deny"); using "deny".`);
        const r = W("CURSOR_FORCED_SHELL_EGRESS_DENY_DOMAINS"), n = (process.env[q] ?? "").trim();
        let s = r;
        "none" === n.toLowerCase() ? s = [] : "" !== n && (s = W(q)), j = {
            networkDefault: t,
            denyDomains: r,
            dependencyDenyDomains: s,
            allowDomains: W("CURSOR_FORCED_SHELL_EGRESS_ALLOW_DOMAINS"),
            writablePaths: H("CURSOR_FORCED_SHELL_EGRESS_WRITABLE_PATHS")
        };
    }
    return j;
}
function V(e, t, r = {}) {
    const n = [
        z(e),
        z(t)
    ].filter((e)=>void 0 !== e).map((e)=>`(?:${e})`);
    if (0 === n.length) return null;
    const s = n.join("|"), o = r.anchorToExecutable ? `^\\s*(?:[A-Za-z_][A-Za-z0-9_]*=[^\\s]*\\s+)*(?:${s})` : s;
    return new RegExp(o, "i");
}
function Y(e, t) {
    const r = function() {
        const e = K();
        return {
            type: "workspace_readwrite",
            ...e.writablePaths.length > 0 ? {
                additionalReadwritePaths: e.writablePaths
            } : {},
            networkPolicy: {
                version: 1,
                default: e.networkDefault,
                allow: [
                    "127.0.0.0/8",
                    "::1/128",
                    "localhost",
                    ...e.allowDomains
                ],
                ...e.denyDomains.length > 0 ? {
                    deny: e.denyDomains
                } : {}
            },
            networkPolicyStrict: !0,
            skipStatsigDefaults: !0,
            enableSharedBuildCache: !0
        };
    }(), n = (void 0 === L && (L = V("CURSOR_FORCED_SHELL_EGRESS_DEPENDENCY_REGEX", "CURSOR_FORCED_SHELL_EGRESS_EXTRA_DEPENDENCY_REGEX", {
        anchorToExecutable: !0
    })), L);
    if (null === n) return r;
    const s = t?.executableCommands ?? [];
    if (t?.parsingFailed || 0 === s.length) return r;
    if (N.test(e)) return r;
    const o = (void 0 === $ && ($ = V("CURSOR_FORCED_SHELL_EGRESS_SOURCE_REGEX", "CURSOR_FORCED_SHELL_EGRESS_EXTRA_SOURCE_REGEX")), $);
    for (const e of s){
        const t = e.fullText?.trim() || e.name?.trim() || "";
        if (!t || o?.test(t) || F.test(t)) return r;
    }
    return s.every((e)=>n.test(e.fullText?.trim() || e.name?.trim() || "")) ? function() {
        const e = K();
        return {
            type: "workspace_readwrite",
            ...e.writablePaths.length > 0 ? {
                additionalReadwritePaths: e.writablePaths
            } : {},
            networkPolicy: {
                version: 1,
                default: "allow",
                ...e.dependencyDenyDomains.length > 0 ? {
                    deny: e.dependencyDenyDomains
                } : {}
            },
            skipStatsigDefaults: !0,
            enableSharedBuildCache: !0
        };
    }() : r;
}
var Q = require("./module-13574.js");
function X(e) {
    if (!e) return;
    let t;
    return "allow" === e.default ? t = Q.h1.ALLOW : "deny" === e.default && (t = Q.h1.DENY), new Q.RB({
        version: e.version,
        defaultAction: t,
        deny: e.deny ?? [],
        allow: e.allow ?? [],
        logging: e.logging ? (r = e.logging, new Q.Qq({
            decisionLogPath: r.decisionLogPath,
            logFormat: r.logFormat
        })) : void 0
    });
    var r;
}
function Z(e) {
    const t = function(e) {
        if (!e) return;
        const t = {};
        if (void 0 !== e.version && (t.version = e.version), void 0 !== e.defaultAction) switch(e.defaultAction){
            case Q.h1.ALLOW:
                t.default = "allow";
                break;
            case Q.h1.DENY:
                t.default = "deny";
        }
        return e.deny && e.deny.length > 0 && (t.deny = e.deny), e.allow && e.allow.length > 0 && (t.allow = e.allow), e.logging && (t.logging = function(e) {
            const t = {};
            return e.decisionLogPath && (t.decisionLogPath = e.decisionLogPath), "jsonl" === e.logFormat && (t.logFormat = "jsonl"), t;
        }(e.logging)), t;
    }(e.networkPolicy);
    return t || (e.networkAccess ? (0, R.T6)() : (0, R.Po)());
}
function ee(e) {
    switch(e){
        case "system":
            return Q.Sz.SYSTEM;
        case "workspace":
            return Q.Sz.WORKSPACE;
        default:
            return Q.Sz.UNSPECIFIED;
    }
}
function te(e) {
    const t = function(e) {
        switch(e){
            case Q.Sz.SYSTEM:
                return "system";
            case Q.Sz.WORKSPACE:
                return "workspace";
            case Q.Sz.UNSPECIFIED:
            default:
                return;
        }
    }(e.readBoundary), r = e.additionalReadPaths ?? [];
    return {
        readBoundary: t,
        additionalReadPaths: "workspace" === t && r.length > 0 ? r : void 0
    };
}
function re(e) {
    if (!e) return {
        type: "insecure_none"
    };
    switch(e.type){
        case Q.vc.INSECURE_NONE:
        case Q.vc.UNSPECIFIED:
            return {
                type: "insecure_none",
                allowlistEscalated: e.allowlistEscalated,
                enableSharedBuildCache: e.enableSharedBuildCache,
                debugOutputDir: e.debugOutputDir,
                captureDenies: e.captureDenies
            };
        case Q.vc.WORKSPACE_READWRITE:
            return {
                type: "workspace_readwrite",
                networkPolicy: Z(e),
                skipStatsigDefaults: e.skipStatsigDefaults,
                additionalReadwritePaths: e.additionalReadwritePaths,
                additionalReadonlyPaths: e.additionalReadonlyPaths,
                disableTmpWrite: e.disableTmpWrite,
                enableSharedBuildCache: e.enableSharedBuildCache,
                debugOutputDir: e.debugOutputDir,
                captureDenies: e.captureDenies,
                networkPolicyStrict: e.networkPolicyStrict,
                ...te(e)
            };
        case Q.vc.WORKSPACE_READONLY:
            return {
                type: "workspace_readonly",
                networkPolicy: Z(e),
                skipStatsigDefaults: e.skipStatsigDefaults,
                additionalReadonlyPaths: e.additionalReadonlyPaths,
                disableTmpWrite: e.disableTmpWrite,
                enableSharedBuildCache: e.enableSharedBuildCache,
                debugOutputDir: e.debugOutputDir,
                captureDenies: e.captureDenies,
                networkPolicyStrict: e.networkPolicyStrict,
                ...te(e)
            };
        default:
            return {
                type: "insecure_none"
            };
    }
}
function ne(e) {
    if (e) return "insecure_none" === e.type ? new Q.Mw({
        type: Q.vc.INSECURE_NONE,
        allowlistEscalated: e.allowlistEscalated,
        enableSharedBuildCache: e.enableSharedBuildCache,
        debugOutputDir: e.debugOutputDir,
        captureDenies: e.captureDenies
    }) : "workspace_readwrite" === e.type ? new Q.Mw({
        type: Q.vc.WORKSPACE_READWRITE,
        networkAccess: (0, R.$b)(e.networkPolicy),
        skipStatsigDefaults: e.skipStatsigDefaults,
        additionalReadwritePaths: e.additionalReadwritePaths ?? [],
        additionalReadonlyPaths: e.additionalReadonlyPaths ?? [],
        disableTmpWrite: e.disableTmpWrite,
        enableSharedBuildCache: e.enableSharedBuildCache,
        debugOutputDir: e.debugOutputDir,
        captureDenies: e.captureDenies,
        networkPolicy: X(e.networkPolicy),
        networkPolicyStrict: e.networkPolicyStrict,
        readBoundary: ee(e.readBoundary),
        additionalReadPaths: "workspace" === e.readBoundary ? e.additionalReadPaths ?? [] : []
    }) : "workspace_readonly" === e.type ? new Q.Mw({
        type: Q.vc.WORKSPACE_READONLY,
        networkAccess: (0, R.$b)(e.networkPolicy),
        skipStatsigDefaults: e.skipStatsigDefaults,
        additionalReadonlyPaths: e.additionalReadonlyPaths ?? [],
        disableTmpWrite: e.disableTmpWrite,
        enableSharedBuildCache: e.enableSharedBuildCache,
        debugOutputDir: e.debugOutputDir,
        captureDenies: e.captureDenies,
        networkPolicy: X(e.networkPolicy),
        networkPolicyStrict: e.networkPolicyStrict,
        readBoundary: ee(e.readBoundary),
        additionalReadPaths: "workspace" === e.readBoundary ? e.additionalReadPaths ?? [] : []
    }) : new Q.Mw({
        type: Q.vc.INSECURE_NONE
    });
}
function se(e) {
    return " " === e || "\t" === e || "\n" === e || "\r" === e || " " === e || "​" === e || "‌" === e || "‍" === e || "\ufeff" === e;
}
function oe(e) {
    let t = "", r = !1;
    for (const n of e)se(n) ? r = !0 : (r && t.length > 0 && (t += " "), r = !1, t += n);
    return t;
}
function ie(e) {
    return e.length > 0 && [
        ...e
    ].every((e)=>"*" === e);
}
function ae(e) {
    const t = e.indexOf(":");
    if (t <= 0) return;
    const r = e.slice(0, t).trim();
    return [
        ...r
    ].some((e)=>0 === e.trim().length) ? void 0 : {
        executablePattern: r,
        argsPattern: e.slice(t + 1).trim()
    };
}
function ce(e, t) {
    const r = e.trim(), n = function(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }(r), s = `^${n.replace(/\\\*/g, ".*")}$`;
    try {
        return new RegExp(s).test(t);
    } catch  {
        return r === t;
    }
}
function le({ command: e, parsingResult: t }) {
    return [
        ...new Set([
            e,
            ...t.executableCommands.map((e)=>e.fullText)
        ])
    ];
}
const ue = {
    a: "",
    b: "\b",
    e: "",
    E: "",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t",
    v: "\v",
    "\\": "\\",
    "'": "'",
    '"': '"',
    "?": "?"
};
function de(e) {
    let t = "", r = "plain", n = 0;
    for(; n < e.length;){
        const s = e[n];
        if ("plain" === r) {
            "$" === s && "'" === e[n + 1] ? (r = "ansi", n += 2) : "$" === s && '"' === e[n + 1] ? (r = "double", n += 2) : "'" === s ? (r = "single", n++) : '"' === s ? (r = "double", n++) : "\\" === s && n + 1 < e.length ? ("\n" !== e[n + 1] && (t += e[n + 1]), n += 2) : (t += s, n++);
            continue;
        }
        if ("single" === r) {
            "'" === s ? r = "plain" : t += s, n++;
            continue;
        }
        if ("double" === r) {
            if ('"' === s) {
                r = "plain", n++;
                continue;
            }
            if ("\\" === s && n + 1 < e.length) {
                const r = e[n + 1];
                if ("$" === r || "`" === r || '"' === r || "\\" === r || "\n" === r) {
                    "\n" !== r && (t += r), n += 2;
                    continue;
                }
            }
            t += s, n++;
            continue;
        }
        if ("'" === s) {
            r = "plain", n++;
            continue;
        }
        if ("\\" !== s || n + 1 >= e.length) {
            t += s, n++;
            continue;
        }
        const o = e[n + 1], i = ue[o];
        if (void 0 !== i) {
            t += i, n += 2;
            continue;
        }
        const a = "x" === o ? e.slice(n + 2).match(/^[0-9a-fA-F]{1,2}/)?.[0] : "u" === o ? e.slice(n + 2).match(/^[0-9a-fA-F]{1,4}/)?.[0] : "U" === o ? e.slice(n + 2).match(/^[0-9a-fA-F]{1,8}/)?.[0] : e.slice(n + 1).match(/^[0-7]{1,3}/)?.[0], c = "u" === o || "U" === o, l = "x" === o || c ? 16 : 8;
        if (void 0 !== a) {
            const e = Number.parseInt(a, l);
            if (!c || e <= 1114111) {
                t += c ? String.fromCodePoint(e) : String.fromCharCode(e), n += a.length + (16 === l ? 2 : 1);
                continue;
            }
        }
        t += o, n += 2;
    }
    return oe(t);
}
function pe({ rule: e, command: t }) {
    const r = oe(e).trim();
    return 0 !== r.length && (null !== function(e) {
        const t = oe(e).trim();
        if (0 === t.length) return "Rule cannot be empty";
        if (t.length > 512) return "Rule cannot exceed 512 characters";
        if (ie(t)) return "Rule cannot match every command; be more specific than wildcards alone";
        if (t.startsWith(":")) return "Colon rules need an executable before `:` (e.g. `aws:*s3 rm*`)";
        const r = ae(t);
        if (void 0 !== r) {
            const { executablePattern: e, argsPattern: t } = r;
            if (ie(e) && (0 === t.length || ie(t))) return "Rule cannot match every command; narrow the executable or argument pattern";
        }
        return null;
    }(r) || [
        t.trim(),
        oe(t).trim(),
        de(t).trim()
    ].some((e)=>(function(e, t) {
            const r = ae(e);
            if (void 0 !== r) {
                const { executablePattern: e, argsPattern: n } = r, s = t.indexOf(" "), o = -1 === s ? t : t.slice(0, s), i = -1 === s ? "" : t.slice(s + 1).trim();
                if (ce(e, o) && ce(n, i)) return !0;
            }
            if (e.includes("*")) return ce(e, t);
            return t === e || t.startsWith(`${e} `);
        })(r, e)));
}
function me({ matchForms: e, blockedCommands: t }) {
    const r = t.map((e)=>e.trim()).filter((e)=>e.length > 0);
    if (0 === r.length) return;
    const n = e.map((e)=>e.trim()).filter((e)=>e.length > 0), s = n.length > 0 ? n : [
        ""
    ];
    for (const e of r)if (s.some((t)=>pe({
            rule: e,
            command: t
        }))) return e;
}
function he(e) {
    return `Denied: this command was blocked by administrator policy (denylist rule: ${e}) and was not executed. It cannot be approved from this conversation; only a user can run it manually outside the agent. You may continue working on the task.`;
}
function fe({ command: e, parsingResult: t, blockedCommands: r }) {
    if (0 === r.length) return;
    if (t.parsingFailed || 0 === t.executableCommands.length) return "Denied: this command could not be conclusively analyzed against your team's administrator command denylist, so it was blocked (fail-closed) and was not executed. It cannot be approved from this conversation; only a user can run it manually outside the agent. You may continue working on the task.";
    const n = me({
        matchForms: le({
            command: e,
            parsingResult: t
        }),
        blockedCommands: r
    });
    return void 0 === n ? void 0 : he(n);
}
var ge = require("./module-48161.js"), ye = require("./module-33002.js"), we = require("./module-68505.js");
const ve = [
    "Desktop",
    "Documents",
    "Downloads",
    "Music",
    "Movies",
    "Pictures",
    "Library",
    ".Trash"
], _e = "/Volumes";
function be(e) {
    const t = e.replace(/\/{2,}/g, "/");
    return t.length > 1 && t.endsWith("/") ? t.slice(0, -1) : t;
}
function Se(e, t) {
    if ("darwin" !== t.platform) return [];
    const r = be(e), n = r.toLowerCase(), s = be(t.homeDirectory), o = "/" === r ? 1 : r.split("/").length;
    return [
        ...ve.map((e)=>`${s}/${e}`),
        _e
    ].filter((e)=>{
        return (t = e.toLowerCase()) !== (r = n) && t.startsWith(r.endsWith("/") ? r : `${r}/`);
        var t, r;
    }).map((e)=>{
        const t = e.split("/").slice(o).join("/");
        return `${"/" === r ? "" : r}/${t}`;
    });
}
var ke = require("./module-65716.js"), xe = require("./module-46842.js"), Ee = require("./module-86613.js"), Ie = require("./module-70406.js");
class Te {
    constructor({ ttlMs: e, now: t = Date.now }){
        this.entries = new Map, this.ttlMs = "function" == typeof e ? e : Te.validated(e), this.now = t;
    }
    static validated(e) {
        if (!Number.isFinite(e) || e <= 0) throw new Error(`TTL cache requires a positive ttlMs, got ${e}`);
        return ()=>e;
    }
    get(e) {
        const t = this.entries.get(e);
        if (void 0 !== t) {
            if (!(t.expiresAtMs <= this.now())) return t.value;
            this.entries.delete(e);
        }
    }
    has(e) {
        const t = this.entries.get(e);
        return void 0 !== t && (!(t.expiresAtMs <= this.now()) || (this.entries.delete(e), !1));
    }
    set(e, t) {
        this.entries.set(e, {
            value: t,
            expiresAtMs: this.now() + this.ttlMs()
        });
    }
    delete(e) {
        return this.entries.delete(e);
    }
    clear() {
        this.entries.clear();
    }
}
let Ce;
function Pe(e) {
    Ce = e;
}
function Ae() {
    return void 0 !== Ce;
}
function Re(e) {
    if (void 0 !== Ce) try {
        Ce(e);
    } catch  {}
}
var Me = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Je = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Oe(e, { root: t, searchPaths: r = [], includeGlobs: n = [], excludeGlobs: s = [], caseSensitive: o = !1, cursorIgnoreFiles: i = [], sandboxPolicy: a = {
    type: "insecure_none"
}, noIgnoreVcs: c = !1, followSymlinks: l = !1, source: u = "ripwalk" }) {
    const d = [
        "--files",
        "--hidden",
        "--no-require-git",
        "--no-config",
        "--color=never"
    ], p = function(e = process.env) {
        const t = e.CURSOR_RIPWALK_THREADS?.trim();
        if (void 0 !== t && "" !== t) {
            const e = Number(t);
            if (Number.isInteger(e) && e >= 0) return 0 === e ? void 0 : e;
        }
        return Math.min(2, (0, ge.availableParallelism)());
    }();
    void 0 !== p && d.push("--threads", String(p)), l && d.push("--follow"), c && d.push("--no-ignore-vcs"), o && d.push("--case-sensitive");
    for (const e of i)d.push("--cursor-ignore", e);
    for (const e of n)d.push("--iglob", e);
    for (const e of s)d.push("--iglob", `!${e}`);
    r.length > 0 && d.push("--", ...r);
    let m, h = !1;
    const f = new Promise((e)=>{
        m = e;
    });
    return {
        lines: async function*() {
            const r = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                const o = Me(r, function(e, t, r, n) {
                    const s = (0, R.spawnInSandbox)((0, R.Ko)(), t, {
                        cwd: r
                    }, n), o = [];
                    s.stderr?.on("data", (e)=>{
                        o.push(e);
                    });
                    const i = new Promise((e, t)=>{
                        s.on("error", t), s.on("close", (t)=>e(t ?? 0));
                    });
                    if (i.catch(()=>{}), !s.stdout) throw new Error("No stdout from ripgrep process");
                    const a = new Promise((t)=>{
                        e.signal.aborted ? t("aborted") : e.signal.addEventListener("abort", ()=>t("aborted"), {
                            once: !0
                        });
                    });
                    return {
                        stdout: s.stdout,
                        processExit: i,
                        stderr: ()=>Buffer.concat(o).toString(),
                        aborted: a,
                        [Symbol.dispose] () {
                            s.kill();
                        }
                    };
                }(e, d, t, a), !1);
                Ae() && Re({
                    timestamp: Date.now(),
                    source: u,
                    mode: "files",
                    patternLength: 0,
                    hasPath: !0,
                    includeGlobCount: n.length,
                    excludeGlobCount: s.length,
                    sandboxPolicyType: a.type
                });
                let i = 0;
                const c = (async function*(e) {
                    let t = "";
                    for await (const r of e){
                        t += r.toString();
                        const e = t.split("\n");
                        t = e.pop() ?? "", yield* e;
                    }
                    t && (yield t);
                })(o.stdout)[Symbol.asyncIterator]();
                for(;;){
                    const e = await Promise.race([
                        c.next(),
                        o.aborted
                    ]);
                    if ("aborted" === e) {
                        h = !0, m(!0);
                        break;
                    }
                    if (e.done) break;
                    i++, yield e.value;
                }
                if (i > 0) ;
                else if (!h) {
                    const e = await o.processExit;
                    if (0 !== e && 1 !== e) {
                        const t = o.stderr();
                        throw new Error(`Ripgrep failed (exit ${e}) with no results${t ? `: ${t}` : ""}`);
                    }
                }
                h || m(!1);
            } catch (e) {
                r.error = e, r.hasError = !0;
            } finally{
                Je(r);
            }
        }(),
        didTimeout: f
    };
}
let Be;
function De({ root: e, searchPaths: t = [], includeGlobs: r = [], excludeGlobs: n = [], caseSensitive: s = !1, cursorIgnoreFiles: o = [], sandboxPolicy: i = {
    type: "insecure_none"
}, noIgnoreVcs: a = !1, followSymlinks: c = !1 }) {
    return JSON.stringify({
        root: e,
        searchPaths: t,
        includeGlobs: r,
        excludeGlobs: n,
        caseSensitive: s,
        cursorIgnoreFiles: o,
        sandboxPolicy: i,
        noIgnoreVcs: a,
        followSymlinks: c
    });
}
class qe {
    constructor(e = ()=>(function(e = process.env) {
            if (void 0 !== Be) return Be;
            const t = e.CURSOR_RIPWALK_CACHE_TTL_MS?.trim();
            if (void 0 !== t && "" !== t) {
                const e = Number(t);
                if (Number.isFinite(e) && e > 0) return e;
            }
            return 2e4;
        })()){
        this.cache = new Te({
            ttlMs: e
        });
    }
    clear() {
        this.cache.clear();
    }
    delete(e) {
        this.cache.delete(De(e));
    }
    walk(e, t) {
        const r = De(t);
        let n, s = !1, o = !1;
        const i = new Promise((e)=>{
            n = e;
        }), a = (e)=>{
            o || (o = !0, n(e));
        }, c = (l = e.signal, new Promise((e)=>{
            l.aborted ? e("aborted") : l.addEventListener("abort", ()=>e("aborted"), {
                once: !0
            });
        }));
        var l;
        const u = (async function*() {
            const n = this.cache.get(r);
            if (void 0 !== n) {
                const e = await Promise.race([
                    n.linesPromise.then((e)=>({
                            type: "lines",
                            lines: e
                        }), (e)=>({
                            type: "error",
                            error: e
                        })),
                    c.then(()=>({
                            type: "aborted"
                        }))
                ]);
                if ("aborted" === e.type) return s = !0, void a(!0);
                if ("lines" === e.type) return a(!1), void (yield* e.lines);
                this.cache.get(r) === n && this.cache.delete(r);
            }
            let o, i;
            const l = {
                linesPromise: new Promise((e, t)=>{
                    o = e, i = t;
                })
            };
            l.linesPromise.catch(()=>{}), this.cache.set(r, l);
            const u = [];
            let d, p = !1;
            try {
                const r = Oe(e, t);
                for await (const e of r.lines)u.push(e), yield e;
                if (await r.didTimeout) return s = !0, d = new Error("Ripwalk aborted before cacheable result was available"), void a(!0);
                p = !0;
            } catch (e) {
                throw d = e, e;
            } finally{
                p ? o?.(u) : (this.cache.get(r) === l && this.cache.delete(r), i?.(d ?? new Error("Ripwalk terminated before cacheable result was available"))), s || a(!1);
            }
        }).bind(this);
        return {
            lines: u(),
            didTimeout: i
        };
    }
}
var Ne = require("./module-15071.js");
async function Fe(e, t, r) {
    try {
        return (await t.exec(e, r, [
            "rev-parse",
            "--show-toplevel"
        ], {
            caller: "findGitRoot"
        })).stdout.trim();
    } catch  {
        return null;
    }
}
async function Ue(e, t, r) {
    try {
        return (await t.exec(e, r, [
            "config",
            "--get",
            "remote.origin.url"
        ], {
            caller: "getGitRemoteUrl"
        })).stdout.trim();
    } catch  {
        return;
    }
}
function Le(e) {
    const t = e.trim();
    if ("" === t) return t;
    try {
        const e = new URL(t);
        return e.username = "", e.password = "", e.toString();
    } catch  {
        return t;
    }
}
function $e(e) {
    let t = e.trim();
    t.startsWith("git@") && (t = `https://${t.slice(4).replace(":", "/")}`), /^[a-z][a-z0-9+.-]*:\/\//i.test(t) && !/^https?:\/\//i.test(t) && (t = t.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://")), /^https?:\/\//i.test(t) || (t = `https://${t}`);
    try {
        const e = new URL(t), r = e.pathname.replace(/\/+$/, "").replace(/\.git$/i, "").replace(/\/+$/, "");
        return e.hostname + r;
    } catch  {
        return t = t.replace(/^https?:\/\//i, ""), t = t.replace(/[?#].*$/, ""), t = t.replace(/\/+$/, ""), t = t.replace(/\.git$/i, ""), t = t.replace(/\/+$/, ""), t;
    }
}
const je = [
    "**/node_modules/**",
    "**/.git/**",
    "**/.turbo/**",
    "**/.next/**",
    "**/.cache/**",
    "**/.pnpm/**",
    "**/.yarn/**",
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/target/**",
    "**/.vscode/**",
    "**/.idea/**",
    "**/venv/**",
    "**/__pycache__/**",
    "**/logs/**",
    "**/tmp/**",
    "**/temp/**"
];
function Ge(e, t) {
    return Se(e, t).map((t)=>`/${s.posix.relative(e, t)}`);
}
const ze = [
    ".gitignore",
    ".cursorignore"
];
function We(e) {
    return e;
}
async function He(e) {
    if (!(0, s.isAbsolute)(e)) return null;
    const t = await (0, O.DN)(e);
    return null === t ? null : t;
}
async function Ke(e) {
    return e.getShellSandboxIgnoreMapping ? e.getShellSandboxIgnoreMapping() : e.getCursorIgnoreMapping();
}
class Ve {
    constructor(e, t, r){
        this.ignoreServicePromise = Qe.init((0, ye.q6)(), e, r ?? [
            process.cwd()
        ], t);
    }
    isIgnoredByAny(e) {
        return this.ignoreServicePromise.then((t)=>t.isIgnoredByAny(e));
    }
    isGitIgnored(e) {
        return this.ignoreServicePromise.then((t)=>t.isGitIgnored(e));
    }
    isCursorIgnored(e) {
        return this.ignoreServicePromise.then((t)=>t.isCursorIgnored(e));
    }
    isRepoBlocked(e) {
        return this.ignoreServicePromise.then((t)=>t.isRepoBlocked(e));
    }
    listCursorIgnoreFilesByRoot(e) {
        return this.ignoreServicePromise.then((t)=>t.listCursorIgnoreFilesByRoot(e));
    }
    getCursorIgnoreMapping() {
        return this.ignoreServicePromise.then((e)=>e.getCursorIgnoreMapping());
    }
    getShellSandboxIgnoreMapping() {
        return this.ignoreServicePromise.then((e)=>e.getShellSandboxIgnoreMapping());
    }
    getGitIgnoreMapping() {
        return this.ignoreServicePromise.then((e)=>e.getGitIgnoreMapping());
    }
    getRepoBlockExcludeGlobs(e) {
        return this.ignoreServicePromise.then((t)=>t.getRepoBlockExcludeGlobs(e));
    }
    handleCursorIgnoreCreated(e) {
        return this.ignoreServicePromise.then((t)=>t.handleCursorIgnoreCreated(e));
    }
    handleCursorIgnoreChanged(e) {
        return this.ignoreServicePromise.then((t)=>t.handleCursorIgnoreChanged(e));
    }
    handleCursorIgnoreDeleted(e) {
        return this.ignoreServicePromise.then((t)=>t.handleCursorIgnoreDeleted(e));
    }
}
const Ye = Math.min(8, Math.max(1, Math.floor(ge.availableParallelism() / 2)));
class Qe {
    constructor(e, t, r, n, s, o){
        this.gitExecutor = e, this.gitIgnoreMapping = t, this.cursorIgnoreMapping = r, this.teamSettingsService = n, this.rootDirectories = s, this.scanEnvironment = o, this.gitIgnoreCache = new we.q({
            max: 2e3
        }), this.cursorIgnoreCache = new we.q({
            max: 2e3
        }), this.gitRootCache = new we.q({
            max: 1e3
        }), this.gitRemoteUrlCache = new we.q({
            max: 200
        }), this.hasGitDirCache = new we.q({
            max: 1e3
        }), this.gitParsedIgnoreCache = new Map, this.cursorParsedIgnoreCache = new Map, this.unwalkedFolders = s.flatMap((e)=>Se(e, o));
    }
    static getRipwalkCache() {
        return Qe.ripwalkCache ??= new qe, Qe.ripwalkCache;
    }
    getIgnoreInstance(e, t, r) {
        let n = r.get(e);
        return n || (n = Ee().add(t), r.set(e, n)), n;
    }
    hasNoWorkspaceFolders() {
        return 0 === Object.keys(this.gitIgnoreMapping).length && 0 === Object.keys(this.cursorIgnoreMapping).length;
    }
    async resolveLookupRoot(e) {
        return await (0, O.DN)(e) ?? (0, O.o1)(e);
    }
    static async init(e, t, r, n, s = {
        platform: process.platform,
        homeDirectory: ge.homedir()
    }) {
        const o = {
            ...s,
            homeDirectory: await (0, O.DN)(s.homeDirectory) ?? s.homeDirectory
        }, i = await (0, ke.PH)(r, async (e)=>{
            const t = await (0, O.DN)(e);
            return null === t ? (console.warn(`[IgnoreService] Cannot resolve workspace root, using as-is: ${e}`), e) : t;
        }), a = {}, c = {}, l = (await (0, ke.PH)(i, async (r)=>{
            const n = await Fe(e, t, r);
            return null !== n && Se(n, o).length > 0 ? r : n;
        })).filter((e)=>null !== e);
        return l.length > 0 && await Promise.all([
            Qe.initializeIgnoreMapping(l, ".gitignore", a, o),
            Qe.initializeIgnoreMapping(i, ".cursorignore", c, o)
        ]), new Qe(t, a, c, n, i, o);
    }
    static async preloadHierarchy(e, t, r, n) {
        let o = (0, O.o1)(e);
        const i = (0, s.parse)(o).root;
        for(; o !== i;){
            if (n?.has(o)) {
                const e = (0, s.dirname)(o);
                if (e === o) break;
                o = e;
                continue;
            }
            void 0 === r[o] && await Qe.handleHierarchyIgnore(o, t, r), n?.add(o);
            const e = (0, s.dirname)(o);
            if (e === o) break;
            o = e;
        }
    }
    static async handleHierarchyIgnore(e, t, r) {
        const o = (0, s.join)(e, t);
        try {
            await (0, n.access)(o, n.constants.F_OK);
            const t = await (0, xe.yR)(o), s = Qe.parseIgnoreRules(t);
            r[e] = s;
        } catch (n) {
            "ENOENT" === n.code || console.error(`Error reading ${t} file at ${o}:`, n), r[e] = [];
        }
    }
    static async initializeIgnoreMapping(e, t, r, n) {
        try {
            const o = Qe.deduplicateRootDirectories(e), i = await Qe.promiseQueue.enqueueList(o, (e)=>Qe.findFilesWithRipgrep(e, t, n)), a = Array.from(i.values()).flat();
            await Promise.all(a.map(async (e)=>{
                try {
                    const t = await (0, xe.yR)(e), n = Qe.parseIgnoreRules(t), o = (0, s.dirname)(e);
                    r[o] = n;
                } catch (r) {
                    console.error(`Error processing ${t} file at ${e}:`, r);
                }
            }));
            const c = new Set;
            for (const e of o)await Qe.preloadHierarchy(e, t, r, c);
        } catch (e) {
            console.error(`Error initializing ignore mapping for ${t}:`, e);
        }
    }
    static async findFilesWithRipgrep(e, t, r) {
        const n = (0, ye.q6)(), o = [], i = {
            root: e,
            includeGlobs: ze.map((e)=>`**/${e}`),
            excludeGlobs: [
                ...je,
                ...Ge(e, r)
            ],
            source: "ignore_scan"
        }, a = Qe.getRipwalkCache().walk(n, i);
        for await (const r of a.lines)(0, s.basename)(r) === t && o.push((0, s.join)(e, r));
        return o;
    }
    async handleManualLookupWhenNoWorkspaceDirs(e, t) {
        const r = {};
        let n = (0, s.dirname)(e);
        const o = (0, s.parse)(n).root;
        for(;;){
            const e = (0, s.join)(n, t);
            try {
                const t = await (0, xe.yR)(e), s = Qe.parseIgnoreRules(t);
                s.length > 0 && (r[n] = s);
            } catch  {}
            if (n === o) break;
            n = (0, s.dirname)(n);
        }
        return this.testIgnored(e, r, (e, t)=>Ee().add(t));
    }
    async isIgnoredByAny(e) {
        const [t, r, n] = await Promise.all([
            this.checkGitIgnored(e),
            this.checkCursorIgnored(e),
            this.checkRepoBlocked(e)
        ]);
        return t || r || n;
    }
    async isGitIgnored(e) {
        return this.checkGitIgnored(e);
    }
    async isCursorIgnored(e) {
        return this.checkCursorIgnored(e);
    }
    async checkGitIgnored(e) {
        if (this.hasNoWorkspaceFolders()) return this.handleManualLookupWhenNoWorkspaceDirs(e, ".gitignore");
        const t = this.gitIgnoreCache.get(e);
        if (void 0 !== t) return t;
        await this.populateHierarchyIfNeeded(e, ".gitignore", this.gitIgnoreMapping);
        const r = this.checkIgnored(e, this.gitIgnoreMapping, this.gitParsedIgnoreCache);
        return this.gitIgnoreCache.set(e, r), r;
    }
    async checkCursorIgnored(e) {
        if (this.hasNoWorkspaceFolders()) return this.handleManualLookupWhenNoWorkspaceDirs(e, ".cursorignore");
        const t = this.cursorIgnoreCache.get(e);
        if (void 0 !== t) return t;
        await this.populateHierarchyIfNeeded(e, ".cursorignore", this.cursorIgnoreMapping);
        const r = this.checkIgnored(e, this.cursorIgnoreMapping, this.cursorParsedIgnoreCache);
        return this.cursorIgnoreCache.set(e, r), r;
    }
    isInUnwalkedFolder(e) {
        const t = "darwin" === this.scanEnvironment.platform, r = t ? e.toLowerCase() : e;
        return this.unwalkedFolders.some((e)=>(0, O.ZU)({
                basePath: t ? e.toLowerCase() : e,
                targetPath: r
            }));
    }
    async populateHierarchyIfNeeded(e, t, r) {
        let n = (0, s.dirname)((0, O.o1)(e));
        const o = [], i = (0, s.parse)(n).root;
        for(; n !== i;){
            const e = this.isInUnwalkedFolder(n);
            if (!e && this.rootDirectories.some((e)=>(0, O.ZU)({
                    basePath: e,
                    targetPath: n
                }))) {
                n = (0, s.dirname)(n);
                continue;
            }
            if (void 0 === r[n]) o.push(n);
            else if (!e) break;
            const t = (0, s.dirname)(n);
            if (t === n) break;
            n = t;
        }
        o.length > 0 && (await Qe.promiseQueue.enqueueList(o, (e)=>Qe.handleHierarchyIgnore(e, t, r)), ".gitignore" === t ? this.gitIgnoreCache.clear() : this.cursorIgnoreCache.clear());
    }
    testIgnored(e, t, r) {
        for (const [n, o] of Object.entries(t)){
            if (0 === o.length) continue;
            if (!(0, O.ZU)({
                basePath: n,
                targetPath: e
            })) continue;
            const t = (0, s.relative)(n, e);
            if ("" === t) continue;
            const i = r(n, o), a = (0, O.oL)(t), c = i.test(a);
            if (c.ignored && !c.unignored) return !0;
            const l = i.test(`${a}/`);
            if (l.ignored && !l.unignored) return !0;
        }
        return !1;
    }
    checkIgnored(e, t, r) {
        return this.testIgnored(e, t, (e, t)=>this.getIgnoreInstance(e, t, r));
    }
    async listCursorIgnoreFilesByRoot(e) {
        const t = await this.resolveLookupRoot(e), r = [];
        for (const [e, o] of Object.entries(this.cursorIgnoreMapping)){
            if (0 === o.length) continue;
            if (!(0, O.ZU)({
                basePath: t,
                targetPath: e
            })) continue;
            const i = (0, s.join)(e, ".cursorignore");
            try {
                await (0, n.access)(i), r.push(i);
            } catch  {}
        }
        return r;
    }
    async getCursorIgnoreMapping() {
        return {
            ...this.cursorIgnoreMapping
        };
    }
    async getShellSandboxIgnoreMapping() {
        const e = {
            ...this.cursorIgnoreMapping
        };
        for (const t of this.rootDirectories){
            const r = await this.getRepoBlockExcludeGlobs(t);
            if (0 === r.length) continue;
            const n = e[t];
            e[t] = n ? [
                ...n,
                ...r
            ] : r;
        }
        return e;
    }
    async getGitIgnoreMapping() {
        return {
            ...this.gitIgnoreMapping
        };
    }
    static deduplicateRootDirectories(e) {
        const t = [
            ...e.map((e)=>(0, O.o1)(e))
        ].sort((e, t)=>e.length - t.length), r = [];
        for (const e of t){
            r.some((t)=>e.startsWith(`${t}/`) || e.startsWith(`${t}\\`)) || r.push(e);
        }
        return r;
    }
    static parseIgnoreRules(e) {
        return e.split("\n").map((e)=>e.replace(/\r$/, "").trimStart()).filter((e)=>"" !== e && !e.startsWith("#"));
    }
    clearCaches() {
        this.gitIgnoreCache.clear(), this.cursorIgnoreCache.clear(), this.gitRootCache.clear(), this.gitRemoteUrlCache.clear(), this.hasGitDirCache.clear(), this.gitParsedIgnoreCache.clear(), this.cursorParsedIgnoreCache.clear();
    }
    async handleCursorIgnoreCreated(e) {
        const t = (0, s.dirname)(e), r = await (0, xe.yR)(e), n = Qe.parseIgnoreRules(r);
        this.cursorIgnoreMapping[t] = n, this.cursorParsedIgnoreCache.delete(t), this.cursorIgnoreCache.clear();
    }
    async handleCursorIgnoreChanged(e) {
        const t = (0, s.dirname)(e), r = await (0, xe.yR)(e), n = Qe.parseIgnoreRules(r);
        this.cursorIgnoreMapping[t] = n, this.cursorParsedIgnoreCache.delete(t), this.cursorIgnoreCache.clear();
    }
    handleCursorIgnoreDeleted(e) {
        const t = (0, s.dirname)(e);
        this.cursorIgnoreMapping[t] = [], this.cursorParsedIgnoreCache.delete(t), this.cursorIgnoreCache.clear();
    }
    async findGitRootsForFile(e) {
        const t = (0, O.o1)(e), r = this.gitRootCache.get(t);
        if (void 0 !== r) return r;
        const o = [], i = [], a = [];
        let c = t;
        const l = (0, s.parse)(c).root;
        for(; c !== l;){
            i.push(c), void 0 === this.hasGitDirCache.get(c) && a.push(c);
            const e = (0, s.dirname)(c);
            if (e === c) break;
            c = e;
        }
        if (a.length > 0) {
            const e = a.map((e)=>(0, n.access)((0, s.join)(e, ".git"), n.constants.F_OK).then(()=>[
                        e,
                        !0
                    ]).catch(()=>[
                        e,
                        !1
                    ])), t = await Promise.all(e);
            for (const [e, r] of t)this.hasGitDirCache.set(e, r);
        }
        for (const e of i){
            !0 === this.hasGitDirCache.get(e) && o.push(e);
        }
        return this.gitRootCache.set(t, o), o;
    }
    async isRepoBlocked(e) {
        return this.checkRepoBlocked(e);
    }
    async checkRepoBlocked(e) {
        const t = await this.findGitRootsForFile(e), r = await this.teamSettingsService?.getTeamRepos();
        if (!r) return !1;
        const n = r.repos ?? [], o = r.disableLocalExecAllowlistEnforcement ? [] : r.allowedRepos ?? [];
        if (0 === n.length && 0 === o.length) return !1;
        if (0 === t.length) return this.checkNonRepoPathBlockedByAllowlist(e, o);
        let i = 0 === o.length, a = !1;
        for (const r of t){
            let t;
            if (this.gitRemoteUrlCache.has(r) ? t = this.gitRemoteUrlCache.get(r) : (t = await Ue((0, ye.q6)(), this.gitExecutor, r), void 0 !== t && this.gitRemoteUrlCache.set(r, t)), void 0 === t) continue;
            const c = t, l = (0, s.relative)(r, e) || ".";
            for (const e of n)if (this.doesRepoUrlMatch(e.url, c)) {
                for (const t of e.patterns || [])if (this.matchGlob(t.pattern, l)) return !0;
            }
            o.length > 0 && !a && (a = !0, i = o.some((e)=>this.doesRepoUrlMatch(e.url, c) && (e.patterns || []).some((e)=>this.matchGlob(e.pattern, l))));
        }
        return !i;
    }
    async checkNonRepoPathBlockedByAllowlist(e, t) {
        if (0 === t.length) return !1;
        const r = await this.getCursorDataDir();
        if ((0, O.ZU)({
            basePath: r,
            targetPath: e
        })) return !1;
        const n = this.getWorkspaceRelativePath(e);
        for (const e of t)if (this.isWildcardUrl(e.url)) {
            if ((e.patterns || []).some((e)=>this.matchGlob(e.pattern, n))) return !1;
        } else if (this.isPathPatternUrl(e.url) && this.matchGlob(e.url, n)) return !1;
        return !0;
    }
    isWildcardUrl(e) {
        return "*" === e.trim();
    }
    isPathPatternUrl(e) {
        return !(e.includes("://") || e.includes("github.com") || e.includes("gitlab.com") || e.includes("bitbucket.org") || e.includes("@"));
    }
    getWorkspaceRelativePath(e) {
        let t;
        for (const r of this.rootDirectories)(0, O.ZU)({
            basePath: r,
            targetPath: e
        }) && (void 0 === t || r.length > t.length) && (t = r);
        return void 0 !== t ? (0, O.oL)((0, s.relative)(t, e)) : (0, O.oL)(e);
    }
    getCursorDataDir() {
        return this.cursorDataDirPromise ??= (async ()=>{
            const e = (0, s.join)(ge.homedir(), ".cursor");
            return await (0, O.DN)(e) ?? e;
        })(), this.cursorDataDirPromise;
    }
    doesRepoUrlMatch(e, t) {
        e.trim().toLowerCase().replace(/\.git$/i, "");
        if (e.includes("*")) {
            if ("*" === e.trim()) return !0;
            const r = $e(e).toLowerCase(), n = $e(t).toLowerCase();
            return this.matchRepoUrlGlob(r, n);
        }
        return $e(e).toLowerCase() === $e(t).toLowerCase();
    }
    matchGlob(e, t) {
        const r = e.trim();
        if (!("." !== t && "" !== t || "**" !== r && "**/*" !== r)) return !0;
        try {
            return Ie(r, {
                dot: !0
            })(t);
        } catch  {
            return r === t;
        }
    }
    matchRepoUrlGlob(e, t) {
        const r = e.trim();
        return !!this.matchGlob(r, t) || !!r.startsWith("*/") && this.matchGlob(`**/${r.slice(2)}`, t);
    }
    async getRepoBlockExcludeGlobs(e) {
        const t = await this.teamSettingsService?.getTeamRepos();
        if (!t?.repos?.length) return [];
        const r = await this.resolveLookupRoot(e), n = await this.getGitRepoMapping();
        if (0 === n.size) return [];
        const o = [];
        for (const [e, i] of n){
            if (void 0 === i) continue;
            const n = this.normalizePathForComparison(e), a = this.normalizePathForComparison(r);
            let c = !1, l = "";
            if (a.startsWith(n) ? (c = !0, l = "") : n.startsWith(a) && (c = !0, l = (0, s.relative)(r, e)), !c) continue;
            const u = t.repos.filter((e)=>this.doesRepoUrlMatch(e.url, i));
            if (0 !== u.length) for (const e of u)for (const t of e.patterns || []){
                const e = t.pattern.trim();
                if (!e) continue;
                let r;
                r = l ? (0, s.join)(l, e).replace(/\\/g, "/") : e, o.push(r), r.endsWith("/**") || o.push(`${r}/**`);
            }
        }
        return o;
    }
    normalizePathForComparison(e) {
        let t = e.replace(/\\/g, "/");
        return t.startsWith("/") && t.length > 2 && ":" === t[2] && (t = t.substring(1)), "win32" === process.platform && (t = t.toLowerCase()), t;
    }
    getGitRepoMapping() {
        return this.gitRepoMappingPromise || (this.gitRepoMappingPromise = this.initializeGitRepoMapping()), this.gitRepoMappingPromise;
    }
    async initializeGitRepoMapping() {
        const e = new Map, t = [], r = [
            "**/node_modules/**",
            "**/.turbo/**",
            "**/.next/**",
            "**/.cache/**",
            "**/.pnpm/**",
            "**/.yarn/**",
            "**/dist/**",
            "**/build/**",
            "**/out/**",
            "**/target/**",
            "**/.vscode/**",
            "**/.idea/**",
            "**/venv/**",
            "**/__pycache__/**",
            "**/logs/**",
            "**/tmp/**",
            "**/temp/**"
        ], o = (0, ye.q6)();
        for (const e of this.rootDirectories){
            const i = (0, O.o1)(e);
            try {
                await (0, n.access)((0, s.join)(i, ".git"), n.constants.F_OK), t.includes(i) || t.push(i);
            } catch  {}
            let a = (0, s.dirname)(i);
            const c = (0, s.parse)(a).root;
            for(; a !== c && "" !== a;){
                try {
                    await (0, n.access)((0, s.join)(a, ".git"), n.constants.F_OK), t.includes(a) || t.push(a);
                } catch  {}
                const e = (0, s.dirname)(a);
                if (e === a) break;
                a = e;
            }
            try {
                const e = {
                    root: i,
                    includeGlobs: [
                        "**/.git/config"
                    ],
                    excludeGlobs: [
                        ...r,
                        ...Ge(i, this.scanEnvironment)
                    ],
                    noIgnoreVcs: !0,
                    source: "ignore_scan"
                }, n = Qe.getRipwalkCache().walk(o, e);
                for await (const e of n.lines){
                    const r = (0, s.join)(i, e), n = (0, s.dirname)(r), o = (0, s.dirname)(n);
                    t.includes(o) || t.push(o);
                }
            } catch  {}
        }
        return await Promise.all(t.map(async (t)=>{
            try {
                const r = await Ue(o, this.gitExecutor, t);
                e.set(t, r);
            } catch  {
                e.set(t, void 0);
            }
        })), e;
    }
}
async function Xe(e, t) {
    switch(e.type){
        case "needsApproval":
            return t.onNeedsApproval(e.approvalReason, e.approvalDetails);
        case "userRejected":
            return t.onUserRejected(e.reason);
        case "cursorIgnore":
            return t.onPermissionDenied("Blocked by cursor ignore");
        case "permissionsConfig":
            return t.onPermissionDenied("Blocked by permissions configuration", {
                isReadonly: e.isReadonly
            });
        case "cursorFiles":
            return t.onPermissionDenied("Blocked by cursor files protection");
        case "adminBlock":
            return t.onPermissionDenied("Blocked by admin repository block");
        case "adminCommandDenylist":
            return t.onPermissionDenied(he(e.pattern));
        case "unsafeResolution":
            return t.onPermissionDenied(e.message);
        default:
            {
                const t = e;
                throw new Error(`Unhandled block reason type: ${JSON.stringify(t)}`);
            }
    }
}
function Ze(e) {
    switch(e.type){
        case "userRejected":
            return e.reason;
        case "unsafeResolution":
            return e.message;
        case "adminCommandDenylist":
            return he(e.pattern);
        case "needsApproval":
        case "cursorIgnore":
        case "adminBlock":
        case "permissionsConfig":
        case "cursorFiles":
            return "Command is not allowed";
        default:
            {
                const t = e;
                return `Command is not allowed (${JSON.stringify(t)})`;
            }
    }
}
function et(e, t, r) {
    return "permissionsConfig" === r.type ? {
        case: "permissionDenied",
        value: new A.jn({
            command: e,
            workingDirectory: t,
            error: "Command blocked by permissions configuration",
            isReadonly: r.isReadonly ?? !1
        })
    } : {
        case: "rejected",
        value: new A.pZ({
            command: e,
            workingDirectory: t,
            reason: Ze(r)
        })
    };
}
Qe.promiseQueue = new ke.TJ({
    max: Ye
});
var tt = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, rt = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const nt = (0, T.h)("local-exec:background-shell");
function st(e, t, r) {
    return new P.Lt({
        result: et(e, t, r)
    });
}
class ot {
    constructor(e, t){
        this.id = e, this.abortController = t, this.disposed = !1, this.completed = !1, this.completionListeners = [];
    }
    abort() {
        this.abortController.abort();
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.abortController.signal.aborted || this.abortController.abort());
    }
    get signal() {
        return this.abortController.signal;
    }
    isDisposed() {
        return this.disposed;
    }
    onComplete(e) {
        this.completed && this.completion ? e(this.completion) : this.completionListeners.push(e);
    }
    markCompleted(e) {
        if (this.completed) return;
        this.completed = !0, this.completion = e;
        const t = [
            ...this.completionListeners
        ];
        this.completionListeners = [];
        for (const r of t)r(e);
    }
}
async function it(e, t) {
    let r;
    try {
        for(let n = await t.next(); !n.done; n = await t.next())"stdin_ready" === n.value.type ? (e.stdin = n.value.stdin, e.pid = n.value.pid) : "exit" === n.value.type && (r = {
            code: n.value.code,
            aborted: n.value.aborted,
            outputPath: n.value.outputLocation?.filePath
        });
    } catch (e) {} finally{
        e.markCompleted(r ?? {
            code: null,
            aborted: e.signal.aborted
        });
    }
}
function at(e) {
    e().catch(()=>{});
}
const ct = 1e3, lt = 999999;
const ut = 65536;
class dt {
    constructor(e){
        if (this.args = e, this.carryover = "", this.matchedOccurrences = 0, this.emittedNotifications = 0, this.finished = !1, this.startedAtMs = Date.now(), this.limit = e.config.notificationLimit ?? 100, e.config.pattern.length > 500) throw new Error("Output notification pattern exceeds 500 characters");
        this.regex = J.L3.compile(e.config.pattern, J.L3.MULTILINE);
    }
    observe(e) {
        if (this.finished || this.matchedOccurrences >= this.limit || 0 === e.length) return;
        if (e.length > ut) {
            for(let t = 0; t < e.length && this.matchedOccurrences < this.limit; t += ut)this.observe(e.slice(t, t + ut));
            return;
        }
        const t = this.carryover.length, r = `${this.carryover}${e}`, n = this.regex.matcher(r);
        for(; this.matchedOccurrences < this.limit && n.find();){
            const e = n.group() ?? "";
            n.end() > t && this.queueMatch(e);
        }
        this.carryover = r.slice(-1024);
    }
    finish() {
        this.finished || (this.finished = !0, this.flushPendingBatch("finish"), this.clearFlushTimer(), 0 === this.matchedOccurrences && this.recordWatchOutcome("silent", {
            silent_ms: Date.now() - this.startedAtMs
        }));
    }
    queueMatch(e) {
        if (this.matchedOccurrences >= this.limit) return;
        this.matchedOccurrences += 1;
        const t = this.matchedOccurrences, r = function(e, t) {
            return e.length <= 5e3 ? `${t}: ${e}` : `${t} is ${e.length} characters; omitted from notification detail.`;
        }(e, 1 === t ? "Matched text" : "Latest match");
        return 1 === t ? (this.emitNotification({
            startOccurrence: t,
            endOccurrence: t,
            count: 1,
            matchedTextDetail: r
        }), this.recordWatchOutcome("matched", {
            first_match_ms: Date.now() - this.startedAtMs
        }), void (t === this.limit && this.emitLimitReachedNotification())) : (this.pendingBatch ? (this.pendingBatch.endOccurrence = t, this.pendingBatch.count += 1, this.pendingBatch.matchedTextDetail = r) : this.pendingBatch = {
            startOccurrence: t,
            endOccurrence: t,
            count: 1,
            matchedTextDetail: r
        }, t === this.limit ? (this.flushPendingBatch("limit"), void this.emitLimitReachedNotification()) : void this.scheduleFlush());
    }
    scheduleFlush() {
        if (void 0 !== this.flushTimer) return;
        const e = this.getDebounceMs();
        this.flushTimer = setTimeout(()=>{
            this.flushPendingBatch("debounce");
        }, e);
    }
    getDebounceMs() {
        const e = this.args.debounceMs ?? function(e) {
            const t = e.debounce;
            if (void 0 !== t && Number.isFinite(t)) return Math.ceil(1e3 * t);
        }(this.args.config) ?? 5e3;
        return Math.max(e, 5e3);
    }
    clearFlushTimer() {
        void 0 !== this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = void 0);
    }
    flushPendingBatch(e) {
        const t = this.pendingBatch;
        t && (this.pendingBatch = void 0, this.clearFlushTimer(), this.emitNotification(t));
    }
    emitNotification(e) {
        this.emittedNotifications += 1;
        const t = this.args.config.reason.trim() || `Shell output contains /${this.args.config.pattern}/`, r = this.args.config.pattern, n = void 0 !== e.matchedTextDetail ? ` ${e.matchedTextDetail}.` : "", s = 1 === e.count ? `Shell output has pattern /${r}/. This is occurrence number ${e.startOccurrence}.${n} The title message is being displayed to the user.` : `Shell output matched /${r}/ ${e.count} more times since the previous notification. The title message is being displayed to the user.${n}`, o = `${this.args.shellId}:task_progress:${this.emittedNotifications}`;
        var i;
        this.args.registry.enqueue({
            conversationId: this.args.conversationId,
            id: o,
            source: "shell",
            payload: {
                taskId: o,
                ...void 0 !== this.args.toolCallId ? {
                    toolCallId: this.args.toolCallId
                } : {},
                kind: "shell",
                status: "success",
                title: (i = t, i.length <= 500 ? i : `${i.slice(0, 500)}...`),
                detail: s,
                outputPath: this.args.outputPath,
                reason: "task_progress"
            }
        });
    }
    emitLimitReachedNotification() {
        this.emittedNotifications += 1;
        const e = this.args.config.pattern, t = `${this.args.shellId}:task_progress:${this.emittedNotifications}`;
        this.args.registry.enqueue({
            conversationId: this.args.conversationId,
            id: t,
            source: "shell",
            payload: {
                taskId: t,
                ...void 0 !== this.args.toolCallId ? {
                    toolCallId: this.args.toolCallId
                } : {},
                kind: "shell",
                status: "success",
                title: `Notification limit reached (${this.limit})`,
                detail: `Shell output matched /${e}/ ${this.limit} times and has reached the notification limit. No further notifications will be sent for this pattern. To continue monitoring, read the output file directly at the output path.`,
                outputPath: this.args.outputPath,
                reason: "task_progress"
            }
        }), this.recordWatchOutcome("limit_reached");
    }
    recordWatchOutcome(e, t) {
        void 0 !== this.args.ctx && nt.info(this.args.ctx, "agent.shell_output_notification_match", {
            event: "agent.shell_output_notification_match",
            outcome: e,
            shell_id: this.args.shellId,
            conversation_id: this.args.conversationId,
            tool_call_id: this.args.toolCallId,
            limit: this.limit,
            ...t
        });
    }
}
class pt {
    constructor(e, t, r){
        this.innerFactory = e, this.projectDir = t, this.backgroundWorkRegistry = r;
    }
    async spawn(e, t) {
        const r = this.createObserver(e.ctx, e.shellId, e.conversationId, e.toolCallId, e.outputNotification);
        if (!r) return this.innerFactory.spawn(e, t);
        try {
            return await this.innerFactory.spawn(e, this.createObservingExecutor(t, r));
        } catch (e) {
            throw r.finish(), e;
        }
    }
    async adopt(e) {
        const t = this.createObserver(e.ctx, e.shellId, void 0, e.toolCallId, e.outputNotification);
        if (!t) return this.innerFactory.adopt(e);
        e.initialOutput.length > 0 && t.observe(e.initialOutput);
        try {
            return await this.innerFactory.adopt({
                ...e,
                eventIterator: this.createObservingIterator(e.eventIterator, t)
            });
        } catch (e) {
            throw t.finish(), e;
        }
    }
    createObserver(e, t, r, n, o) {
        if (!this.backgroundWorkRegistry || !o) return;
        if (0 === o.pattern.trim().length) return;
        const i = s.join(this.projectDir, "terminals", `${t}.txt`);
        try {
            return new dt({
                shellId: t,
                outputPath: i,
                config: o,
                conversationId: r ?? m.sn5,
                toolCallId: n,
                registry: this.backgroundWorkRegistry,
                ctx: e
            });
        } catch (r) {
            return void (void 0 !== e && nt.warn(e, "Invalid shell output notification pattern", {
                shellId: t,
                error: r instanceof Error ? r.message : String(r)
            }));
        }
    }
    createObservingExecutor(e, t) {
        const r = e.execute.bind(e);
        return {
            ...e,
            execute: async function*(e, n) {
                try {
                    for await (const s of r(e, n))"stdout" === s.type || "stderr" === s.type ? t.observe(s.data) : "exit" === s.type && t.finish(), yield s;
                } finally{
                    t.finish();
                }
            }
        };
    }
    createObservingIterator(e, t) {
        const r = e.return?.bind(e);
        return {
            next: async ()=>{
                try {
                    const r = await e.next();
                    if (r.done) t.finish();
                    else {
                        const e = r.value;
                        "stdout" === e.type || "stderr" === e.type ? t.observe(e.data) : "exit" === e.type && t.finish();
                    }
                    return r;
                } catch (e) {
                    throw t.finish(), e;
                }
            },
            return: async (e)=>(t.finish(), r ? r(e) : {
                    done: !0,
                    value: void 0
                })
        };
    }
}
class mt {
    async spawn(e, t) {
        const r = new AbortController, n = new ot(e.shellId, r), s = t.execute(e.ctx, {
            command: e.command,
            workingDirectory: e.workingDirectory,
            signal: r.signal,
            toolCallId: e.toolCallId,
            conversationId: e.conversationId,
            requestId: e.requestId,
            secretScopeId: e.secretScopeId,
            sandboxPolicy: e.sandboxPolicy,
            pipeStdin: e.enableWriteShellStdinTool,
            showElapsedTime: !0
        })[Symbol.asyncIterator]();
        try {
            for(let e = await s.next(); !e.done; e = await s.next())if ("stdin_ready" === e.value.type) {
                n.stdin = e.value.stdin, n.pid = e.value.pid;
                break;
            }
        } catch (e) {
            if (e instanceof R.SandboxUnsupportedError) throw e;
        }
        return at(()=>it(n, s)), n;
    }
    async adopt(e) {
        const t = new ot(e.shellId, e.abortController);
        return t.stdin = e.stdin, t.pid = e.pid, at(()=>it(t, e.eventIterator)), t;
    }
}
function ht(e) {
    return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t")}"`;
}
function ft(e) {
    const t = String(e.runningForMs).padEnd(9, " "), r = e.status.padEnd(9, " ");
    let n = "---\n";
    return void 0 !== e.pid && 0 !== e.pid && (n += `pid: ${e.pid}\n`), n += `cwd: ${ht(e.cwd)}\n`, n += `command: ${ht(e.command)}\n`, void 0 !== e.title && e.title.trim().length > 0 && (n += `title: ${ht(e.title)}\n`), n += `status: ${r}\n`, n += `started_at: ${e.startedAt}\n`, n += `running_for_ms: ${t}\n`, n += "---\n", n;
}
class gt {
    constructor(e, t){
        this.innerFactory = e, this.projectDir = t;
    }
    async spawn(e, t) {
        const r = s.join(this.projectDir, "terminals");
        await (0, n.mkdir)(r, {
            recursive: !0
        });
        const o = this.createLoggingExecutor(t, e, r);
        return this.innerFactory.spawn(e, o);
    }
    createLoggingExecutor(e, t, r) {
        const o = e.execute.bind(e);
        return {
            ...e,
            execute: async function*(e, i) {
                let a, c, l, u = !1, d = !1;
                const p = Date.now(), m = new Date(p).toISOString();
                let h, f = "running", g = !1, y = Promise.resolve();
                const w = async (e)=>{
                    if (c) try {
                        await c.write(e);
                    } catch (e) {}
                }, v = t.shellId, _ = s.join(r, `${v}.txt`), b = async ()=>{
                    if (!a) return;
                    const e = Date.now() - p, r = ft({
                        pid: h,
                        cwd: t.workingDirectory,
                        command: t.command,
                        title: t.description,
                        status: f,
                        startedAt: m,
                        runningForMs: e
                    });
                    try {
                        await a.write(r, 0, "utf8");
                    } catch (e) {}
                }, S = ()=>(y = y.then(b).catch(()=>{}), y), k = ()=>{
                    void 0 !== l && (clearInterval(l), l = void 0);
                }, x = async (e)=>{
                    if (d) return;
                    d = !0, h = e;
                    const r = Date.now() - p, s = ft({
                        pid: e,
                        cwd: t.workingDirectory,
                        command: t.command,
                        title: t.description,
                        status: f,
                        startedAt: m,
                        runningForMs: r
                    });
                    await (0, n.writeFile)(_, s, "utf8"), l = setInterval(()=>{
                        S();
                    }, 5e3);
                }, T = async ()=>{
                    a || (a = await I.promises.open(_, "r+")), c || (c = await I.promises.open(_, "a"));
                }, C = async (e, t)=>{
                    if (!g) {
                        if (g = !0, k(), d || await x(), await T(), void 0 !== t) {
                            const e = Date.now() - p, r = `\n---\n${t}\n` + (i.showElapsedTime ? `elapsed_ms: ${e}\n` : "") + `ended_at: ${(new Date).toISOString()}\n---\n`;
                            await w(r);
                        }
                        f = e, await S();
                    }
                };
                try {
                    for await (const r of o(e, i)){
                        if ("stdout" === r.type) d || (await x(), await T()), await w(r.data);
                        else if ("stderr" === r.type) d || (await x(), await T()), await w(r.data);
                        else if ("stdin_ready" !== r.type || u) "exit" === r.type && await C(r.aborted ? "aborted" : 0 === r.code ? "succeeded" : "failed", `exit_code: ${r.code ?? "unknown"}`);
                        else {
                            u = !0, d || (await x(r.pid), await T());
                            const e = r.stdin;
                            if (e && !0 !== t.suppressStdinLogging) {
                                const t = (e)=>{
                                    if (null == e) return;
                                    const t = "string" == typeof e ? e : E.Buffer.isBuffer(e) ? e.toString() : String(e);
                                    if (!t) return;
                                    const r = t.endsWith("\n") ? t : `${t}\n`;
                                    w(`[stdin] ${r}`);
                                }, r = e.write.bind(e);
                                if (e.write = (e, n, s)=>(t(e), r(e, n, s)), "function" == typeof e.end) {
                                    const r = e.end.bind(e);
                                    e.end = (e, n, s)=>(void 0 !== e && t(e), r(e, n, s));
                                }
                            }
                        }
                        yield r;
                    }
                    if (!g) {
                        const e = i.signal?.aborted ?? !1;
                        await C(e ? "aborted" : "failed");
                    }
                } catch (e) {
                    const t = i.signal?.aborted ?? !1, r = ht(e instanceof Error ? e.message : "Unknown error");
                    if (await C(t ? "aborted" : "failed", t ? void 0 : `error: ${r}`), !t) throw e;
                } finally{
                    if (k(), await y, a) try {
                        await a.close();
                    } catch  {}
                    if (c) try {
                        await c.close();
                    } catch  {}
                }
            }
        };
    }
    async adopt(e) {
        const t = s.join(this.projectDir, "terminals");
        await (0, n.mkdir)(t, {
            recursive: !0
        });
        const r = s.join(t, `${e.shellId}.txt`), o = e.startTime, i = new Date(o).toISOString();
        let a = "running";
        const c = Date.now() - o, l = ft({
            pid: e.pid,
            cwd: e.workingDirectory,
            command: e.command,
            title: e.description,
            status: a,
            startedAt: i,
            runningForMs: c
        }) + (e.initialOutput ?? "");
        await (0, n.writeFile)(r, l, "utf8");
        const u = await I.promises.open(r, "r+");
        let d;
        try {
            d = await I.promises.open(r, "a");
        } catch (e) {
            throw await u.close(), e;
        }
        let p = !1, m = !1, h = Promise.resolve();
        const f = async ()=>{
            const t = Date.now() - o, r = ft({
                pid: e.pid,
                cwd: e.workingDirectory,
                command: e.command,
                title: e.description,
                status: a,
                startedAt: i,
                runningForMs: t
            });
            try {
                await u.write(r, 0, "utf8");
            } catch  {}
        }, g = ()=>(h = h.then(f).catch(()=>{}), h);
        let y = setInterval(()=>{
            g();
        }, 5e3);
        const w = ()=>{
            void 0 !== y && (clearInterval(y), y = void 0);
        }, v = async ()=>{
            if (!p) {
                p = !0, w(), await h;
                try {
                    await u.close();
                } catch  {}
                try {
                    await d.close();
                } catch  {}
            }
        }, _ = async (e)=>{
            try {
                await d.write(e);
            } catch (e) {}
        }, b = async (t, r)=>{
            if (!m) {
                if (m = !0, w(), void 0 !== r) {
                    const t = Date.now() - o, n = `\n---\n${r}\n` + (e.showElapsedTime ? `elapsed_ms: ${t}\n` : "") + `ended_at: ${(new Date).toISOString()}\n---\n`;
                    await _(n);
                }
                a = t, await g();
            }
        }, S = {
            next: async ()=>{
                try {
                    const t = await e.eventIterator.next();
                    if (t.done) {
                        if (!m) {
                            const t = e.abortController.signal.aborted;
                            await b(t ? "aborted" : "failed");
                        }
                    } else {
                        const e = t.value;
                        "stdout" === e.type || "stderr" === e.type ? await _(e.data) : "exit" === e.type && (await b(e.aborted ? "aborted" : 0 === e.code ? "succeeded" : "failed", `exit_code: ${e.code ?? "unknown"}`), await v());
                    }
                    return t.done && await v(), t;
                } catch (t) {
                    const r = e.abortController.signal.aborted;
                    throw await b(r ? "aborted" : "failed"), await v(), t;
                }
            },
            return: async ()=>{
                if (!m) {
                    const t = e.abortController.signal.aborted;
                    await b(t ? "aborted" : "failed");
                }
                return await v(), e.eventIterator.return ? e.eventIterator.return() : {
                    done: !0,
                    value: void 0
                };
            }
        };
        return this.innerFactory.adopt({
            ...e,
            eventIterator: S
        });
    }
}
class yt {
    constructor(e, t){
        this.factory = e, this.backgroundWorkRegistry = t, this.runningShells = new Map, this.nextShellId = ct + Math.floor(999e3 * Math.random());
    }
    registerShellWork(e, t) {
        const r = String(e.id);
        this.backgroundWorkRegistry?.upsertWork({
            id: r,
            kind: "shell",
            state: "running",
            metadata: (0, m.zyy)(t),
            abort: ()=>{
                this.abort(e.id);
            }
        });
    }
    clearShellWork(e) {
        this.backgroundWorkRegistry?.clearWork(String(e));
    }
    cleanupShell(e) {
        this.runningShells.has(e) && (this.runningShells.delete(e), this.clearShellWork(e));
    }
    enqueueShellCompletion(e, t, r, n, s) {
        if (!this.backgroundWorkRegistry) return;
        const o = s.aborted ? "aborted" : 0 === s.code ? "success" : "error", i = s.aborted || null === s.code || 0 === s.code ? void 0 : `exit_code=${s.code}`, a = String(e);
        this.backgroundWorkRegistry.enqueue({
            conversationId: r ?? m.sn5,
            id: a,
            source: "shell",
            payload: {
                taskId: a,
                ...void 0 !== t ? {
                    toolCallId: t
                } : {},
                kind: "shell",
                status: o,
                title: n,
                ...i ? {
                    detail: i
                } : {},
                ...s.outputPath ? {
                    outputPath: s.outputPath
                } : {},
                reason: "task_finished"
            }
        });
    }
    async spawn(e, t) {
        const r = await this.factory.spawn(e, t);
        return this.runningShells.set(r.id, r), this.registerShellWork(r, {
            title: e.description || e.command,
            cwd: e.workingDirectory,
            startTimeMs: Date.now()
        }), r.signal.addEventListener("abort", ()=>{
            this.cleanupShell(r.id);
        }), r.onComplete?.((t)=>{
            this.enqueueShellCompletion(r.id, e.toolCallId, e.conversationId, e.description || e.command, t), this.cleanupShell(r.id);
        }), {
            shellId: r.id,
            pid: r.pid
        };
    }
    async adopt(e) {
        const t = await this.factory.adopt(e);
        return this.runningShells.set(t.id, t), this.registerShellWork(t, {
            title: e.description || e.command,
            cwd: e.workingDirectory,
            startTimeMs: e.startTime
        }), t.signal.addEventListener("abort", ()=>{
            this.cleanupShell(t.id);
        }), t.onComplete?.((r)=>{
            this.enqueueShellCompletion(t.id, e.toolCallId, void 0, e.description || e.command, r), this.cleanupShell(t.id);
        }), {
            shellId: t.id,
            pid: e.pid
        };
    }
    generateShellId() {
        for(let e = 0; e <= 998999; e++){
            this.nextShellId > lt && (this.nextShellId = ct);
            const e = this.nextShellId;
            if (this.nextShellId += 1, !this.runningShells.has(e)) return e;
        }
        throw new Error("No available background shell id in range");
    }
    abort(e) {
        const t = this.runningShells.get(e);
        return !!t && (t.abort(), this.runningShells.delete(e), this.clearShellWork(e), !0);
    }
    isRunning(e) {
        return this.runningShells.has(e);
    }
    dispose() {
        for (const [e, t] of this.runningShells)t.dispose(), this.clearShellWork(e);
        this.runningShells.clear();
    }
    async writeStdin(e, t) {
        const r = this.runningShells.get(e);
        if (!r) throw new Error("Shell not found");
        if (!r.stdin) throw new Error("Shell stdin not available");
        const n = t.indexOf(""), s = -1 !== n ? n : t.indexOf("\\u0004");
        if (-1 !== s) {
            const e = t.substring(0, s);
            e.length > 0 && await new Promise((t, n)=>{
                r.stdin.write(e, (e)=>{
                    e ? n(e) : t(void 0);
                });
            }), r.stdin.end();
        } else await new Promise((e, n)=>{
            r.stdin.write(t, (t)=>{
                t ? n(t) : e(void 0);
            });
        });
    }
}
async function wt(e, t) {
    if (void 0 === e) throw new Error("Shell stdin not available");
    if (0 === t.byteLength) return 0;
    const r = E.Buffer.from(t.buffer, t.byteOffset, t.byteLength), n = r.indexOf(4);
    if (-1 !== n) {
        const t = r.subarray(0, n);
        return t.byteLength > 0 && await vt(e, t), e.end(), t.byteLength;
    }
    return await vt(e, r), r.byteLength;
}
function vt(e, t) {
    return new Promise((r, n)=>{
        e.write(t, (e)=>{
            null == e ? r() : n(e);
        });
    });
}
class _t {
    constructor(){
        this.handlers = [], this.buffer = [], this.open = !1, this.chain = Promise.resolve();
    }
    register(e) {
        this.handlers.push(e);
    }
    emit(e) {
        return this.enqueue(async ()=>{
            this.open ? await this.dispatch(e) : this.buffer.push(e);
        });
    }
    openAndFlush(e) {
        return this.enqueue(async ()=>{
            this.open = !0;
            const t = [
                ...e?.leading ?? [],
                ...this.buffer.splice(0)
            ];
            for (const e of t)await this.dispatch(e);
        });
    }
    enqueue(e) {
        return this.chain = this.chain.then(e, e), this.chain;
    }
    async dispatch(e) {
        for (const t of this.handlers)switch(e.type){
            case "start":
                await t.onStart?.();
                break;
            case "stdout":
                await t.onStdout(e.data);
                break;
            case "stderr":
                await t.onStderr(e.data);
                break;
            case "exit":
                await t.onExit(e.code);
                break;
            default:
        }
    }
}
class bt {
    constructor(e, t, r){
        this.innerFactory = e, this.creationCallback = t, this.conversationIdExtractor = r;
    }
    async spawn(e, t) {
        const r = new _t, n = this.createStreamingExecutor(t, r), s = await this.innerFactory.spawn(e, n), o = this.conversationIdExtractor?.(e.ctx);
        try {
            await this.creationCallback.onShellCreated({
                shellId: e.shellId,
                command: e.command,
                cwd: e.workingDirectory,
                registerEventHandler: (e)=>{
                    r.register(e);
                },
                conversationId: o,
                abortShell: ()=>s.abort(),
                description: e.description,
                toolCallId: e.toolCallId,
                writeStdin: (e)=>wt(s.stdin, e)
            }), await r.openAndFlush();
        } catch (t) {
            try {
                s.dispose();
            } catch (t) {
                nt.warn(e.ctx, "Failed to dispose background shell after onShellCreated failed", {
                    shellId: e.shellId,
                    disposeError: t
                });
            }
            throw t;
        }
        return s;
    }
    createStreamingExecutor(e, t) {
        const r = e.execute.bind(e);
        return {
            ...e,
            execute: async function*(e, n) {
                await t.emit({
                    type: "start"
                });
                try {
                    for await (const s of r(e, n))yield s, "stdout" === s.type ? await t.emit({
                        type: "stdout",
                        data: s.data
                    }) : "stderr" === s.type ? await t.emit({
                        type: "stderr",
                        data: s.data
                    }) : "exit" === s.type && await t.emit({
                        type: "exit",
                        code: s.code
                    });
                } catch (e) {
                    if (!(n.signal?.aborted ?? !1)) throw await t.emit({
                        type: "exit",
                        code: -1
                    }), e;
                }
            }
        };
    }
    async adopt(e) {
        const t = new _t, r = {
            next: async ()=>{
                const r = await e.eventIterator.next();
                if (!r.done) {
                    const e = r.value;
                    "stdout" === e.type ? await t.emit({
                        type: "stdout",
                        data: e.data
                    }) : "stderr" === e.type ? await t.emit({
                        type: "stderr",
                        data: e.data
                    }) : "exit" === e.type && await t.emit({
                        type: "exit",
                        code: e.code
                    });
                }
                return r;
            }
        }, n = await this.innerFactory.adopt({
            ...e,
            eventIterator: r
        }), s = e.ctx ? this.conversationIdExtractor?.(e.ctx) : void 0;
        try {
            await this.creationCallback.onShellCreated({
                shellId: e.shellId,
                command: e.command,
                cwd: e.workingDirectory,
                registerEventHandler: (e)=>{
                    t.register(e);
                },
                conversationId: s,
                abortShell: ()=>n.abort(),
                description: e.description,
                toolCallId: e.toolCallId,
                writeStdin: (e)=>wt(n.stdin, e)
            }), await t.openAndFlush({
                leading: void 0 !== e.initialOutput && e.initialOutput.length > 0 ? [
                    {
                        type: "stdout",
                        data: e.initialOutput
                    }
                ] : []
            });
        } catch (t) {
            try {
                n.dispose();
            } catch (t) {
                e.ctx && nt.warn(e.ctx, "Failed to dispose background shell after onShellCreated failed", {
                    shellId: e.shellId,
                    disposeError: t
                });
            }
            throw t;
        }
        return n;
    }
}
function St(e, t, r) {
    const n = new mt, s = new gt(n, e);
    return new bt(s, t, r);
}
class kt {
    constructor(e, t){
        this.inner = e, this.ownerConversationId = t;
    }
    enqueue(e) {
        this.inner.enqueue({
            ...e,
            conversationId: this.ownerConversationId
        });
    }
    enqueueCompletion(e) {
        this.enqueue({
            conversationId: this.ownerConversationId,
            id: e.taskId,
            source: e.kind,
            payload: e
        });
    }
    pull(e) {
        return this.inner.pull(e);
    }
    ack(e) {
        return this.inner.ack(e);
    }
    nack(e, t) {
        this.inner.nack(e, t);
    }
    suppress(e, t) {
        this.inner.suppress(e, t);
    }
    upsertWork(e) {
        this.inner.upsertWork(e);
    }
    clearWork(e) {
        return this.inner.clearWork(e);
    }
    abortWork(e) {
        return this.inner.abortWork(e);
    }
    hasRunningWork(e) {
        return this.inner.hasRunningWork(e);
    }
    abortAllWork(e) {
        return this.inner.abortAllWork(e);
    }
    listWork(e) {
        return this.inner.listWork(e);
    }
    drainCompletions() {
        return this.inner.drainCompletions();
    }
    hasPendingCompletions(e) {
        return this.inner.hasPendingCompletions(e);
    }
    markAwaitedCompletion(e) {
        this.inner.suppress(this.ownerConversationId, e);
    }
}
class xt {
    constructor(e, t, r, n, s, o, i){
        this.permissionsService = e, this.coreExecutor = t, this.ignoreService = r;
        const a = o && void 0 !== i ? new kt(o, i) : o, c = s ?? function(e) {
            const t = new mt;
            return new gt(t, e);
        }(n), l = new pt(c, n, a);
        this.backgroundShellManager = new yt(l, a);
    }
    getManager() {
        return this.backgroundShellManager;
    }
    dispose() {
        this.backgroundShellManager.dispose();
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            tt(r, (0, C.VI)(e.withName("LocalBackgroundShellExecutor.execute")), !1);
            const n = t.command, s = t.sandboxPolicy ? re(t.sandboxPolicy) : void 0, o = t.workingDirectory || await this.coreExecutor.getCwd(t.conversationId), i = (0, O.o1)(o), a = new A.HO((0, M.UD)(n).structured), c = fe({
                command: n,
                parsingResult: a,
                blockedCommands: t.adminCommandDenylist
            });
            if (void 0 !== c) return new P.Lt({
                result: {
                    case: "rejected",
                    value: new A.pZ({
                        command: n,
                        workingDirectory: i,
                        reason: c
                    })
                }
            });
            let l = s;
            if (nt.info(e, "Background shell: approval gate reached", {
                toolCallId: t.toolCallId,
                skipApproval: t.skipApproval,
                hasSmartModeApproval: void 0 !== t.smartModeApproval,
                hasSmartModeApprovalReason: void 0 !== t.smartModeApproval?.reason,
                hasSmartModeApprovalRequestId: void 0 !== t.smartModeApproval?.requestId,
                requestedPolicyType: s?.type ?? "undefined",
                parserCommandCount: a.executableCommands.length,
                classifierCommandCount: t.classifierResult?.commands.length ?? 0,
                commandLength: n.length
            }), t.skipApproval) {
                const r = await this.permissionsService.shouldEnforceShellInvariantBlocks(e, {
                    workingDirectory: i,
                    skipUnsafeWorkingDirectoryBlock: !0,
                    command: n,
                    parsingResult: a,
                    toolCallId: t.toolCallId
                }, s);
                if ("block" === r.kind) return nt.info(e, "Background shell: invariant blocked command", {
                    toolCallId: t.toolCallId,
                    blockReasonType: r.reason.type,
                    skipApproval: t.skipApproval
                }), st(n, i, r.reason);
                nt.info(e, "Background shell: skipped local approval", {
                    toolCallId: t.toolCallId,
                    requestedPolicyType: s?.type ?? "undefined"
                });
            } else {
                const r = await this.permissionsService.shouldBlockShellCommand(e, n, {
                    workingDirectory: i,
                    timeout: 0,
                    parsingResult: a,
                    toolCallId: t.toolCallId,
                    classifierResult: t.classifierResult,
                    smartModeApprovalReason: t.smartModeApproval?.reason,
                    smartModeApprovalRequestId: t.smartModeApproval?.requestId,
                    hookApprovalRequirement: (0, m.oGr)(t)
                }, s);
                if ("block" === r.kind) return nt.info(e, "Background shell: approval gate blocked command", {
                    toolCallId: t.toolCallId,
                    blockReasonType: r.reason.type,
                    hasSmartModeApproval: void 0 !== t.smartModeApproval,
                    skipApproval: t.skipApproval
                }), st(n, i, r.reason);
                l = r.policy, nt.info(e, "Background shell: approval gate allowed command", {
                    toolCallId: t.toolCallId,
                    skipApproval: t.skipApproval,
                    effectivePolicyType: l.type
                });
            }
            if (G() && (l = Y(n, a), "insecure_none" !== l.type)) {
                const e = await Ke(this.ignoreService);
                l = {
                    ...l,
                    ignoreMapping: e
                };
            }
            try {
                const r = this.backgroundShellManager.generateShellId(), s = l ? {
                    perRepo: l
                } : void 0, o = {
                    ctx: e,
                    command: n,
                    workingDirectory: i,
                    toolCallId: t.toolCallId,
                    conversationId: t.conversationId,
                    requestId: t.requestId,
                    secretScopeId: t.secretScopeId,
                    sandboxPolicy: s,
                    shellId: r,
                    enableWriteShellStdinTool: t.enableWriteShellStdinTool,
                    suppressStdinLogging: t.suppressStdinLogging,
                    description: t.description,
                    outputNotification: t.outputNotification
                }, a = await this.backgroundShellManager.spawn(o, this.coreExecutor);
                return new P.Lt({
                    result: {
                        case: "success",
                        value: new P.Po({
                            shellId: r,
                            command: n,
                            workingDirectory: i,
                            pid: a.pid
                        })
                    }
                });
            } catch (r) {
                if (r instanceof R.SandboxUnsupportedError) {
                    const s = l?.type ?? "unknown";
                    return nt.debug(e, "Background shell: sandbox policy unsupported on this host", {
                        toolCallId: t.toolCallId,
                        policyType: s,
                        reason: r.reason
                    }), new P.Lt({
                        result: {
                            case: "sandboxUnsupported",
                            value: new A.rI({
                                command: n,
                                workingDirectory: i,
                                sandboxPolicyType: s,
                                reason: r.reason ?? r.message,
                                isReadonly: "workspace_readonly" === s
                            })
                        }
                    });
                }
                return new P.Lt({
                    result: {
                        case: "error",
                        value: new P.Of({
                            command: n,
                            workingDirectory: i,
                            error: r instanceof Error ? r.message : "Unknown error"
                        })
                    }
                });
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            rt(r);
        }
    }
    writeStdin(e, t) {
        return this.backgroundShellManager.writeStdin(e, t);
    }
}
const Et = /\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)|\x1b\[[0-?]*[ -/]*[@-~]/g, It = /https?:\/\/[^\s"'<>]+/gi, Tt = /[)\],.;'"]+$/, Ct = 4096;
function Pt(e) {
    try {
        const t = new URL(e);
        return "" === t.username && "" === t.password && "/" === t.pathname && "" === t.search && "" === t.hash;
    } catch  {
        return !1;
    }
}
function At(e, t) {
    const r = new Set, n = (n, { complete: s })=>{
        if (!n.includes("://")) return;
        const o = n.replace(Et, "");
        for (const n of o.matchAll(It)){
            if (!s && n.index + n[0].length === o.length) continue;
            const i = n[0].replace(Tt, "");
            !r.has(i) && Pt(i) && (r.add(i), t({
                kind: "url",
                shellId: e,
                url: i
            }));
        }
    }, s = ()=>{
        let e = "";
        return (t)=>{
            const r = (e + t).split(/\r\n|\r|\n/);
            e = (r.pop() ?? "").slice(-Ct);
            for (const e of r)n(e, {
                complete: !0
            });
            n(e, {
                complete: !1
            });
        };
    };
    return {
        onStdout: s(),
        onStderr: s(),
        onExit: ()=>{}
    };
}
require("./module-16698.js");
var Rt = require("./module-46135.js"), Mt = require("./module-57975.js"), Jt = require("./module-4008.js"), Ot = require("./module-83133.js"), Bt = require("./module-43955.js"), Dt = require("./module-60896.js"), qt = require("./module-77598.js");
const Nt = (0, Mt.debuglog)("agent-skills-catalog-cache"), Ft = 1;
function Ut(e) {
    return (0, qt.createHash)("sha256").update(JSON.stringify({
        v: Ft,
        ...e
    })).digest("hex");
}
async function Lt(e) {
    try {
        return (await (0, n.stat)(e)).mtimeMs;
    } catch  {
        return;
    }
}
function $t(e) {
    if ("object" != typeof e || null === e) return !1;
    const t = e;
    return t.version === Ft && Array.isArray(t.rules) && Array.isArray(t.agentSkills) && Array.isArray(t.realSkillFilePathsByFullPath) && t.realSkillFilePathsByFullPath.every((e)=>Array.isArray(e) && 2 === e.length && "string" == typeof e[0] && "string" == typeof e[1]) && "object" == typeof t.fileMtimesMs && null !== t.fileMtimesMs && Object.values(t.fileMtimesMs).every((e)=>"number" == typeof e && Number.isFinite(e));
}
const jt = "skills-catalog", Gt = 5242880;
function zt(e) {
    const t = (0, s.join)(e, jt), r = (e)=>(0, s.join)(t, `${e.replace(/[^a-z0-9]/gi, "_")}.json`);
    return {
        async read (e) {
            try {
                const t = r(e);
                if ((await (0, n.stat)(t)).size > Gt) return;
                const s = JSON.parse(await (0, n.readFile)(t, "utf8"));
                return $t(s) ? s : void 0;
            } catch  {
                return;
            }
        },
        async write (e, s) {
            const o = r(e), i = `${o}.${process.pid}.${Date.now()}.tmp`;
            try {
                await (0, n.mkdir)(t, {
                    recursive: !0
                }), await (0, n.writeFile)(i, JSON.stringify(s), "utf8"), await (0, n.rename)(i, o);
            } catch (e) {
                Nt("write failed: %O", e), await (0, n.rm)(i, {
                    force: !0
                }).catch(()=>{});
            }
        }
    };
}
const Wt = {
    configDir: ".cursor",
    subdir: "skills-cursor",
    thirdParty: !1,
    builtin: !0
}, Ht = [
    {
        configDir: ".cursor",
        subdir: "skills",
        thirdParty: !1,
        builtin: !1
    },
    {
        configDir: ".claude",
        subdir: "skills",
        thirdParty: !0,
        builtin: !1
    },
    {
        configDir: ".codex",
        subdir: "skills",
        thirdParty: !0,
        builtin: !1
    },
    {
        configDir: ".grok",
        subdir: "skills",
        thirdParty: !0,
        builtin: !1
    },
    {
        configDir: ".agents",
        subdir: "skills",
        thirdParty: !1,
        builtin: !1
    },
    Wt
], Kt = (new Set(Ht.map((e)=>e.configDir)), new Set([
    "imagegen",
    "openai-docs",
    "opneai-docs",
    "plugin-creator",
    "skill-creator",
    "skill-installer"
]));
function Vt(e) {
    const t = e.findIndex((t, r)=>(function(e, t) {
            return Ht.some((r)=>r.configDir === e && r.subdir === t);
        })(t, e[r + 1]));
    return -1 !== t && e.slice(t + 2).some((e)=>e.startsWith("."));
}
function Yt(e) {
    const t = function(e) {
        return e.replace(/\\/g, "/").split("/").filter(Boolean);
    }(e);
    if (Vt(t)) return !0;
    const r = t.lastIndexOf(".codex");
    if (-1 === r || "skills" !== t[r + 1]) return !1;
    const n = t.at(-1), s = "SKILL.md" === n ? t.at(-2) : n;
    return void 0 !== s && Kt.has(s);
}
function Qt(e) {
    return {
        dirPath: (0, s.join)(e, Wt.configDir, Wt.subdir),
        scope: "builtin",
        source: "builtin"
    };
}
function Xt(e) {
    return Ht.filter((t)=>!t.builtin && (e || !t.thirdParty));
}
function Zt(e, t) {
    return Xt(t).map((t)=>({
            dirPath: (0, s.join)(e, t.configDir, t.subdir),
            scope: "project",
            source: "workspace"
        }));
}
function er(e, t) {
    return Xt(t).map((t)=>({
            dirPath: (0, s.join)(e, t.configDir, t.subdir),
            scope: "user",
            source: "user"
        }));
}
var tr = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, rr = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function nr(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const sr = Ht.map(({ configDir: e, subdir: t, thirdParty: r })=>({
        pattern: new RegExp(`[/\\\\]${nr(e)}[/\\\\]${nr(t)}[/\\\\]`, "i"),
        requiresThirdParty: r
    })), or = /[/\\]\.cursor[/\\]rules[/\\]/i, ir = [
    {
        pattern: /[/\\]\.cursor[/\\]agents[/\\]/i,
        requiresThirdParty: !1
    },
    {
        pattern: /[/\\]\.claude[/\\]agents[/\\]/i,
        requiresThirdParty: !0
    }
], ar = new Set([
    "AGENTS.md",
    "CLAUDE.md",
    "CLAUDE.local.md"
]);
function cr(e, t) {
    const r = e.replace(/\\/g, "/");
    const n = (0, s.basename)(r);
    if (ar.has(n)) return "AGENTS.md" === n || t && ("CLAUDE.md" === n || "CLAUDE.local.md" === n) ? "markdown" : void 0;
    if (or.test(r) && n.endsWith(".mdc")) return "rules";
    if ("SKILL.md" === n) {
        for (const { pattern: e, requiresThirdParty: n } of sr)if (e.test(r)) {
            if (n && !t) continue;
            return "skills";
        }
    }
    if (n.endsWith(".md")) {
        for (const { pattern: e, requiresThirdParty: n } of ir)if (e.test(r)) {
            if (n && !t) continue;
            return "agents";
        }
    }
}
class lr {
    constructor(e, t, r, n){
        this.root = e, this.gitExecutor = t, this.userHomeDirectory = r, this.getThirdPartyExtensibilityEnabled = n;
    }
    static getRipwalkCache() {
        return lr.ripwalkCache ??= new qe, lr.ripwalkCache;
    }
    async discover(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = tr(t, (0, C.VI)(e.withName("NestedExtensibilityService.discover")), !1), n = {
                rules: [],
                skills: [],
                markdown: [],
                agents: []
            }, o = (0, s.resolve)(this.root), i = (0, s.resolve)(this.userHomeDirectory);
            if (o === i || Se(o, {
                platform: process.platform,
                homeDirectory: i
            }).length > 0) return r.span.setAttribute("nested_extensibility.rules", 0), r.span.setAttribute("nested_extensibility.skills", 0), r.span.setAttribute("nested_extensibility.markdown", 0), r.span.setAttribute("nested_extensibility.agents", 0), n;
            if (!await Fe(e, this.gitExecutor, (0, s.resolve)(this.root))) return r.span.setAttribute("nested_extensibility.rules", 0), r.span.setAttribute("nested_extensibility.skills", 0), r.span.setAttribute("nested_extensibility.markdown", 0), r.span.setAttribute("nested_extensibility.agents", 0), n;
            const a = this.getThirdPartyExtensibilityEnabled(), c = this.buildIncludeGlobs(a), l = {
                root: this.root,
                includeGlobs: c,
                excludeGlobs: je,
                followSymlinks: !0,
                source: "nested_extensibility"
            }, u = {
                rules: [],
                skills: [],
                markdown: [],
                agents: []
            }, d = lr.getRipwalkCache();
            try {
                const e = d.walk(r.ctx, l);
                try {
                    for await (const t of e.lines){
                        const e = cr(t, a);
                        e && u[e].push((0, s.resolve)(this.root, t));
                    }
                } finally{
                    d.delete(l);
                }
            } catch  {}
            return r.span.setAttribute("nested_extensibility.rules", u.rules.length), r.span.setAttribute("nested_extensibility.skills", u.skills.length), r.span.setAttribute("nested_extensibility.markdown", u.markdown.length), r.span.setAttribute("nested_extensibility.agents", u.agents.length), u;
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            rr(t);
        }
    }
    buildIncludeGlobs(e) {
        const t = [
            "*/**/.cursor/**",
            "*/**/.agents/**",
            "*/**/AGENTS.md"
        ];
        return e && t.push("*/**/.claude/**", "*/**/.codex/**", "*/**/.grok/**", "*/**/CLAUDE.md", "*/**/CLAUDE.local.md"), t;
    }
}
const ur = new Set([
    "node_modules",
    "__pycache__",
    "dist",
    "build"
]);
function dr(e) {
    return e.startsWith(".") || ur.has(e);
}
async function pr({ rootDir: e, includeFile: t, maxDepth: r = 10, containmentRootDir: o }) {
    const i = [], a = [
        {
            dir: e,
            depth: 0
        }
    ], c = new Set, l = void 0 !== o ? await (0, n.realpath)(o) : null, u = (e)=>{
        if (null === l) return !0;
        const t = (0, s.relative)(l, e);
        return "" === t || !t.startsWith("..") && !(0, s.isAbsolute)(t);
    };
    for(; a.length > 0;){
        const e = a.pop();
        if (void 0 === e) continue;
        const { dir: o, depth: l } = e;
        if (l > r) continue;
        try {
            const e = await (0, n.realpath)(o);
            if (!u(e)) continue;
            if (c.has(e)) continue;
            c.add(e);
        } catch  {
            continue;
        }
        const d = await (0, n.readdir)(o, {
            withFileTypes: !0,
            encoding: "utf8"
        }).catch(()=>null);
        if (null !== d) for (const e of d){
            const r = (0, s.join)(o, e.name);
            let c = e.isDirectory(), u = e.isFile();
            if (e.isSymbolicLink()) try {
                const e = await (0, n.stat)(r);
                c = e.isDirectory(), u = e.isFile();
            } catch  {
                continue;
            }
            if (c) {
                if (dr(e.name)) continue;
                a.push({
                    dir: r,
                    depth: l + 1
                });
            } else u && t(e.name) && i.push(r);
        }
    }
    return i.sort((e, t)=>e.localeCompare(t)), i;
}
const mr = {
    agentStoreSkillsDirs: [],
    userHomeDirectory: ""
};
function hr(e) {
    const t = e.replace(/\\/g, "/");
    return t.endsWith("/") ? t.slice(0, -1) : t;
}
function fr(e, t) {
    const r = hr(t.userHomeDirectory), n = e.replace(/\\/g, "/");
    if (r.length > 0) for (const e of t.agentStoreSkillsDirs){
        const t = hr(e);
        if (t.length > 0 && n.startsWith(`${t}/`)) return {
            key: `${r}::skills/${n.slice(t.length + 1)}`,
            inAgentStore: !0
        };
    }
    return {
        key: gr(e),
        inAgentStore: !1
    };
}
function gr(e) {
    const t = e.replace(/\\/g, "/"), r = t.toLowerCase(), n = r.indexOf("/.cursor/"), s = r.indexOf("/.claude/"), o = r.indexOf("/.codex/"), i = r.indexOf("/.grok/"), a = r.indexOf("/.agents/");
    if (-1 !== n) {
        return `${t.slice(0, n)}::${t.slice(n + 9)}`;
    }
    if (-1 !== s) {
        return `${t.slice(0, s)}::${t.slice(s + 9)}`;
    }
    if (-1 !== o) {
        return `${t.slice(0, o)}::${t.slice(o + 8)}`;
    }
    if (-1 !== i) {
        return `${t.slice(0, i)}::${t.slice(i + 7)}`;
    }
    if (-1 !== a) {
        return `${t.slice(0, a)}::${t.slice(a + 9)}`;
    }
    return e;
}
function yr(e, t) {
    const r = new Map, n = [];
    for (const s of e){
        const { key: e, inAgentStore: o } = fr(s.fullPath, t), i = r.get(e);
        void 0 !== i ? o && !n[i].inAgentStore && (n[i] = {
            item: s,
            inAgentStore: o
        }) : (r.set(e, n.length), n.push({
            item: s,
            inAgentStore: o
        }));
    }
    return n.map((e)=>e.item);
}
var wr = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, vr = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const _r = (0, T.h)("local-exec:cursor-rules");
let br = !1;
function Sr(e) {
    br = e;
}
async function kr(e) {
    return await pr({
        rootDir: e,
        includeFile: (e)=>"SKILL.md" === e
    });
}
async function xr(e) {
    let t;
    try {
        t = await (0, xe.yR)(e);
    } catch (t) {
        return {
            skillFilePath: e,
            error: (0, m.OOW)(t)
        };
    }
    try {
        return {
            skillFilePath: e,
            content: t,
            parsed: (0, Dt.be)(t)
        };
    } catch (t) {
        return {
            skillFilePath: e,
            error: (0, m.kQm)(t)
        };
    }
}
async function Er(e) {
    const t = await B(e);
    return {
        ...await xr(e),
        realSkillFilePath: t
    };
}
function Ir(e) {
    return Pr(e.data?.environments ?? e.data?.metadata?.environments) ?? [];
}
function Tr(e) {
    return Pr(e.data?.["disabled-environments"] ?? e.data?.metadata?.disabledEnvironments) ?? [];
}
function Cr(e) {
    return Pr(e.data?.metadata?.scopedTo ?? e.data?.["metadata.scopedTo"]) ?? [];
}
function Pr(e) {
    if (Array.isArray(e)) {
        const t = e.filter((e)=>"string" == typeof e && e.length > 0);
        return 0 === t.length ? void 0 : t;
    }
    if ("string" == typeof e) {
        const t = e.split(",").map((e)=>e.trim()).filter((e)=>e.length > 0);
        return 0 === t.length ? void 0 : t;
    }
}
function Ar(e, t) {
    const r = function(e) {
        const t = e.data?.metadata?.surfaces;
        return Array.isArray(t) ? t : "string" == typeof t ? t.split(",").map((e)=>e.trim()).filter(Boolean) : [];
    }(e);
    return r.length > 0 && !r.includes(t);
}
function Rr(e) {
    return e.slice(0, 1536);
}
function Mr(e) {
    return !0 === e.data?.alwaysApply;
}
function Jr(e) {
    return !0 === e.data?.["disable-model-invocation"];
}
function Or({ skillFilePath: e, content: t, parsed: r }) {
    const n = function(e) {
        return (0, Dt.$Y)(e);
    }(r);
    if (Mr(r)) return new Bt.DX({
        fullPath: e,
        content: t,
        frontmatter: n,
        type: new Bt.f5({
            type: {
                case: "global",
                value: new Bt.i9
            }
        }),
        environments: Ir(r),
        disabledEnvironments: Tr(r),
        scopedTo: Cr(r)
    });
    const s = "string" == typeof r.data?.description ? Rr(r.data.description) : void 0, o = (0, m.ujx)(s, Jr(r));
    return o ? new Bt.DX({
        fullPath: e,
        parseError: o,
        frontmatter: n,
        scopedTo: Cr(r),
        type: new Bt.f5({
            type: {
                case: "agentFetched",
                value: new Bt.Xo
            }
        })
    }) : new Bt.DX({
        fullPath: e,
        content: t,
        frontmatter: n,
        type: new Bt.f5({
            type: {
                case: "agentFetched",
                value: new Bt.Xo({
                    description: s
                })
            }
        }),
        environments: Ir(r),
        disabledEnvironments: Tr(r),
        scopedTo: Cr(r)
    });
}
function Br({ skillFilePath: e, content: t, parsed: r }) {
    const n = "string" == typeof r.data?.description ? Rr(r.data.description) : "", s = (0, Jt.nSO)(r.data?.paths ?? r.data?.globs), o = Jr(r);
    return new Ot.N({
        fullPath: e,
        content: t,
        description: n,
        globs: s ?? [],
        parseError: (0, m.ujx)(n, o),
        environments: Ir(r),
        disabledEnvironments: Tr(r),
        scopedTo: Cr(r),
        disableModelInvocation: o
    });
}
function Dr({ rules: e, agentSkills: t, skillFilePath: r, errorMessage: n }) {
    e.push(function({ skillFilePath: e, errorMessage: t }) {
        return new Bt.DX({
            fullPath: e,
            parseError: t,
            type: new Bt.f5({
                type: {
                    case: "agentFetched",
                    value: new Bt.Xo
                }
            })
        });
    }({
        skillFilePath: r,
        errorMessage: n
    })), t.push(function({ skillFilePath: e, errorMessage: t }) {
        return new Ot.N({
            fullPath: e,
            parseError: t
        });
    }({
        skillFilePath: r,
        errorMessage: n
    }));
}
function qr(e, t, r) {
    if ("error" in t) return e.realSkillFilePathsByFullPath.set(t.skillFilePath, t.realSkillFilePath), void Dr({
        rules: e.rules,
        agentSkills: e.agentSkills,
        skillFilePath: t.skillFilePath,
        errorMessage: t.error
    });
    Ar(t.parsed, r) || (e.realSkillFilePathsByFullPath.set(t.skillFilePath, t.realSkillFilePath), e.rules.push(Or(t)), Mr(t.parsed) || e.agentSkills.push(Br(t)));
}
const Nr = (0, Mt.debuglog)("cursor-rules-service");
function Fr() {
    return {
        rules: [],
        agentSkills: [],
        realSkillFilePathsByFullPath: new Map
    };
}
function Ur(e) {
    return (t)=>(Nr("%s: %O", e, t), Fr());
}
function Lr(e, t) {
    return Ut({
        kind: "agent-store",
        surface: e,
        roots: [
            ...t
        ].sort()
    });
}
function $r(e, t) {
    const r = t.replace(/\\/g, "/").replace(/\/+$/, "");
    return "" !== r && e.replace(/\\/g, "/").startsWith(`${r}/`);
}
function jr(e) {
    const t = e.trim();
    return "true" === t || "false" !== t && (t.startsWith('"') && t.endsWith('"') || t.startsWith("'") && t.endsWith("'") ? t.slice(1, -1) : t);
}
function Gr(e) {
    const t = e.trimStart();
    if (!t.startsWith("---")) return null;
    const r = t.split("---").filter(Boolean);
    if (r.length < 2) return null;
    const n = r[0].trim(), s = r.slice(1).join("---").trim(), o = {};
    let i = null, a = null;
    for (const e of n.split("\n")){
        const t = e.replace(/\r$/, ""), r = t.match(/^\s+-\s+(.*)$/);
        if (r && a) {
            let e = r[1].trim();
            (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) && (e = e.slice(1, -1));
            const t = o[a];
            Array.isArray(t) && t.push(e);
            continue;
        }
        const n = t.startsWith("  ") || t.startsWith("\t");
        if (i && n) {
            const e = t.trim(), r = e.indexOf(":");
            if (-1 === r) continue;
            const n = e.slice(0, r).trim(), s = e.slice(r + 1).trim(), c = jr(s), l = `${i}.${n}`;
            "" === s ? (o[l] = [], a = l) : "metadata.environments" === l || "metadata.disabledEnvironments" === l || "metadata.scopedTo" === l ? (o[l] = String(c).split(",").map((e)=>e.trim()).filter(Boolean), a = null) : (o[l] = c, a = null);
            continue;
        }
        i = null, a = null;
        const s = t.indexOf(":");
        if (-1 === s) continue;
        const c = t.slice(0, s).trim(), l = t.slice(s + 1).trim();
        if ("" === l && "metadata" === c) {
            i = c;
            continue;
        }
        if ("globs" === c && "" === l) {
            o.globs = [], a = "globs";
            continue;
        }
        const u = jr(l);
        "metadata.environments" !== c && "metadata.disabledEnvironments" !== c && "metadata.scopedTo" !== c ? o[c] = u : o[c] = String(u).split(",").map((e)=>e.trim()).filter(Boolean);
    }
    return {
        frontmatter: o,
        rawFrontmatter: `---\n${n}\n---`,
        body: s
    };
}
class zr {
    constructor(e, t){
        this.cursorRulesServices = e, this.getAgentStoreSkillsContext = t, this.onChangeCallbacks = new Set;
    }
    async getAllCursorRules(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = wr(t, (0, C.VI)(e.withName("MergedCursorRulesService.getAllCursorRules")), !1), n = this.cursorRulesServices.map((e)=>e.getAllCursorRules(r.ctx).catch((e)=>((0, Mt.debuglog)("Failed to load cursor rules from service:", e), []))), s = await Promise.all(n);
            return yr(s.flat(), this.getAgentStoreSkillsContext());
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            vr(t);
        }
    }
    reload(e) {
        for (const t of this.cursorRulesServices)t.reload(e);
    }
    scheduleDidChangeRules() {
        void 0 === this.changeTimer && (this.changeTimer = setTimeout(()=>{
            this.changeTimer = void 0;
            for (const e of Array.from(this.onChangeCallbacks))e();
        }, zr.CHANGE_COALESCE_MS));
    }
    ensureChangeListenersRegistered() {
        void 0 === this.disposeChangeListeners && (this.disposeChangeListeners = this.cursorRulesServices.map((e)=>e.onDidChangeRules(()=>this.scheduleDidChangeRules())));
    }
    disposeChangeListenersIfUnused() {
        if (!(this.onChangeCallbacks.size > 0 || void 0 === this.disposeChangeListeners)) {
            for (const e of this.disposeChangeListeners)e();
            this.disposeChangeListeners = void 0, void 0 !== this.changeTimer && (clearTimeout(this.changeTimer), this.changeTimer = void 0);
        }
    }
    onDidChangeRules(e) {
        return this.onChangeCallbacks.add(e), this.ensureChangeListenersRegistered(), ()=>{
            this.onChangeCallbacks.delete(e), this.disposeChangeListenersIfUnused();
        };
    }
    dispose() {
        if (void 0 !== this.changeTimer && (clearTimeout(this.changeTimer), this.changeTimer = void 0), this.onChangeCallbacks.clear(), void 0 !== this.disposeChangeListeners) {
            for (const e of this.disposeChangeListeners)e();
            this.disposeChangeListeners = void 0;
        }
        for (const e of this.cursorRulesServices)e.dispose && e.dispose();
    }
}
zr.CHANGE_COALESCE_MS = 1e3;
class Wr {
    constructor(e, t, r, n, o, i, a, c){
        this.gitExecutor = t, this.rootDirectory = r, this.loadNestedRules = n, this.getThirdPartyExtensibilityEnabled = o, this.loadTraceId = void 0, this.onChangeCallbacks = new Set, this.nestedExtensibilityService = new lr(r, t, (0, ge.homedir)(), o), this.ignoreService = a ?? new Ve(t, void 0, [
            this.rootDirectory
        ]);
        const l = performance.now();
        if (this._rules = this.load(e, c).then((t)=>{
            try {
                _r.info(e, "LocalCursorRulesService load completed", {
                    durationMs: Math.round(performance.now() - l),
                    ruleCount: t.length
                });
            } catch  {}
            return t;
        }).catch((e)=>((0, Mt.debuglog)("Failed to load cursor rules:", e), [])), i) {
            const e = [
                ".cursor/rules/**/*.mdc",
                "AGENTS.md",
                "CLAUDE.md",
                "CLAUDE.local.md",
                ".cursorrules",
                ".cursorignore"
            ];
            this.unsubscribeWatcher = i.subscribe(this.rootDirectory, e, (e)=>{
                const t = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    const r = (0, ye.q6)(), n = wr(t, (0, C.VI)(r.withName("LocalCursorRulesService.fileWatcher.subscribe")), !1);
                    if (".cursorignore" === (0, s.basename)(e)) return Wr.getRipwalkCache().clear(), void this.reload(n.ctx);
                    this.reloadAtPath(n.ctx, e);
                } catch (e) {
                    t.error = e, t.hasError = !0;
                } finally{
                    vr(t);
                }
            });
        }
    }
    reload(e) {
        this._rules = this.load(e).catch((e)=>((0, Mt.debuglog)("Failed to load cursor rules:", e), []));
        for (const e of this.onChangeCallbacks)e();
    }
    static getRipwalkCache() {
        return Wr.ripwalkCache ??= new qe, Wr.ripwalkCache;
    }
    reloadAtPath(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.reloadAtPath")), !1), s = this._rules;
            this._rules = (async ()=>{
                const e = (await s).filter((e)=>e.fullPath !== t);
                if (br && t.endsWith(".mdc") && await this.isCursorIgnored(t)) return e;
                const r = (await this.readRulesAtPath(n.ctx, t)).map((e)=>this.toCursorRule(e));
                return [
                    ...e,
                    ...r
                ];
            })().catch((e)=>((0, Mt.debuglog)("Failed to load cursor rules at path:", e), []));
            for (const e of this.onChangeCallbacks)e();
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    isRuleMarkdownFile(e) {
        return "CLAUDE.md" === e || "CLAUDE.local.md" === e || "AGENTS.md" === e;
    }
    async readRulesAtPath(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.readRulesAtPath")), !1), o = (0, s.basename)(t);
            if (".cursorrules" === o) {
                const e = (0, s.resolve)(this.rootDirectory), t = await Fe(n.ctx, this.gitExecutor, e) || e, r = await this.loadCursorRulesRule(n.ctx, t);
                return r ? [
                    r
                ] : [];
            }
            if (o.endsWith(".mdc")) try {
                const e = Gr(await (0, xe.yR)(t));
                if (e) return [
                    {
                        filename: (0, s.basename)(t, ".mdc"),
                        path: t,
                        frontmatter: e.frontmatter,
                        rawFrontmatter: e.rawFrontmatter,
                        body: e.body
                    }
                ];
            } catch  {}
            else if (this.isRuleMarkdownFile(o)) try {
                return await this.loadRulesFromMarkdownFile(n.ctx, (0, s.dirname)(t), o);
            } catch  {}
            return [];
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    onDidChangeRules(e) {
        return this.onChangeCallbacks.add(e), ()=>{
            this.onChangeCallbacks.delete(e);
        };
    }
    dispose() {
        this.unsubscribeWatcher && (this.unsubscribeWatcher(), this.unsubscribeWatcher = void 0);
    }
    async load(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.load")), !1);
            this.loadTraceId = n.span.spanContext().traceId;
            const o = (0, s.resolve)(this.rootDirectory), i = await Fe(n.ctx, this.gitExecutor, o) || o, a = this.loadCursorRulesRule(n.ctx, i).then((e)=>e ? [
                    e
                ] : []), c = this.loadRulesFromDirAndAncestors(n.ctx, o);
            let l, u;
            if (this.loadNestedRules) {
                const e = t ?? this.nestedExtensibilityService.discover(n.ctx);
                l = e.then((e)=>this.parseNestedRuleFiles(n.ctx, e.rules)), u = e.then((e)=>this.parseNestedMarkdownFiles(n.ctx, e.markdown));
            } else l = [], u = [];
            const d = (await Promise.all([
                a,
                c,
                l,
                u
            ])).flat(), p = new Map;
            for (const e of d)p.set(e.path, e);
            return [
                ...p.values()
            ].map((e)=>this.toCursorRule(e));
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    async loadCursorRulesRule(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.loadCursorrules")), !1);
            try {
                const e = (0, s.join)(t, ".cursorrules");
                if ((await (0, n.stat)(e)).isFile()) {
                    return {
                        filename: ".cursorrules",
                        path: e,
                        frontmatter: {
                            alwaysApply: !0
                        },
                        body: await (0, xe.yR)(e)
                    };
                }
            } catch  {}
            return null;
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    async getAllCursorRules(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            return wr(t, (0, C.VI)(e.withName("LocalCursorRulesService.getAllCursorRules")), !1).span.setAttribute("cacheTraceId", this.loadTraceId ?? "undefined"), await this._rules;
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            vr(t);
        }
    }
    toCursorRule(e) {
        return function(e) {
            let t;
            if (!0 === e.frontmatter.alwaysApply) t = {
                case: "global",
                value: new Bt.i9
            };
            else {
                const r = (0, Jt.nSO)(e.frontmatter.globs);
                t = r && r.length > 0 ? {
                    case: "fileGlobbed",
                    value: new Bt.uT({
                        globs: r
                    })
                } : "string" == typeof e.frontmatter.description && e.frontmatter.description.trim().length > 0 ? {
                    case: "agentFetched",
                    value: new Bt.Xo({
                        description: Rr(e.frontmatter.description)
                    })
                } : {
                    case: "manuallyAttached",
                    value: new Bt._u
                };
            }
            const r = e.frontmatter["metadata.environments"], n = Array.isArray(r) ? r : [], s = e.frontmatter["metadata.disabledEnvironments"], o = Array.isArray(s) ? s : [], i = e.frontmatter["metadata.scopedTo"], a = Array.isArray(i) ? i : [];
            return new Bt.DX({
                fullPath: e.path,
                content: e.body,
                type: new Bt.f5({
                    type: t
                }),
                environments: n,
                disabledEnvironments: o,
                scopedTo: a,
                frontmatter: e.rawFrontmatter ?? ""
            });
        }({
            path: e.path,
            body: e.body,
            frontmatter: e.frontmatter,
            rawFrontmatter: e.rawFrontmatter
        });
    }
    async loadRulesFromDirAndAncestors(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.loadRulesFromDirAndAncestors")), !1), o = [];
            let i = t;
            const a = this.getThirdPartyExtensibilityEnabled();
            for(;;){
                const e = (0, s.join)(i, ".cursor", "rules"), t = i;
                o.push((async ()=>await this.dirIsDirectory(n.ctx, e) ? this.loadRulesFromDirectory(n.ctx, t) : [])());
                const r = [];
                a && r.push("CLAUDE.md", "CLAUDE.local.md"), r.push("AGENTS.md");
                for (const e of r)o.push(this.loadRulesFromMarkdownFile(n.ctx, i, e));
                const c = (0, s.dirname)(i);
                if (c === i) break;
                i = c;
            }
            const c = (await Promise.all(o)).flat();
            return n.span.setAttribute("rules", c.length), c;
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    async loadRulesFromMarkdownFile(e, t, r) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            wr(o, (0, C.VI)(e.withName("LocalCursorRulesService.loadRulesFromMarkdownFile")), !1).span.setAttribute("filename", r);
            try {
                const e = (0, s.join)(t, r);
                if (await this.isCursorIgnored(e)) return [];
                if ((await (0, n.stat)(e)).isFile()) {
                    const t = await (0, xe.yR)(e);
                    return [
                        {
                            filename: (0, s.basename)(e, ".md"),
                            path: e,
                            frontmatter: {
                                alwaysApply: !0
                            },
                            body: t
                        }
                    ];
                }
            } catch  {}
            return [];
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            vr(o);
        }
    }
    async isCursorIgnored(e) {
        try {
            const t = await He((0, s.resolve)(this.rootDirectory, e));
            return null === t || await this.ignoreService.isCursorIgnored(t);
        } catch  {
            return !1;
        }
    }
    async parseNestedRuleFiles(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.parseNestedRuleFiles")), !1), o = (await Promise.all(t.map(async (e)=>{
                try {
                    const t = Gr(await (0, xe.yR)(e));
                    if (t) return {
                        filename: (0, s.basename)(e, ".mdc"),
                        path: e,
                        frontmatter: t.frontmatter,
                        rawFrontmatter: t.rawFrontmatter,
                        body: t.body
                    };
                } catch  {}
            }))).filter((e)=>void 0 !== e);
            return n.span.setAttribute("ruleFiles", o.length), o;
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    async parseNestedMarkdownFiles(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.parseNestedMarkdownFiles")), !1), o = (await Promise.all(t.map(async (e)=>{
                try {
                    const t = (0, s.basename)(e);
                    if (!this.isRuleMarkdownFile(t)) return [];
                    const r = (0, s.dirname)(e);
                    return await this.loadRulesFromMarkdownFile(n.ctx, r, t);
                } catch  {}
                return [];
            }))).flat();
            return n.span.setAttribute("markdownFiles", o.length), o;
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    async loadRulesFromDirectory(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.loadRulesFromDirectory")), !1), i = [];
            try {
                const e = (0, s.join)(t, ".cursorignore"), r = br ? await (0, n.stat)(e).then((t)=>t.isFile() ? [
                        e
                    ] : [], ()=>[]) : [], a = br ? {
                    root: t,
                    searchPaths: [
                        (0, s.join)(".cursor", "rules")
                    ],
                    includeGlobs: [
                        "**/*.mdc"
                    ],
                    cursorIgnoreFiles: r,
                    followSymlinks: !0,
                    source: "cursor_rules"
                } : {
                    root: (0, s.join)(t, ".cursor", "rules"),
                    includeGlobs: [
                        "**/*.mdc"
                    ],
                    followSymlinks: !0,
                    source: "cursor_rules"
                }, c = Wr.getRipwalkCache().walk(o.ctx, a);
                for await (const e of c.lines){
                    const t = (0, s.join)(a.root, e);
                    i.push(...await this.readRulesAtPath(o.ctx, t));
                }
            } catch  {}
            return o.span.setAttribute("rules", i.length), i;
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    async dirIsDirectory(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            wr(r, (0, C.VI)(e.withName("LocalCursorRulesService.dirIsDirectory")), !1);
            try {
                return (await (0, n.stat)(t)).isDirectory();
            } catch  {
                return !1;
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
}
class Hr {
    constructor(e, t, r, n, s, o, i = ()=>!0, a = Promise.resolve(), c = "ide", l, u = ()=>[], d){
        if (this.workspacePaths = t, this.userHomeDirectory = r, this.gitExecutor = n, this.initialBuiltinSkillsSyncPromise = a, this.agentStoreLoadInFlight = !1, this.agentStoreLoadRequestedWhileInFlight = !1, this.agentStoreLoadGeneration = 0, this.watchersByFolder = new Map, this.onChangeCallbacks = new Set, this.reloadRequestedDuringSeed = !1, this.surface = c, this.getAgentStoreSkillRoots = u, this.fileWatcher = o, this.getThirdPartyExtensibilityEnabled = i, this.catalogCache = d, this.workspaceCatalogKey = Ut({
            kind: "workspace",
            surface: c,
            loadNestedSkills: s,
            thirdPartyExtensibility: i(),
            workspacePaths: [
                ...t
            ].sort(),
            userHomeDirectory: r
        }), void 0 !== l && l.length !== t.length) throw new Error(`initialNestedExtensibilityResults length (${l.length}) must match workspacePaths length (${t.length})`);
        this.nestedExtensibilityEntries = s ? t.map((e)=>new lr(e, n, r, i)) : [], this.foldersToWatch = this.computeFoldersToWatch();
        const p = performance.now();
        let m = !1, h = !1, f = !1;
        const g = this.loadAll(e, l).then((t)=>{
            try {
                _r.info(e, "AgentSkillsCursorRulesService load completed", {
                    durationMs: Math.round(performance.now() - p),
                    ruleCount: t.rules.length,
                    skillCount: t.agentSkills.length,
                    servedFromCache: m
                });
            } catch  {}
            return t;
        }).catch((e)=>(h = !0, Ur("Failed to load Agent Skills")(e)));
        if (void 0 === this.catalogCache) this._loaded = g;
        else {
            const t = this.readCatalog(this.workspaceCatalogKey).then((r)=>(f = !0, this._loaded !== t ? this._loaded : (h && this.closeSeedWindow(e), void 0 === r ? g : (m = !0, r))));
            this.seededLoaded = t, this._loaded = t, g.then((r)=>{
                this._loaded === t ? h ? f && this.closeSeedWindow(e) : (this._loaded = g, m && this.notifyChanged(), this.persistCatalog(this.workspaceCatalogKey, r), this.closeSeedWindow(e)) : this.seededLoaded = void 0;
            });
        }
        this.refreshAgentStoreSkills(), this.setupWatchers(this.foldersToWatch);
    }
    closeSeedWindow(e) {
        this.seededLoaded = void 0, this.reloadRequestedDuringSeed && (this.reloadRequestedDuringSeed = !1, this.reload(e));
    }
    async readCatalog(e) {
        if (void 0 !== this.catalogCache) try {
            const t = await this.catalogCache.read(e);
            return void 0 === t ? void 0 : await async function(e) {
                if (!$t(e)) return;
                const t = new Map;
                if (await Promise.all(e.realSkillFilePathsByFullPath.map(async ([r, n])=>{
                    const s = e.fileMtimesMs[n];
                    void 0 !== s && await Lt(r) === s && t.set(r, n);
                })), 0 === t.size) return;
                const r = (e)=>void 0 !== e && t.has(e);
                try {
                    return {
                        rules: e.rules.map((e)=>Bt.DX.fromJson(e, {
                                ignoreUnknownFields: !0
                            })).filter((e)=>r(e.fullPath)),
                        agentSkills: e.agentSkills.map((e)=>Ot.N.fromJson(e, {
                                ignoreUnknownFields: !0
                            })).filter((e)=>r(e.fullPath)),
                        realSkillFilePathsByFullPath: t
                    };
                } catch (e) {
                    return void Nt("snapshot failed to decode: %O", e);
                }
            }(t);
        } catch (e) {
            return void Nr("Failed to read the skills catalog cache: %O", e);
        }
    }
    persistCatalog(e, t) {
        const r = this.catalogCache;
        void 0 !== r && (async function(e) {
            const t = new Set(e.realSkillFilePathsByFullPath.values()), r = {};
            return await Promise.all(Array.from(t, async (e)=>{
                const t = await Lt(e);
                void 0 !== t && (r[e] = t);
            })), {
                version: Ft,
                rules: e.rules.map((e)=>e.toJson()),
                agentSkills: e.agentSkills.map((e)=>e.toJson()),
                realSkillFilePathsByFullPath: Array.from(e.realSkillFilePathsByFullPath),
                fileMtimesMs: r
            };
        })(t).then((t)=>r.write(e, t)).catch((e)=>{
            Nr("Failed to persist the skills catalog cache: %O", e);
        });
    }
    computeFoldersToWatch() {
        const e = this.getThirdPartyExtensibilityEnabled(), t = new Set;
        for (const r of this.workspacePaths){
            t.add((0, s.join)(r, ".cursor", "rules"));
            for (const n of Zt(r, e))t.add(n.dirPath);
        }
        for (const r of er(this.userHomeDirectory, e))t.add(r.dirPath);
        for (const e of this.getAgentStoreSkillRoots())t.add(e);
        return t.add(Qt(this.userHomeDirectory).dirPath), Array.from(t);
    }
    setupWatchers(e) {
        if (!this.fileWatcher) return;
        const t = [
            "**"
        ];
        for (const r of e){
            if (this.watchersByFolder.has(r)) continue;
            const e = this.fileWatcher.subscribe(r, t, (e)=>{
                const t = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    const r = (0, ye.q6)(), n = wr(t, (0, C.VI)(r.withName("AgentSkillsCursorRulesService.fileWatcher.subscribe")), !1);
                    this.reloadAtPath(n.ctx, e);
                } catch (e) {
                    t.error = e, t.hasError = !0;
                } finally{
                    vr(t);
                }
            });
            this.watchersByFolder.set(r, e);
        }
    }
    removeWatchers(e) {
        for (const t of e){
            const e = this.watchersByFolder.get(t);
            e && (e(), this.watchersByFolder.delete(t));
        }
    }
    async getAllCursorRules(e) {
        const [t] = await Promise.all([
            this._loaded,
            this.awaitAgentStoreSeed()
        ]);
        return this.withAgentStoreSkills(t).rules;
    }
    async awaitAgentStoreSeed() {
        void 0 !== this.agentStoreSeedInFlight && await (0, ke.wj)(this.agentStoreSeedInFlight, 250, "Agent Store skills cache read timed out").catch(()=>{});
    }
    reload(e) {
        this.syncWatchers(), this.seededLoaded = void 0, this.reloadRequestedDuringSeed = !1;
        const t = this.loadAll(e), r = t.catch(Ur("Failed to load Agent Skills"));
        this._loaded = r, t.then((e)=>{
            this._loaded === r && this.persistCatalog(this.workspaceCatalogKey, e);
        }, ()=>{}), this.refreshAgentStoreSkills(), this.notifyChanged();
    }
    reloadSkillRoots() {
        try {
            this.syncWatchers();
        } finally{
            this.refreshAgentStoreSkills();
        }
    }
    syncWatchers() {
        const e = this.computeFoldersToWatch(), t = new Set(this.foldersToWatch), r = new Set(e);
        this.removeWatchers(this.foldersToWatch.filter((e)=>!r.has(e))), this.setupWatchers(e.filter((e)=>!t.has(e))), this.foldersToWatch = e;
    }
    isPrunedByExtensibilityScan(e) {
        const t = e.replace(/\\/g, "/");
        for (const e of this.foldersToWatch){
            const r = e.replace(/\\/g, "/");
            if (t.startsWith(`${r}/`)) return t.slice(r.length + 1).split("/").slice(0, -1).some((e)=>e.startsWith("."));
        }
        return !1;
    }
    reloadAtPath(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = wr(r, (0, C.VI)(e.withName("AgentSkillsCursorRulesService.reloadAtPath")), !1), i = t.endsWith("SKILL.md") ? t : (0, s.join)(t, "SKILL.md");
            if (void 0 !== this.seededLoaded && this._loaded === this.seededLoaded && !this.getAgentStoreSkillRoots().some((e)=>$r(i, e))) return void (this.reloadRequestedDuringSeed = !0);
            if (this.getAgentStoreSkillRoots().some((e)=>$r(i, e))) return void this.refreshAgentStoreSkills();
            if (this.foldersToWatch.some((e)=>"" === (0, s.relative)(e, t))) return void this.reload(o.ctx);
            const a = this._loaded, c = (async ()=>{
                const e = await a, { realSkillFilePathsByFullPath: t } = e, r = function(e, t) {
                    const r = new Map(e.realSkillFilePathsByFullPath);
                    for (const e of t)r.delete(e);
                    return {
                        rules: e.rules.filter((e)=>!t.has(e.fullPath)),
                        agentSkills: e.agentSkills.filter((e)=>!t.has(e.fullPath)),
                        realSkillFilePathsByFullPath: r
                    };
                }(e, new Set([
                    i
                ]));
                if (Yt(i) || this.isPrunedByExtensibilityScan(i)) return r;
                const s = t.get(i);
                if (void 0 === s) {
                    try {
                        await (0, n.stat)(i);
                    } catch  {
                        return r;
                    }
                    return await this.loadAll(o.ctx);
                }
                let c;
                try {
                    c = await (0, n.realpath)(i);
                } catch  {
                    return await this.loadAll(o.ctx);
                }
                if (c !== s) return await this.loadAll(o.ctx);
                try {
                    return qr(r, {
                        ...await async function(e) {
                            const t = await (0, xe.yR)(e);
                            return {
                                skillFilePath: e,
                                content: t,
                                parsed: (0, Dt.be)(t)
                            };
                        }(i),
                        realSkillFilePath: c
                    }, this.surface), r;
                } catch  {
                    return await this.loadAll(o.ctx);
                }
            })().catch(Ur("Failed to load Agent Skills at path"));
            this._loaded = c, this.notifyChanged();
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
    async getAllAgentSkills(e) {
        const [t] = await Promise.all([
            this._loaded,
            this.awaitAgentStoreSeed()
        ]);
        return this.withAgentStoreSkills(t).agentSkills;
    }
    withAgentStoreSkills(e) {
        const t = this.settledAgentStoreSkills?.loaded;
        if (void 0 === t || 0 === t.realSkillFilePathsByFullPath.size) return e;
        const r = new Set(e.realSkillFilePathsByFullPath.values()), n = {
            rules: [
                ...e.rules
            ],
            agentSkills: [
                ...e.agentSkills
            ],
            realSkillFilePathsByFullPath: new Map(e.realSkillFilePathsByFullPath)
        }, s = new Set;
        for (const [e, o] of t.realSkillFilePathsByFullPath)n.realSkillFilePathsByFullPath.has(e) || r.has(o) ? s.add(e) : n.realSkillFilePathsByFullPath.set(e, o);
        for (const e of t.rules)s.has(e.fullPath) || n.rules.push(e);
        for (const e of t.agentSkills)s.has(e.fullPath) || n.agentSkills.push(e);
        return n;
    }
    refreshAgentStoreSkills() {
        const e = this.getAgentStoreSkillRoots().filter((e)=>"" !== e.trim()), t = ++this.agentStoreLoadGeneration;
        var r, n;
        if (void 0 === this.settledAgentStoreSkills || (r = this.settledAgentStoreSkills.roots, n = e, r.length === n.length && r.every((e, t)=>e === n[t])) || (this.settledAgentStoreSkills = void 0, this.notifyChanged()), 0 !== e.length) {
            if (void 0 === this.settledAgentStoreSkills) {
                const r = this.seedAgentStoreSkills(e, t).finally(()=>{
                    this.agentStoreSeedInFlight === r && (this.agentStoreSeedInFlight = void 0);
                });
                this.agentStoreSeedInFlight = r;
            }
            this.agentStoreLoadInFlight ? this.agentStoreLoadRequestedWhileInFlight = !0 : (this.agentStoreLoadInFlight = !0, (0, ke.wj)(this.loadAgentStoreSkills(e), 3e4, "Agent Store skills walk timed out").then((r)=>{
                t === this.agentStoreLoadGeneration && (this.settledAgentStoreSkills = {
                    roots: e,
                    loaded: r
                }, this.notifyChanged(), (r.rules.length > 0 || r.agentSkills.length > 0) && this.persistCatalog(Lr(this.surface, e), r));
            }, (e)=>{
                Nr("Failed to load Agent Store skills: %O", e);
            }).finally(()=>{
                this.agentStoreLoadInFlight = !1, this.agentStoreLoadRequestedWhileInFlight && (this.agentStoreLoadRequestedWhileInFlight = !1, this.refreshAgentStoreSkills());
            }));
        }
    }
    async seedAgentStoreSkills(e, t) {
        const r = await this.readCatalog(Lr(this.surface, e));
        void 0 !== r && t === this.agentStoreLoadGeneration && void 0 === this.settledAgentStoreSkills && (this.settledAgentStoreSkills = {
            roots: e,
            loaded: r
        }, this.notifyChanged());
    }
    async loadAgentStoreSkills(e) {
        const t = Fr(), r = (await Promise.all(e.map((e)=>kr(e)))).flat().filter((e)=>!Yt(e)), n = await Promise.all(r.map((e)=>Er(e))), s = new Set;
        for (const e of n)s.has(e.realSkillFilePath) || (s.add(e.realSkillFilePath), qr(t, e, this.surface));
        return t;
    }
    notifyChanged() {
        for (const e of Array.from(this.onChangeCallbacks))e();
    }
    onDidChangeSkills(e) {
        return this.onDidChangeRules(e);
    }
    onDidChangeRules(e) {
        return this.onChangeCallbacks.add(e), ()=>{
            this.onChangeCallbacks.delete(e);
        };
    }
    dispose() {
        for (const e of this.watchersByFolder.values())e();
        this.watchersByFolder.clear();
    }
    async loadAll(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wr(r, (0, C.VI)(e.withName("AgentSkillsCursorRulesService.loadAll")), !1);
            await this.initialBuiltinSkillsSyncPromise;
            const s = [], o = [], i = new Map, a = Promise.all(this.nestedExtensibilityEntries.map((e, r)=>(t?.[r] ?? e.discover(n.ctx)).catch((e)=>{
                    Nr("Failed to discover nested agent skills: %O", e);
                }))), c = new Set(this.getAgentStoreSkillRoots()), l = await Promise.all(this.foldersToWatch.filter((e)=>!c.has(e)).map(async (e)=>{
                const t = (await kr(e)).filter((e)=>!Yt(e));
                return Promise.all(t.map((e)=>Er(e)));
            })), u = new Set;
            for (const e of l)for (const t of e)if (!u.has(t.realSkillFilePath)) if (u.add(t.realSkillFilePath), "error" in t) i.set(t.skillFilePath, t.realSkillFilePath), Dr({
                rules: s,
                agentSkills: o,
                skillFilePath: t.skillFilePath,
                errorMessage: t.error
            });
            else {
                if (Ar(t.parsed, this.surface)) continue;
                i.set(t.skillFilePath, t.realSkillFilePath), s.push(Or(t)), Mr(t.parsed) || o.push(Br(t));
            }
            const d = (await a).flatMap((e)=>e?.skills ?? []).filter((e)=>!Yt(e)), p = await Promise.all(d.map((e)=>B(e))), m = [];
            for (const [e, t] of d.entries()){
                const r = p[e];
                u.has(r) || (u.add(r), m.push(t));
            }
            const h = await Promise.all(m.map((e)=>Er(e)));
            for (const e of h)if ("error" in e) i.set(e.skillFilePath, e.realSkillFilePath), Dr({
                rules: s,
                agentSkills: o,
                skillFilePath: e.skillFilePath,
                errorMessage: e.error
            });
            else {
                if (Ar(e.parsed, this.surface)) continue;
                i.set(e.skillFilePath, e.realSkillFilePath), s.push(Or(e)), Mr(e.parsed) || o.push(Br(e));
            }
            return n.span.setAttribute("agent_skills.total", s.length), n.span.setAttribute("agent_skills_proto.total", o.length), {
                rules: s,
                agentSkills: o,
                realSkillFilePathsByFullPath: i
            };
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
}
function Kr(e) {
    let t;
    switch(e.type){
        case "global":
            t = new Bt.f5({
                type: {
                    case: "global",
                    value: new Bt.i9
                }
            });
            break;
        case "fileGlobbed":
            t = new Bt.f5({
                type: {
                    case: "fileGlobbed",
                    value: new Bt.uT({
                        globs: e.globs ?? []
                    })
                }
            });
            break;
        case "agentFetched":
            t = new Bt.f5({
                type: {
                    case: "agentFetched",
                    value: new Bt.Xo({
                        description: Rr(e.description ?? "")
                    })
                }
            });
            break;
        case "manuallyAttached":
            t = new Bt.f5({
                type: {
                    case: "manuallyAttached",
                    value: new Bt._u
                }
            });
            break;
        default:
            e.type;
            t = new Bt.f5({
                type: {
                    case: "manuallyAttached",
                    value: new Bt._u
                }
            });
    }
    return new Bt.DX({
        fullPath: e.fullPath,
        content: e.content,
        type: t,
        gitRemoteOrigin: e.gitRemoteOrigin,
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginId: e.pluginId,
        marketplaceId: e.marketplaceId,
        environments: e.environments ?? [],
        disabledEnvironments: e.disabledEnvironments ?? [],
        scopedTo: []
    });
}
class Vr {
    constructor(e, t, r, n){
        this.getImportSettings = t, this.pluginsService = n, this._rules = Promise.resolve([]), this._agentSkills = Promise.resolve([]), this._lastLoaded = {
            rules: [],
            agentSkills: []
        }, this._loadGeneration = 0, this.onChangeCallbacks = new Set, this.currentImportSettings = this.getImportSettings();
        const s = performance.now();
        this.startLoad(e, !1, (t)=>{
            try {
                _r.info(e, "CursorPluginsAgentSkillsService load completed", {
                    durationMs: Math.round(performance.now() - s),
                    ruleCount: t.rules.length,
                    skillCount: t.agentSkills.length
                });
            } catch  {}
        });
    }
    startLoad(e, t, r) {
        const n = ++this._loadGeneration, s = this.loadAll(e, t).catch((e)=>((0, Mt.debuglog)("cursor-plugins-agent-skills")("Failed to load Cursor Plugins Agent Skills: %s", e instanceof Error ? e.message : String(e)), {
                rules: [],
                agentSkills: []
            })).then((e)=>(n === this._loadGeneration && (this._lastLoaded = e, r?.(e)), e)), o = ()=>(s.then((e)=>{
                n === this._loadGeneration && (this._rules = Promise.resolve(e.rules), this._agentSkills = Promise.resolve(e.agentSkills), this.notifyChange());
            }), this._lastLoaded), i = void 0 !== this._overBudgetLoad ? Promise.resolve(o()) : (0, ke.wj)(s, 5e3, "Cursor plugin load did not finish within the rules wait budget").catch((t)=>(_r.warn(e, "Serving rules without plugin primitives while plugins load", {
                error: t instanceof Error ? t.message : String(t),
                waitMs: 5e3
            }), this._overBudgetLoad = s, s.then(()=>{
                this._overBudgetLoad === s && (this._overBudgetLoad = void 0);
            }), o()));
        this._rules = i.then((e)=>e.rules), this._agentSkills = i.then((e)=>e.agentSkills);
    }
    notifyChange() {
        for (const e of Array.from(this.onChangeCallbacks))e();
    }
    async getAllCursorRules(e) {
        return await this._rules;
    }
    async getAllAgentSkills(e) {
        return await this._agentSkills;
    }
    reload(e) {
        const t = this.getImportSettings();
        this.currentImportSettings = t, this.startLoad(e, !0), this.notifyChange();
    }
    onDidChangeRules(e) {
        return this.onChangeCallbacks.add(e), ()=>{
            this.onChangeCallbacks.delete(e);
        };
    }
    onDidChangeSkills(e) {
        return this.onDidChangeRules(e);
    }
    dispose() {
        this.onChangeCallbacks.clear();
    }
    async loadAll(e, t = !1) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wr(r, (0, C.VI)(e.withName("CursorPluginsAgentSkillsService.loadAll")), !1), o = [], i = [];
            try {
                let e = t ? await this.pluginsService.reload() : await this.pluginsService.getAllEnabledPlugins();
                this.currentImportSettings.importThirdPartyPlugins || (e = e.filter((e)=>"claude-plugin" !== e.identifier.source)), n.span.setAttribute("cursor_plugins.loaded", e.length);
                const r = (0, Jt.AkQ)(e), a = (0, Jt.Vwy)(e);
                for (const e of [
                    ...r,
                    ...a
                ])o.push(Kr(e));
                for (const t of e){
                    const e = `plugin:${(0, Jt.s4m)(t.identifier)}`, r = (0, Jt.dBY)(t.identifier), n = (0, Jt.R3Q)(t.identifier), o = (0, Jt.xJd)(t.identifier), a = (0, Jt.iUy)(t.identifier);
                    for (const c of t.skills){
                        if (!0 === c.alwaysApply) continue;
                        let l = !1;
                        if (c.content?.includes("disable-model-invocation")) try {
                            l = !0 === (0, Dt.be)(c.content).data?.["disable-model-invocation"];
                        } catch  {}
                        i.push(new Ot.N({
                            fullPath: (0, s.join)(t.installPath, c.path),
                            content: c.content,
                            description: Rr(c.description ?? ""),
                            environments: c.environments ?? [],
                            disabledEnvironments: c.disabledEnvironments ?? [],
                            gitRemoteOrigin: e,
                            plugin: r,
                            marketplace: n,
                            pluginId: o,
                            marketplaceId: a,
                            disableModelInvocation: l
                        }));
                    }
                }
            } catch (e) {
                n.span.setAttribute("cursor_plugins.error", String(e));
            }
            return n.span.setAttribute("cursor_plugins.total", o.length), n.span.setAttribute("cursor_plugins_proto.total", i.length), {
                rules: o,
                agentSkills: i
            };
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vr(r);
        }
    }
}
var Yr = require("./module-11491.js");
const Qr = (0, Mt.debuglog)("local-subagents");
function Xr(e) {
    return "true" === (e ?? "").trim().toLowerCase();
}
function Zr(e) {
    const t = e.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/m);
    if (!t) return null;
    const r = t[1] ?? "", n = (t[2] ?? "").trim();
    if (0 === n.length) return null;
    const s = {};
    for (const e of r.split("\n")){
        const t = e.trim();
        if (0 === t.length || t.startsWith("#")) continue;
        const r = t.indexOf(":");
        if (-1 === r) continue;
        const n = t.slice(0, r).trim().toLowerCase(), o = t.slice(r + 1).trim();
        0 !== n.length && (s[n] = o);
    }
    const o = s.name ?? "", i = s.description, a = s.model, c = Xr(s["force-default-model"]), l = "true" === (s.readonly ?? "").trim().toLowerCase() ? Yr.b$.READONLY : Yr.b$.DEFAULT;
    const u = Xr(s.background ?? s.is_background), d = s.tools;
    return {
        name: o,
        description: i,
        tools: void 0 !== d && d.length > 0 ? d.split(",").map((e)=>e.trim()).filter((e)=>e.length > 0) : [],
        model: a,
        forceDefaultModel: c,
        prompt: n,
        permissionMode: l,
        isBackground: u
    };
}
function en(e) {
    const t = (0, s.extname)(e).toLowerCase();
    return ".md" === t || ".mdc" === t || ".markdown" === t;
}
function tn(e) {
    return (0, s.basename)(e, (0, s.extname)(e)).replace(/[\s_]+/g, "-");
}
async function rn(e, t) {
    return await pr({
        rootDir: e,
        includeFile: en,
        containmentRootDir: t
    });
}
class nn {
    constructor(e, t, r = "workspace", n = !1){
        this.workspacePath = e, this.cursorAgentsSource = r, this.allowExternalAgentSymlinks = n, this.getThirdPartyExtensibilityEnabled = t ?? (()=>!0), this.subagents = this.load().catch((e)=>(Qr("Failed to load subagents: %o", e), []));
    }
    async getAllSubagents() {
        return this.subagents;
    }
    async reload() {
        return this.subagents = this.load().catch((e)=>(Qr("Failed to load subagents: %o", e), [])), await this.subagents;
    }
    computeAgentsDirs() {
        const e = (0, s.resolve)(this.workspacePath), t = [
            {
                dirPath: (0, s.join)(e, ".cursor", "agents"),
                source: this.cursorAgentsSource
            }
        ];
        return this.getThirdPartyExtensibilityEnabled() && (t.push({
            dirPath: (0, s.join)(e, ".claude", "agents"),
            source: "claude"
        }), t.push({
            dirPath: (0, s.join)(e, ".grok", "agents"),
            source: "grok"
        })), t;
    }
    async load() {
        const e = this.computeAgentsDirs(), t = [];
        for (const { dirPath: r, source: o } of e){
            const e = await rn(r, this.allowExternalAgentSymlinks ? void 0 : this.workspacePath);
            for (const r of e){
                const e = (0, s.basename)(r);
                try {
                    if (!(await (0, n.stat)(r)).isFile()) continue;
                } catch (e) {
                    Qr("Skipping subagent file %s due to stat error: %o", r, e);
                    continue;
                }
                try {
                    const n = Zr(await (0, xe.yR)(r));
                    if (!n) continue;
                    t.push(new Yr.zz({
                        fullPath: r,
                        name: n.name || tn(e),
                        description: n.description ?? "",
                        tools: n.tools,
                        model: n.model ?? "inherit",
                        forceDefaultModel: n.forceDefaultModel,
                        prompt: n.prompt,
                        permissionMode: n.permissionMode,
                        isBackground: n.isBackground,
                        source: o
                    }));
                } catch (e) {
                    Qr("Failed to parse subagent file %s: %o", r, e);
                }
            }
        }
        return t;
    }
}
const sn = new Set([
    "claude-code-tutor"
]);
class on {
    constructor(e){
        this.subagentsServices = e;
    }
    async getAllSubagents() {
        const e = await Promise.all(this.subagentsServices.map((e)=>e.getAllSubagents().catch((e)=>(Qr("Failed to load subagents from merged service: %o", e), [])))), t = new Map;
        for (const r of e)for (const e of r)sn.has(e.name) || t.has(e.name) || t.set(e.name, e);
        return Array.from(t.values());
    }
    async reload() {
        return await Promise.all(this.subagentsServices.map((e)=>e.reload())), this.getAllSubagents();
    }
}
class an {
    constructor(e, t){
        this.getSettings = e, this.pluginsService = t, this._subagentsCache = [], this._loadId = 0, this._loadPromise = null, this._loadedOnce = !1, this.runLoadInBackground();
    }
    async getAllSubagents() {
        return this._loadPromise && await this._loadPromise, this._loadedOnce || await this.reload(), [
            ...this._subagentsCache
        ];
    }
    async reload() {
        return this.runLoadInBackground(!0), this._loadPromise && await this._loadPromise, this._subagentsCache;
    }
    runLoadInBackground(e = !1) {
        const t = ++this._loadId;
        this._loadPromise = this.load(e).then((e)=>{
            t === this._loadId && (this._subagentsCache = e, this._loadedOnce = !0);
        }).catch((e)=>{
            t === this._loadId && (Qr("Failed to load Cursor plugin subagents: %o", e), this._subagentsCache = [], this._loadedOnce = !0);
        }).finally(()=>{
            t === this._loadId && (this._loadPromise = null);
        });
    }
    dispose() {}
    async load(e) {
        const t = [];
        try {
            let r = e ? await this.pluginsService.reload() : await this.pluginsService.getAllEnabledPlugins();
            this.getSettings().importThirdPartyPlugins || (r = r.filter((e)=>"claude-plugin" !== e.identifier.source));
            const n = (0, Jt.DuR)(r, {
                stripModel: !0,
                stripTools: !0
            });
            for (const e of n){
                const r = "readonly" === e.permissionMode ? Yr.b$.READONLY : Yr.b$.DEFAULT;
                t.push(new Yr.zz({
                    name: e.name,
                    description: e.description,
                    tools: [],
                    model: "inherit",
                    prompt: e.prompt,
                    fullPath: e.fullPath,
                    permissionMode: r,
                    plugin: e.plugin,
                    marketplace: e.marketplace,
                    pluginId: e.pluginId,
                    marketplaceId: e.marketplaceId,
                    source: "plugin"
                }));
            }
        } catch  {}
        return t;
    }
}
var cn = require("./module-13807.js"), ln = require("./module-43643.js");
var un = require("./module-31421.js"), dn = require("./module-73015.js");
const pn = (0, Mt.promisify)(un.execFile), mn = pn;
function hn(e) {
    let t, r, n;
    for (const s of e.split("\n"))if (s.includes("*")) {
        const e = s.trim().match(/^(\d+)x(\d+)/);
        e && (t = parseInt(e[1], 10), r = parseInt(e[2], 10));
        const o = s.match(/(\d+(?:\.\d+)?)\*(?:\+)?/);
        if (o) {
            const e = parseFloat(o[1]);
            e > 0 && e <= 500 && (n = Math.round(e));
        }
        if (t && r) break;
    }
    if (!t || !r) {
        const n = e.match(/current\s+(\d+)\s*x\s*(\d+)/i);
        n && (t = parseInt(n[1], 10), r = parseInt(n[2], 10));
    }
    if (!t || !r) throw new Error(`Could not detect display resolution from xrandr output.\nExpected a line with '*' indicating active mode, or 'current WxH'.\nxrandr output:\n${e}`);
    return n || (n = 60), {
        width: t,
        height: r,
        refreshRate: n
    };
}
function fn(e, t, r, n) {
    const s = function(e = {}) {
        const t = e.displayWidth ?? 1920, r = e.displayHeight ?? 1200, n = e.apiWidth ?? 1280;
        return {
            width: n,
            height: Math.round(n * r / t)
        };
    }({
        displayWidth: e,
        displayHeight: t,
        apiWidth: r
    });
    return {
        display: {
            width: e,
            height: t
        },
        api: {
            width: s.width,
            height: n ?? s.height
        }
    };
}
async function gn(e) {
    const { stdout: t } = await (0, dn.D9)(mn, "xrandr", [
        "--display",
        e
    ], {
        timeout: 5e3,
        encoding: "utf8"
    }), r = hn(t);
    return {
        display: r,
        resolution: fn(r.width, r.height),
        resolutionString: `${r.width}x${r.height}`
    };
}
require("node:timers/promises");
const yn = 3e4, wn = un.execFile;
function vn(e, t, r) {
    return new Promise((n, s)=>{
        r?.signal?.throwIfAborted();
        const o = {
            timeout: r?.timeoutMs ?? yn,
            env: r?.env ? {
                ...process.env,
                ...r.env
            } : void 0,
            signal: r?.signal
        };
        (0, dn.D9)(wn, e, t.map(String), {
            ...o,
            encoding: "utf8"
        }, (e, t)=>{
            e ? s(e) : n(t);
        });
    });
}
ln.w3.UNSPECIFIED, ln.w3.LEFT, ln.w3.MIDDLE, ln.w3.RIGHT, ln.w3.BACK, ln.w3.FORWARD, ln.Dh.UNSPECIFIED, ln.Dh.UP, ln.Dh.DOWN, ln.Dh.LEFT, ln.Dh.RIGHT;
ln.yq.NONE, ln.yq.FIXED, ln.yq.STABLE, ln.yq.CAP, ln.yq.CAPTURE_FAILED, (0, cn.v5)("computer_use.session.duration_ms", {
    description: "Duration of computer-use session in milliseconds"
}), (0, cn.v5)("computer_use.session.action_count", {
    description: "Number of actions executed in a computer-use session"
}), (0, cn.Pu)("computer_use.session.result", {
    description: "Result status of computer-use session",
    labelNames: [
        "outcome"
    ]
}), (0, cn.Pu)("computer_use.session.action_kind", {
    description: "Requested computer-use actions by bounded kind",
    labelNames: [
        "kind"
    ]
}), (0, T.h)("computer-use");
var _n = require("./module-57614.js");
Error;
(0, cn.Pu)("computer_use.desktop_lease.check", {
    description: "Desktop lease action-gate outcomes",
    labelNames: [
        "outcome",
        "reason"
    ]
}), _n.MP;
var bn = require("./module-36038.js"), Sn = require("./module-8592.js");
const kn = "agent.v1.";
Sn.HL;
var xn = (0, Sn.QT)(bn.proto3, kn, "CursorType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ARROW"
    ],
    [
        2,
        "POINTER"
    ],
    [
        3,
        "TEXT"
    ],
    [
        4,
        "WAIT"
    ],
    [
        5,
        "CROSSHAIR"
    ],
    [
        6,
        "MOVE"
    ],
    [
        7,
        "RESIZE_NS"
    ],
    [
        8,
        "RESIZE_EW"
    ],
    [
        9,
        "RESIZE_NWSE"
    ],
    [
        10,
        "RESIZE_NESW"
    ],
    [
        11,
        "NOT_ALLOWED"
    ],
    [
        12,
        "GRAB"
    ],
    [
        13,
        "GRABBING"
    ]
], 1);
bn.proto3, bn.proto3, bn.proto3, bn.proto3;
class En {
    constructor(e){
        this.config = e;
        const t = e.display.width / e.display.height, r = e.api.width / e.api.height;
        if (Math.abs(t - r) > .02) throw new Error(`Aspect ratio mismatch: display=${t.toFixed(3)}, api=${r.toFixed(3)}`);
        this.xScaleUp = e.display.width / e.api.width, this.yScaleUp = e.display.height / e.api.height, this.xScaleDown = e.api.width / e.display.width, this.yScaleDown = e.api.height / e.display.height;
    }
    apiToDisplay(e, t) {
        return {
            x: Math.round(e * this.xScaleUp),
            y: Math.round(t * this.yScaleUp)
        };
    }
    displayToApi(e, t) {
        return {
            x: Math.round(e * this.xScaleDown),
            y: Math.round(t * this.yScaleDown)
        };
    }
    get apiWidth() {
        return this.config.api.width;
    }
    get apiHeight() {
        return this.config.api.height;
    }
    get displayWidth() {
        return this.config.display.width;
    }
    get displayHeight() {
        return this.config.display.height;
    }
}
const In = {
    left_ptr: xn.ARROW,
    arrow: xn.ARROW,
    default: xn.ARROW,
    top_left_arrow: xn.ARROW,
    hand: xn.POINTER,
    hand1: xn.POINTER,
    hand2: xn.POINTER,
    pointer: xn.POINTER,
    pointing_hand: xn.POINTER,
    xterm: xn.TEXT,
    ibeam: xn.TEXT,
    text: xn.TEXT,
    watch: xn.WAIT,
    wait: xn.WAIT,
    progress: xn.WAIT,
    left_ptr_watch: xn.WAIT,
    crosshair: xn.CROSSHAIR,
    cross: xn.CROSSHAIR,
    tcross: xn.CROSSHAIR,
    move: xn.MOVE,
    fleur: xn.MOVE,
    size_all: xn.MOVE,
    sb_v_double_arrow: xn.RESIZE_NS,
    v_double_arrow: xn.RESIZE_NS,
    ns_resize: xn.RESIZE_NS,
    row_resize: xn.RESIZE_NS,
    top_side: xn.RESIZE_NS,
    bottom_side: xn.RESIZE_NS,
    sb_h_double_arrow: xn.RESIZE_EW,
    h_double_arrow: xn.RESIZE_EW,
    ew_resize: xn.RESIZE_EW,
    col_resize: xn.RESIZE_EW,
    left_side: xn.RESIZE_EW,
    right_side: xn.RESIZE_EW,
    top_left_corner: xn.RESIZE_NWSE,
    bottom_right_corner: xn.RESIZE_NWSE,
    nwse_resize: xn.RESIZE_NWSE,
    size_fdiag: xn.RESIZE_NWSE,
    top_right_corner: xn.RESIZE_NESW,
    bottom_left_corner: xn.RESIZE_NESW,
    nesw_resize: xn.RESIZE_NESW,
    size_bdiag: xn.RESIZE_NESW,
    not_allowed: xn.NOT_ALLOWED,
    no_drop: xn.NOT_ALLOWED,
    forbidden: xn.NOT_ALLOWED,
    circle: xn.NOT_ALLOWED,
    grab: xn.GRAB,
    openhand: xn.GRAB,
    grabbing: xn.GRABBING,
    closedhand: xn.GRABBING
};
class Tn {
    constructor(e){
        this.events = [], this.recordingStartTime = 0, this.lastKnownPosition = {
            x: 0,
            y: 0
        }, this.isRunning = !1, this.pending = Promise.resolve();
        const t = e.displayNum ?? 1;
        this.env = {
            DISPLAY: `:${t}`
        }, this.scaler = new En(e.resolution);
    }
    async start() {
        this.events = [], this.recordingStartTime = Date.now(), this.isRunning = !0, this.pending = Promise.resolve();
        try {
            this.lastKnownPosition = await this.captureCurrentPosition();
        } catch  {
            this.lastKnownPosition = {
                x: Math.floor(this.scaler.apiWidth / 2),
                y: Math.floor(this.scaler.apiHeight / 2)
            };
        }
    }
    logEvent(e, t, r) {
        if (!this.isRunning) return;
        const n = {
            ...this.lastKnownPosition
        }, s = this.getExpectedPositionAfterAction(e, n);
        this.lastKnownPosition = s;
        const o = async ()=>{
            let o, i;
            try {
                [o, i] = await Promise.all([
                    this.captureCurrentPosition(),
                    this.detectCursorType()
                ]), this.lastKnownPosition = o;
            } catch  {
                o = s, i = xn.ARROW;
            }
            const a = {
                executionTimestampMs: r - this.recordingStartTime,
                action: e,
                commandDurationMs: r - t,
                positionBefore: n,
                positionAfter: o,
                cursorTypeAfter: i
            };
            this.events.push(a);
        };
        this.pending = this.pending.then(()=>o()).catch(()=>{});
    }
    async stop() {
        return this.isRunning = !1, await this.pending, [
            ...this.events
        ];
    }
    getEvents() {
        return [
            ...this.events
        ];
    }
    getRecordingStartTime() {
        return this.recordingStartTime;
    }
    getIsRunning() {
        return this.isRunning;
    }
    async captureCurrentPosition() {
        const e = await vn("xdotool", [
            "getmouselocation",
            "--shell"
        ], {
            env: this.env
        }), t = e.match(/X=(\d+)/), r = e.match(/Y=(\d+)/);
        if (!t || !r) throw new Error(`Failed to parse cursor position: ${e}`);
        const n = parseInt(t[1], 10), s = parseInt(r[1], 10);
        return this.scaler.displayToApi(n, s);
    }
    async detectCursorType() {
        try {
            const e = (await vn("xdotool", [
                "getmouselocation",
                "--shell"
            ], {
                env: this.env
            })).match(/CURSOR=(\S+)/i);
            if (e) {
                const t = e[1].toLowerCase();
                return In[t] ?? xn.ARROW;
            }
            try {
                const e = await vn("xprop", [
                    "-root",
                    "_XSERVER_CURSOR"
                ], {
                    env: this.env,
                    timeoutMs: 500
                });
                for (const [t, r] of Object.entries(In))if (e.toLowerCase().includes(t)) return r;
            } catch  {}
            return xn.ARROW;
        } catch  {
            return xn.ARROW;
        }
    }
    getExpectedPositionAfterAction(e, t) {
        const r = e.action;
        if (!r) return t;
        switch(r.case){
            case "mouseMove":
                {
                    const e = r.value.coordinate;
                    if (e) return {
                        x: e.x,
                        y: e.y
                    };
                    break;
                }
            case "click":
                {
                    const e = r.value.coordinate;
                    if (e) return {
                        x: e.x,
                        y: e.y
                    };
                    break;
                }
            case "drag":
                {
                    const e = r.value.path;
                    if (e.length > 0) {
                        const t = e[e.length - 1];
                        return {
                            x: t.x,
                            y: t.y
                        };
                    }
                    break;
                }
            case "scroll":
                {
                    const e = r.value.coordinate;
                    if (e) return {
                        x: e.x,
                        y: e.y
                    };
                    break;
                }
        }
        return t;
    }
}
(0, T.h)("computer-use-lazy");
var Cn = require("./module-77030.js"), Pn = require("./module-81958.js");
class An extends Error {
    constructor(e){
        super(e), this.name = "MacRPCProtocolError";
    }
}
const Rn = Pn.Ik({
    rpcSocketPath: Pn.Yj().min(1).optional(),
    appControlSocketPath: Pn.Yj().min(1).optional()
}).passthrough(), Mn = Pn.Ik({
    data: Pn.Yj(),
    mimeType: Pn.Yj().min(1)
}).strip(), Jn = Pn.Ik({
    message: Pn.Yj(),
    screenshot: Mn.optional(),
    screenshotBefore: Mn.optional(),
    structuredContent: Pn.L5().optional(),
    isError: Pn.zM()
}).strip(), On = Pn.Ik({
    accessibilityTrusted: Pn.zM(),
    screenRecordingGranted: Pn.zM()
}).strip(), Bn = Pn.KC([
    Pn.Ik({
        id: Pn.ai().int(),
        result: Jn,
        ok: Pn.Zm().optional(),
        error: Pn.Zm().optional(),
        errorCode: Pn.Zm().optional(),
        permissionStatus: Pn.Zm().optional(),
        sessionId: Pn.Zm().optional()
    }).strip(),
    Pn.Ik({
        id: Pn.ai().int(),
        sessionId: Pn.Yj().min(1),
        ok: Pn.eu(!0).optional(),
        result: Pn.Zm().optional(),
        error: Pn.Zm().optional(),
        errorCode: Pn.Zm().optional(),
        permissionStatus: Pn.Zm().optional()
    }).strip(),
    Pn.Ik({
        id: Pn.ai().int(),
        ok: Pn.eu(!0),
        result: Pn.Zm().optional(),
        error: Pn.Zm().optional(),
        errorCode: Pn.Zm().optional(),
        permissionStatus: Pn.Zm().optional(),
        sessionId: Pn.Zm().optional()
    }).strip(),
    Pn.Ik({
        id: Pn.ai().int().nullable().optional(),
        error: Pn.Yj().min(1),
        errorCode: Pn.Yj().min(1).optional(),
        result: Pn.Zm().optional(),
        ok: Pn.Zm().optional(),
        permissionStatus: Pn.Zm().optional(),
        sessionId: Pn.Zm().optional()
    }).strip(),
    Pn.Ik({
        id: Pn.ai().int(),
        permissionStatus: On,
        result: Pn.Zm().optional(),
        ok: Pn.Zm().optional(),
        error: Pn.Zm().optional(),
        errorCode: Pn.Zm().optional(),
        sessionId: Pn.Zm().optional()
    }).strip()
]);
function Dn(e, t) {
    try {
        return JSON.parse(e);
    } catch  {
        throw new An(`local-cua ${t} is not valid JSON`);
    }
}
const qn = {
    responseMaxBytes: 33554432,
    parseServiceState (e) {
        const t = Rn.safeParse(Dn(e, "service state")), r = t.success ? t.data.rpcSocketPath ?? t.data.appControlSocketPath : void 0;
        if (!t.success || void 0 === r) throw new An("local-cua service state is malformed");
        return {
            ...t.data,
            rpcSocketPath: r
        };
    },
    parseResponse ({ line: e, expectedID: t }) {
        const r = Bn.safeParse(Dn(e.toString("utf8"), "RPC response"));
        if (!r.success) throw new An("local-cua RPC response is malformed");
        if (void 0 !== r.data.id && null !== r.data.id && r.data.id !== t) throw new An("local-cua RPC response ID did not match");
        return r.data;
    }
};
class Nn extends Error {
    constructor(e, t){
        super(e), this.name = "MacComputerUseRPCError", this.code = t?.code, this.userFacing = !0 === t?.userFacing, this.tool = t?.tool;
    }
}
function Fn(e) {
    return "object" == typeof e && null !== e && "code" in e && "string" == typeof e.code ? e.code : e instanceof Error ? Un(e.message) ? e.name : e.message.length > 0 ? `${e.name}: ${e.message}` : e.name : "unknown";
}
function Un(e) {
    return !!e.includes(ge.homedir()) || e.includes("node_modules") || e.includes("Application Support") || /\.wasm\b/.test(e) || /(?:^|[\s'`"])(?:\/|\.{1,2}\/|[A-Za-z]:[\\/]|\\\\)/.test(e);
}
class Ln {
    constructor(e){
        this.mode = e;
    }
    static isInstalled() {
        return !!(0, I.existsSync)(Ln.serviceExecutablePath()) || (0, I.existsSync)(Ln.serviceStatePath());
    }
    screenshot(e) {
        return this.callTool(e, "computer_use_screenshot", {});
    }
    click(e, t) {
        return this.callTool(e, "computer_use_click", {
            method: "coordinate",
            ...void 0 !== t.coordinate && {
                x: t.coordinate.x,
                y: t.coordinate.y
            },
            button: t.button,
            count: t.count,
            modifier_keys: t.modifierKeys
        });
    }
    scroll(e, t) {
        return this.callTool(e, "computer_use_scroll", {
            x: t.coordinate?.x,
            y: t.coordinate?.y,
            direction: t.direction,
            amount: t.amount,
            modifier_keys: t.modifierKeys
        });
    }
    move(e, t) {
        return this.callTool(e, "computer_use_mouse_move", {
            x: t.x,
            y: t.y
        });
    }
    mouseButton(e, t) {
        return this.callTool(e, "computer_use_mouse_button", {
            button: t.button,
            action: t.action
        });
    }
    drag(e, t) {
        return this.callTool(e, "computer_use_drag", {
            button: t.button,
            path: t.path,
            modifier_keys: t.modifierKeys
        });
    }
    typeText(e, t) {
        return this.callTool(e, "computer_use_typing", {
            value: t
        });
    }
    pressKey(e, t) {
        return this.callTool(e, "computer_use_press_key", {
            key: t.key,
            hold_duration_ms: t.holdDurationMs
        });
    }
    checkPermissions(e) {
        return this.callTool(e, "computer_use_check_permissions", {});
    }
    async startControl(e) {
        if ("remote" !== this.mode || void 0 !== this.activeSessionId) return;
        Ln.throwIfAborted(e.signal);
        const t = (0, qt.randomUUID)(), r = await this.sendWithRelaunchRetry(e, ()=>({
                id: Ln.requestID,
                method: "control/start",
                requestID: t,
                mode: this.mode
            }), "control/start");
        if (void 0 !== r.error) throw Ln.rpcError(r);
        if (void 0 === r.sessionId) throw new Nn("local-cua control/start returned no session");
        this.activeSessionId = r.sessionId;
    }
    async releaseControl(e) {
        const t = this.activeSessionId;
        if (void 0 !== t) {
            this.activeSessionId = void 0;
            try {
                const e = await Ln.readServiceState();
                if (void 0 === e) return;
                const r = await Ln.sendOnce(Ln.socketPathFrom(e), {
                    id: Ln.requestID,
                    method: "control/release",
                    requestID: (0, qt.randomUUID)(),
                    mode: this.mode,
                    sessionId: t
                }, Ln.defaultCallTimeoutMs);
                if (void 0 !== r.error) throw Ln.rpcError(r);
            } catch (t) {
                Ln.logger.warn(e, "local-cua control release failed", {
                    error: Fn(t)
                });
            }
        }
    }
    async callTool(e, t, r) {
        Ln.throwIfAborted(e.signal);
        const n = Ln.defaultCallTimeoutMs, s = await this.sendWithRelaunchRetry(e, ()=>{
            const e = Date.now() / 1e3, s = this.activeSessionId;
            return {
                id: Ln.requestID,
                method: "tools/call",
                requestID: (0, qt.randomUUID)(),
                name: t,
                arguments: r,
                timeoutSeconds: n / 1e3,
                startedAtEpochSeconds: e,
                deadlineEpochSeconds: e + n / 1e3,
                mode: this.mode,
                ...void 0 !== s && {
                    sessionId: s
                }
            };
        }, t);
        if (void 0 !== s.error) throw Ln.rpcError(s, t);
        const o = s.result;
        if (void 0 === o) throw new Nn(`local-cua tool ${t} returned no result`, {
            tool: t
        });
        if (o.isError) {
            const e = o.message.trim();
            throw new Nn(e.length > 0 ? e : `local-cua tool ${t} reported an error`, {
                tool: t,
                userFacing: e.length > 0
            });
        }
        return o;
    }
    async sendWithRelaunchRetry(e, t, r) {
        const n = Ln.defaultCallTimeoutMs, s = await this.ensureSocketPath(e);
        Ln.throwIfAborted(e.signal);
        try {
            return await Ln.sendOnce(s, t(), n, e.signal);
        } catch (s) {
            if (!Ln.isPreDeliveryConnectionError(s)) throw s;
            Ln.logger.warn(e, "local-cua callTool failed; relaunching and retrying", {
                tool: r,
                error: Ln.spawnErrorCode(s)
            });
            const o = await this.ensureSocketPath(e, !0);
            return Ln.throwIfAborted(e.signal), void 0 !== this.activeSessionId && (this.activeSessionId = void 0, await this.startControl(e)), await Ln.sendOnce(o, t(), n, e.signal);
        }
    }
    static rpcError(e, t) {
        return new Nn(e.error, {
            code: e.errorCode,
            userFacing: !0,
            tool: t
        });
    }
    async ensureSocketPath(e, t = !1) {
        if (Ln.throwIfAborted(e.signal), !t) {
            const e = await Ln.readServiceState();
            if (e) return Ln.socketPathFrom(e);
        }
        await this.launchAndWait(e);
        const r = await Ln.readServiceState();
        if (!r) throw new Nn("local-cua sidecar did not publish service.json after launch");
        return Ln.socketPathFrom(r);
    }
    async launchAndWait(e) {
        const t = Ln.serviceAppPath();
        Ln.logger.info(e, "launching local-cua sidecar", Ln.sidecarLaunchLogFields(t)), "1" === process.env[Ln.directLaunchEnv] ? await Ln.spawnSidecarProcess(e, Ln.serviceExecutablePath(), [], {
            detached: !0
        }) : await Ln.spawnSidecarProcess(e, "/usr/bin/open", [
            "-g",
            t
        ]);
        const r = Date.now() + Ln.launchReadyTimeoutMs;
        for(; Date.now() < r;){
            Ln.throwIfAborted(e.signal);
            const t = await Ln.readServiceState();
            if (t) try {
                if ("ok" in await Ln.sendOnce(Ln.socketPathFrom(t), {
                    id: Ln.requestID,
                    method: "ping"
                }, 2e3, e.signal)) return;
            } catch  {}
            await (0, ke.cb)(Ln.launchPollIntervalMs);
        }
        throw new Nn("local-cua sidecar did not become ready in time");
    }
    static isPreDeliveryConnectionError(e) {
        const t = Fn(e);
        return "ENOENT" === t || "ECONNREFUSED" === t;
    }
    static appSupportDirectory() {
        const e = process.env[Ln.appSupportOverrideEnv];
        return e && e.length > 0 ? e : s.join(ge.homedir(), "Library", "Application Support", Ln.appSupportFolder);
    }
    static serviceStatePath() {
        return s.join(Ln.appSupportDirectory(), "service.json");
    }
    static serviceAppPath() {
        const e = process.env[Ln.serviceAppOverrideEnv];
        return e && e.length > 0 ? e : s.join(ge.homedir(), ".cursor", "cursor-computer-use", `${Ln.serviceAppBundleName}.app`);
    }
    static sidecarLaunchLogFields(e) {
        const t = `${Ln.serviceAppBundleName}.app`;
        return {
            appName: s.basename(e) === t ? t : "custom",
            appPathHash: (0, qt.createHash)("sha256").update(e).digest("hex"),
            usingOverride: Boolean(process.env[Ln.serviceAppOverrideEnv])
        };
    }
    static spawnErrorCode(e) {
        return Fn(e);
    }
    static socketError(e) {
        const t = Fn(e);
        return new Nn(`local-cua RPC connection failed: ${t}`, {
            code: t
        });
    }
    static serviceExecutablePath() {
        return s.join(Ln.serviceAppPath(), "Contents", "MacOS", "CUCursorService");
    }
    static spawnSidecarProcess(e, t, r, n) {
        return new Promise((s, o)=>{
            const i = (0, un.spawn)(t, [
                ...r
            ], {
                detached: !0 === n?.detached,
                stdio: "ignore"
            }), a = (e)=>{
                o(new Nn(`local-cua sidecar launch failed: ${Ln.spawnErrorCode(e)}`));
            };
            i.once("error", a), i.once("spawn", ()=>{
                i.removeListener("error", a), i.on("error", (t)=>{
                    Ln.logger.warn(e, "local-cua sidecar process error after launch", {
                        error: Ln.spawnErrorCode(t)
                    });
                }), i.unref(), s();
            });
        });
    }
    static async readServiceState() {
        try {
            const e = await (0, n.readFile)(Ln.serviceStatePath(), "utf8");
            return qn.parseServiceState(e);
        } catch (e) {
            if (e instanceof Error && "code" in e && "ENOENT" === e.code) return;
            if (e instanceof An) return;
            throw new Nn("local-cua service state could not be read");
        }
    }
    static socketPathFrom(e) {
        return e.rpcSocketPath;
    }
    static abortError(e) {
        return e.reason instanceof Error ? e.reason : new Nn("local-cua RPC aborted");
    }
    static throwIfAborted(e) {
        if (e.aborted) throw Ln.abortError(e);
    }
    static sendOnce(e, t, r, n) {
        return n?.aborted ? Promise.reject(Ln.abortError(n)) : new Promise((s, o)=>{
            let i = !1, a = [], c = 0, l = !1;
            const u = (0, Cn.createConnection)({
                path: e
            }), d = (e)=>{
                i || (i = !0, clearTimeout(m), n?.removeEventListener("abort", p), u.destroy(), e());
            }, p = ()=>{
                d(()=>o(void 0 === n ? new Nn("local-cua RPC aborted") : Ln.abortError(n)));
            }, m = setTimeout(()=>{
                d(()=>o(new Nn(`local-cua RPC timed out after ${r}ms`)));
            }, r);
            n?.addEventListener("abort", p, {
                once: !0
            }), n?.aborted ? p() : (u.on("connect", ()=>{
                u.write(`${JSON.stringify(t)}\n`, (e)=>{
                    null == e ? l = !0 : d(()=>o(Ln.socketError(e)));
                });
            }), u.on("data", (e)=>{
                const t = e.indexOf(10), r = c + (t < 0 ? e.length : t);
                if (r > qn.responseMaxBytes) return void d(()=>o(new Nn("local-cua RPC response exceeded the size limit")));
                if (t < 0) return a.push(e), void (c += e.length);
                a.push(e.subarray(0, t));
                const n = Buffer.concat(a, r);
                a = [], c = 0;
                try {
                    const e = qn.parseResponse({
                        line: n,
                        expectedID: Ln.requestID
                    });
                    d(()=>s(e));
                } catch (e) {
                    d(()=>o(e));
                }
            }), u.on("error", (e)=>{
                d(l ? ()=>o(new Nn("local-cua RPC connection failed after request delivery")) : ()=>o(Ln.socketError(e)));
            }), u.on("close", ()=>{
                const e = c > 0 ? "local-cua RPC response ended without a newline" : l ? "local-cua RPC connection closed after request delivery" : "local-cua RPC connection closed";
                d(()=>o(new Nn(e)));
            }));
        });
    }
}
Ln.logger = (0, T.h)("local-cua:rpc"), Ln.serviceAppBundleName = "Cursor Computer Use", Ln.appSupportFolder = "cursor-computer-use", Ln.appSupportOverrideEnv = "CUA_APP_SUPPORT_DIR", Ln.serviceAppOverrideEnv = "CUA_SERVICE_APP", Ln.directLaunchEnv = "CUA_DIRECT_LAUNCH", Ln.defaultCallTimeoutMs = 45e3, Ln.launchReadyTimeoutMs = 8e3, Ln.launchPollIntervalMs = 200, Ln.requestID = 1;
var $n = require("./module-5393.js"), jn = require("./module-98995.js"), Gn = require.t(jn, 2), zn = require("./module-73136.js");
const Wn = "mac-webp-runtime.cjs";
const Hn = ()=>{
    const e = Error.prepareStackTrace;
    try {
        Error.prepareStackTrace = (e, t)=>t;
        const e = (new Error).stack, t = Array.isArray(e) ? e[0]?.getFileName() : void 0;
        return (function() {
            const e = Gn, t = e.createRequire ?? e.default?.createRequire;
            if ("function" != typeof t) throw new Error("node:module createRequire is unavailable");
            return t;
        })()("string" == typeof t && t.length > 0 ? t : (0, s.join)(process.cwd(), "package.json"));
    } finally{
        Error.prepareStackTrace = e;
    }
};
let Kn;
function Vn() {
    return Kn ??= Hn(), Kn;
}
function Yn(e) {
    return e.startsWith("file:") ? (0, zn.fileURLToPath)(e) : e;
}
function Qn() {
    const e = [], t = new Set, r = (r)=>{
        t.has(r) || (t.add(r), e.push(r));
    };
    for (const e of function() {
        const e = Error.prepareStackTrace;
        try {
            Error.prepareStackTrace = (e, t)=>t;
            const e = (new Error).stack;
            if (!Array.isArray(e)) return [];
            const t = [];
            for (const r of e){
                const e = r.getFileName();
                "string" == typeof e && e.length > 0 && t.push(e);
            }
            return t;
        } finally{
            Error.prepareStackTrace = e;
        }
    }()){
        const t = (0, s.dirname)(Yn(e));
        r((0, s.join)(t, Wn)), r((0, s.join)(t, "..", "..", "src", "computer-use", Wn));
    }
    "string" == typeof process.argv[1] && process.argv[1].length > 0 && r((0, s.join)((0, s.dirname)(process.argv[1]), Wn)), r((0, s.join)(process.cwd(), "src", "computer-use", Wn)), r((0, s.join)(process.cwd(), "computer-use", Wn));
    try {
        const e = (0, s.dirname)(Vn().resolve("@anysphere/local-exec/package.json"));
        r((0, s.join)(e, "src", "computer-use", Wn)), r((0, s.join)(e, "dist", "computer-use", Wn));
    } catch  {}
    for (const t of e)try {
        const e = Vn()(t);
        if ("function" == typeof e.importFile) return e.importFile.bind(e);
    } catch  {}
    throw new Error("mac-webp runtime importer was not found next to the bundle");
}
let Xn;
function Zn() {
    const e = globalThis.__MAC_WEBP_IMPORT__;
    return "function" == typeof e ? e : (Xn ??= Qn(), Xn);
}
function es(...e) {
    return t = [
        "@jsquash",
        "webp",
        ...e
    ].join("/"), Vn().resolve(t);
    var t;
}
async function ts(...e) {
    return await (t = (0, zn.pathToFileURL)(es(...e)).href, Zn()(t));
    var t;
}
const rs = (e)=>{
    let t;
    return ()=>{
        if (void 0 === t) {
            const r = e();
            r.catch(()=>{
                t === r && (t = void 0);
            }), t = r;
        }
        return t;
    };
}, ns = (rs(async ()=>{
    const e = await ts("decode.js");
    return await e.init({
        wasmBinary: await I.promises.readFile(es("codec", "dec", "webp_dec.wasm"))
    }), e;
}), rs(async ()=>{
    const [e, t, r] = await Promise.all([
        ts("utils.js"),
        ts("meta.js"),
        ts("codec", "enc", "webp_enc.js")
    ]);
    return {
        module: await e.initEmscriptenModule(r.default, void 0, {
            wasmBinary: await I.promises.readFile(es("codec", "enc", "webp_enc.wasm"))
        }),
        defaultOptions: t.defaultOptions
    };
})), ss = (e)=>(async (e, t)=>{
        const { module: r, defaultOptions: n } = await ns(), s = new Uint8ClampedArray(e.data.buffer, e.data.byteOffset, e.data.byteLength);
        return Buffer.from(r.encode(s, e.width, e.height, {
            ...n,
            ...t
        }));
    })(e, {
        lossless: 1,
        exact: 1
    }), os = "image/png", is = {
    async normalize (e) {
        if (e.mimeType !== os) throw new Error(`Mac screenshot must be ${os}, received ${e.mimeType}`);
        const t = await (0, $n.I)(), r = await t.read(Buffer.from(e.data, "base64"));
        return (await ss({
            data: r.bitmap.data,
            width: r.bitmap.width,
            height: r.bitmap.height
        })).toString("base64");
    }
};
class as {
    constructor({ ctx: e, actions: t, sidecar: r }){
        this.startTime = Date.now(), this.geometryPrimed = !1, this.actionCount = 0, this.hasCompletedActuation = !1, this.staleAfterWait = !1, this.ctx = e, this.actions = t, this.sidecar = r;
    }
    async execute() {
        const e = this.actions.some((e)=>as.isInputAction(e.action.case));
        try {
            this.throwIfAborted(), e && await this.sidecar.startControl(this.ctx);
            for (const e of this.actions){
                this.throwIfAborted();
                const t = e.action;
                if (void 0 === t.case) throw new Error("Computer use action case is undefined");
                switch(this.actionCount += 1, t.case){
                    case "screenshot":
                    case "cursorPosition":
                        await this.captureScreen();
                        break;
                    case "click":
                        void 0 !== t.value.coordinate && await this.ensureGeometryCached(), this.recordActuation(await this.sidecar.click(this.ctx, {
                            coordinate: t.value.coordinate,
                            button: as.mouseButtonName(t.value.button),
                            count: t.value.count > 0 ? t.value.count : 1,
                            modifierKeys: t.value.modifierKeys
                        }), t.value.coordinate);
                        break;
                    case "scroll":
                        void 0 !== t.value.coordinate && await this.ensureGeometryCached(), this.recordActuation(await this.sidecar.scroll(this.ctx, {
                            coordinate: t.value.coordinate,
                            direction: as.scrollDirectionName(t.value.direction),
                            amount: t.value.amount > 0 ? t.value.amount : 3,
                            modifierKeys: t.value.modifierKeys
                        }), t.value.coordinate);
                        break;
                    case "mouseMove":
                        if (void 0 === t.value.coordinate) throw new Error("MouseMoveAction requires coordinate");
                        await this.ensureGeometryCached(), this.recordActuation(await this.sidecar.move(this.ctx, {
                            x: t.value.coordinate.x,
                            y: t.value.coordinate.y
                        }), t.value.coordinate);
                        break;
                    case "mouseDown":
                        this.recordActuation(await this.sidecar.mouseButton(this.ctx, {
                            button: as.mouseButtonName(t.value.button),
                            action: "down"
                        }));
                        break;
                    case "mouseUp":
                        this.recordActuation(await this.sidecar.mouseButton(this.ctx, {
                            button: as.mouseButtonName(t.value.button),
                            action: "up"
                        }));
                        break;
                    case "drag":
                        {
                            const e = t.value.path.map((e)=>({
                                    x: e.x,
                                    y: e.y
                                }));
                            await this.ensureGeometryCached(), this.recordActuation(await this.sidecar.drag(this.ctx, {
                                button: as.mouseButtonName(t.value.button),
                                path: e,
                                modifierKeys: t.value.modifierKeys
                            }), e.at(-1));
                            break;
                        }
                    case "type":
                        this.recordActuation(await this.sidecar.typeText(this.ctx, t.value.text));
                        break;
                    case "key":
                        if (t.value.stroke === ln.EB.DOWN || t.value.stroke === ln.EB.UP) throw new Error("Held keys (KeyAction.stroke DOWN/UP) are not supported by the macOS computer-use sidecar; use hold_duration_ms");
                        this.recordActuation(await this.sidecar.pressKey(this.ctx, {
                            key: t.value.key,
                            holdDurationMs: t.value.holdDurationMs
                        }));
                        break;
                    case "wait":
                        await this.delay(Math.max(0, t.value.durationMs)), this.staleAfterWait = !0;
                        break;
                    default:
                        {
                            const e = t;
                            throw new Error(`Unknown computer use action: ${JSON.stringify(e)}`);
                        }
                }
            }
            this.throwIfAborted(), (void 0 === this.screenshot || this.staleAfterWait) && await this.captureScreen(), this.throwIfAborted();
            const t = await this.normalizeRetainedScreenshots();
            return t.screenshotFailed && !this.hasCompletedActuation ? this.screenshotUnavailableResult(t.failureReason) : (this.throwIfAborted(), new ln.ks({
                result: {
                    case: "success",
                    value: new ln.Wd({
                        actionCount: this.actionCount,
                        durationMs: Date.now() - this.startTime,
                        screenshot: t.screenshot,
                        cursorPosition: this.cursor,
                        log: t.screenshotFailed ? "Screenshot unavailable" : void 0
                    })
                }
            }));
        } catch (e) {
            return this.ctx.signal.aborted ? this.abortedResult() : this.errorResult(e);
        } finally{
            e && await this.sidecar.releaseControl(this.ctx);
        }
    }
    static isInputAction(e) {
        switch(e){
            case "click":
            case "scroll":
            case "mouseMove":
            case "mouseDown":
            case "mouseUp":
            case "drag":
            case "type":
            case "key":
                return !0;
            default:
                return !1;
        }
    }
    async captureScreen() {
        const e = await this.sidecar.screenshot(this.ctx);
        this.screenshot = e.screenshot, this.cursor = as.cursorFromResult(e) ?? this.cursor, this.geometryPrimed = !0, this.staleAfterWait = !1;
    }
    async ensureGeometryCached() {
        this.geometryPrimed || await this.captureScreen();
    }
    recordActuation(e, t) {
        this.screenshot = e.screenshot, this.hasCompletedActuation = !0, this.staleAfterWait = !1, void 0 !== e.screenshot && (this.geometryPrimed = !0), this.cursor = as.cursorFromResult(e) ?? as.coordinateFromPoint(t) ?? this.cursor;
    }
    async errorResult(e) {
        let t;
        if (as.logger.error(this.ctx, "local-cua execute failed", void 0, {
            error: Fn(e)
        }), !function(e) {
            return e instanceof Nn && ("computer_use_screenshot" === e.tool || "permission_required" === e.code);
        }(e)) try {
            const e = await this.sidecar.screenshot(this.ctx);
            t = (await this.normalizeScreenshot(e.screenshot, "error")).data;
        } catch (e) {
            as.logger.warn(this.ctx, "local-cua error screenshot capture failed", {
                error: Fn(e)
            });
        }
        const r = function(e) {
            if (e instanceof Nn && e.userFacing && e.message.trim().length > 0 && !Un(e.message)) return e.message.trim();
        }(e);
        return new ln.ks({
            result: {
                case: "error",
                value: new ln.Jb({
                    error: void 0 === r ? "Computer use failed" : `Computer use failed: ${r}`,
                    actionCount: this.actionCount,
                    durationMs: Date.now() - this.startTime,
                    screenshot: t
                })
            }
        });
    }
    screenshotUnavailableResult(e) {
        return new ln.ks({
            result: {
                case: "error",
                value: new ln.Jb({
                    error: "Screenshot unavailable",
                    actionCount: this.actionCount,
                    durationMs: Date.now() - this.startTime,
                    log: e
                })
            }
        });
    }
    abortedResult() {
        return new ln.ks({
            result: {
                case: "error",
                value: new ln.Jb({
                    error: "Computer use aborted",
                    actionCount: this.actionCount,
                    durationMs: Date.now() - this.startTime
                })
            }
        });
    }
    static mouseButtonName(e) {
        return as.mouseButtonNames[e] ?? "left";
    }
    static scrollDirectionName(e) {
        return as.scrollDirectionNames[e] ?? "down";
    }
    async normalizeRetainedScreenshots() {
        const e = await this.normalizeScreenshot(this.screenshot, "post-action");
        return {
            screenshot: e.data,
            screenshotFailed: void 0 === this.screenshot || e.failed,
            failureReason: void 0 === this.screenshot ? "sidecar returned no image" : e.reason
        };
    }
    async normalizeScreenshot(e, t) {
        if (void 0 === e) return {
            failed: !1
        };
        try {
            return {
                data: await is.normalize(e),
                failed: !1
            };
        } catch (r) {
            const n = Fn(r);
            return as.logger.error(this.ctx, "local-cua screenshot conversion failed", void 0, {
                frame: t,
                error: n
            }), "image/png" === e.mimeType && e.data.length > 0 ? {
                data: e.data,
                failed: !1
            } : {
                failed: !0,
                reason: n
            };
        }
    }
    static coordinateFromPoint(e) {
        if (void 0 !== e && Number.isFinite(e.x) && Number.isFinite(e.y)) return new ln.xp({
            x: Math.round(e.x),
            y: Math.round(e.y)
        });
    }
    static cursorFromResult(e) {
        const t = e.structuredContent;
        if ("object" != typeof t || null === t || !("cursor" in t)) return;
        const r = t.cursor;
        return "object" == typeof r && null !== r && "x" in r && "y" in r && "number" == typeof r.x && "number" == typeof r.y && Number.isFinite(r.x) && Number.isFinite(r.y) ? new ln.xp({
            x: Math.round(r.x),
            y: Math.round(r.y)
        }) : void 0;
    }
    throwIfAborted() {
        if (this.ctx.signal.aborted) throw this.ctx.signal.reason ?? new Error("Computer use aborted");
    }
    delay(e) {
        return this.throwIfAborted(), new Promise((t, r)=>{
            const n = ()=>{
                clearTimeout(s), r(this.ctx.signal.reason ?? new Error("Computer use aborted"));
            }, s = setTimeout(()=>{
                this.ctx.signal.removeEventListener("abort", n), t();
            }, e);
            this.ctx.signal.addEventListener("abort", n, {
                once: !0
            }), this.ctx.signal.aborted && n();
        });
    }
}
as.logger = (0, T.h)("local-cua:actions"), as.mouseButtonNames = {
    [ln.w3.UNSPECIFIED]: "left",
    [ln.w3.LEFT]: "left",
    [ln.w3.RIGHT]: "right",
    [ln.w3.MIDDLE]: "middle",
    [ln.w3.BACK]: "left",
    [ln.w3.FORWARD]: "left"
}, as.scrollDirectionNames = {
    [ln.Dh.UNSPECIFIED]: "down",
    [ln.Dh.UP]: "up",
    [ln.Dh.DOWN]: "down",
    [ln.Dh.LEFT]: "left",
    [ln.Dh.RIGHT]: "right"
};
s.join("Contents", "MacOS", "CUCursorService");
var cs = require("./module-19260.js");
const ls = 1048576, us = 52428800;
var ds;
!function(e) {
    e.Write = "write", e.Read = "read", e.Shell = "shell", e.Delete = "delete", e.Mcp = "mcp";
}(ds || (ds = {}));
var ps = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, ms = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class hs {
    constructor(e, t, r, n, s){
        this.pendingDecisionProvider = e, this.fileChangeTracker = t, this.permissionsService = r, this.workspacePath = n, this.onDeleteForAiTracking = s;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            ps(r, (0, C.VI)(e.withName("LocalDeleteExecutor.execute")), !1);
            const s = t.path, o = (0, O.o1)(s, this.workspacePath), i = await this.permissionsService.shouldBlockWrite(e, o, "");
            if (i) {
                const e = await Xe(i, {
                    onNeedsApproval: async (e, t)=>null,
                    onUserRejected: (e)=>new cs.Pi({
                            result: {
                                case: "rejected",
                                value: new cs.iq({
                                    path: o,
                                    reason: e || ""
                                })
                            }
                        }),
                    onPermissionDenied: (e, t)=>new cs.Pi({
                            result: {
                                case: "permissionDenied",
                                value: new cs.QG({
                                    path: o,
                                    clientVisibleError: e,
                                    isReadonly: t?.isReadonly ?? !1
                                })
                            }
                        })
                });
                if (null !== e) return e;
            }
            const a = await this.pendingDecisionProvider.requestApproval({
                type: ds.Delete,
                details: {
                    path: o
                },
                toolCallId: t.toolCallId
            });
            if (!a.approved) return new cs.Pi({
                result: {
                    case: "rejected",
                    value: new cs.iq({
                        path: o,
                        reason: a.reason || ""
                    })
                }
            });
            let c;
            try {
                c = await (0, n.stat)(o);
            } catch (e) {
                return "ENOENT" === e.code ? new cs.Pi({
                    result: {
                        case: "fileNotFound",
                        value: new cs.n0({
                            path: o
                        })
                    }
                }) : new cs.Pi({
                    result: {
                        case: "error",
                        value: new cs.GU({
                            path: o,
                            error: e.message
                        })
                    }
                });
            }
            if (!c.isFile()) {
                const e = c.isDirectory() ? "directory" : "other";
                return new cs.Pi({
                    result: {
                        case: "notFile",
                        value: new cs.LX({
                            path: o,
                            actualType: e
                        })
                    }
                });
            }
            const l = c.size;
            let u;
            if (l <= us) try {
                u = await (0, xe.yR)(o);
            } catch  {}
            const d = u ?? "";
            try {
                await (0, n.unlink)(o);
            } catch (e) {
                return "EACCES" === e.code ? new cs.Pi({
                    result: {
                        case: "permissionDenied",
                        value: new cs.QG({
                            path: o,
                            clientVisibleError: "Permission denied"
                        })
                    }
                }) : "EBUSY" === e.code ? new cs.Pi({
                    result: {
                        case: "fileBusy",
                        value: new cs.vX({
                            path: o
                        })
                    }
                }) : new cs.Pi({
                    result: {
                        case: "error",
                        value: new cs.GU({
                            path: o,
                            error: e.message
                        })
                    }
                });
            }
            if (this.fileChangeTracker && void 0 !== u) {
                const e = t.toolCallId ? {
                    toolCallId: t.toolCallId
                } : void 0;
                await this.fileChangeTracker.trackChange(o, u, void 0, e);
            }
            return this.onDeleteForAiTracking && this.onDeleteForAiTracking({
                path: o
            }).catch(()=>{}), new cs.Pi({
                result: {
                    case: "success",
                    value: new cs.fl({
                        path: o,
                        deletedFile: o,
                        fileSize: BigInt(l),
                        prevContent: d
                    })
                }
            });
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            ms(r);
        }
    }
}
var fs = require("./module-34175.js");
var gs = require("./module-31489.js"), ys = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, ws = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class vs {
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            ys(r, (0, C.VI)(e.withName("LocalFetchExecutor.execute")), !1);
            const n = t.url;
            try {
                const e = await fetch(n), t = await e.text(), r = e.headers.get("content-type") || "text/plain";
                return new gs.uN({
                    result: {
                        case: "success",
                        value: new gs.Uk({
                            url: n,
                            content: t,
                            statusCode: e.status,
                            contentType: r
                        })
                    }
                });
            } catch (e) {
                return new gs.uN({
                    result: {
                        case: "error",
                        value: new gs.fk({
                            url: n,
                            error: e.message
                        })
                    }
                });
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            ws(r);
        }
    }
}
"function" == typeof SuppressedError && SuppressedError;
var _s = require("./module-59903.js");
const bs = -(2 ** 31), Ss = 2 ** 31 - 1;
function ks(e) {
    return Number.isNaN(e) ? 0 : e < bs ? bs : e > Ss ? Ss : e;
}
function xs(e) {
    if ("number" == typeof e && Number.isFinite(e) && !(e < 0)) return ks(Math.trunc(e));
}
const Es = 0, Is = 13, Ts = 45, Cs = 48, Ps = 57, As = 58;
class Rs {
    constructor(){
        this.lineEnd = 0, this.nextStart = 0;
    }
}
function Ms(e, t, r) {
    const n = e.length;
    if (t >= n) return !1;
    const s = e.indexOf("\n", t);
    if (-1 !== s) {
        for(let n = t; n < s; n++)if (e.charCodeAt(n) === Is && n + 1 !== s) return r.lineEnd = n, r.nextStart = n + 1, !0;
        const n = s > t && e.charCodeAt(s - 1) === Is;
        return r.lineEnd = n ? s - 1 : s, r.nextStart = s + 1, !0;
    }
    const o = e.indexOf("\r", t);
    return -1 !== o ? (r.lineEnd = o, r.nextStart = o + 1, !0) : (r.lineEnd = n, r.nextStart = n, !0);
}
function Js(e, t, r) {
    return r - t === 2 && e.charCodeAt(t) === Ts && e.charCodeAt(t + 1) === Ts;
}
var Os = require("./module-82142.js"), Bs = require("./module-71801.js"), Ds = require("./module-11197.js"), qs = require("./module-64500.js"), Ns = require("./module-78780.js"), Fs = require("./module-80738.js"), Us = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Ls = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const $s = (0, cn.Pu)("mcp.filesystem.divergence", {
    description: "Divergence detected between MCP lease state and filesystem state",
    labelNames: [
        "divergence_type",
        "mcp_source",
        "configured_servers",
        "mcp_version"
    ]
}), js = (0, cn.Pu)("mcp.filesystem.sync_check", {
    description: "MCP filesystem sync check executed",
    labelNames: [
        "synced",
        "mcp_source",
        "configured_servers",
        "mcp_version"
    ]
}), Gs = (0, cn.wt)("mcp.filesystem.sync_check.expected_servers", {
    description: "Number of expected MCP servers at last sync check",
    labelNames: [
        "mcp_source",
        "mcp_version"
    ]
}), zs = (0, cn.wt)("mcp.filesystem.sync_check.actual_servers", {
    description: "Number of actual MCP servers on disk at last sync check",
    labelNames: [
        "mcp_source",
        "mcp_version"
    ]
}), Ws = (0, cn.wt)("mcp.filesystem.sync_check.servers_missing", {
    description: "Number of expected MCP servers missing from disk at last sync check",
    labelNames: [
        "mcp_source",
        "mcp_version"
    ]
}), Hs = (0, cn.wt)("mcp.filesystem.sync_check.tool_mismatches", {
    description: "Number of MCP servers with tool count mismatches at last sync check",
    labelNames: [
        "mcp_source",
        "mcp_version"
    ]
}), Ks = (0, T.h)("McpFileSystemWriter"), Vs = "mcpFsStructuredLogOptIn";
function Ys(e, t) {
    return t?.includeStructuredLogs ? {
        ...e ?? {},
        [Vs]: !0
    } : e;
}
const Qs = {
    debug (e, t, r, n) {
        Ks.debug(e, t, Ys(r, n));
    },
    info (e, t, r, n) {
        Ks.info(e, t, Ys(r, n));
    },
    warn (e, t, r, n) {
        Ks.warn(e, t, Ys(r, n));
    },
    error (e, t, r, n, s) {
        Ks.error(e, t, r, Ys(n, s));
    }
}, Xs = "mcps", Zs = "tools", eo = "~staging", to = "~prev", ro = "mcp_auth", no = "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.", so = "# >>> CURSOR MANAGED BLOCK >>>", oo = "# <<< CURSOR MANAGED BLOCK <<<", io = [
    "# Ignore everything in .cursor",
    "*",
    "# Un-ignore projects so we can descend to allowlisted subdirs",
    "!projects/",
    "projects/*",
    "!projects/*/",
    "projects/*/*",
    "# MCP tool descriptors, resources, prompts",
    "!projects/*/mcps/",
    "!projects/*/mcps/**",
    "# Agent transcripts for citation",
    "!projects/*/agent-transcripts/",
    "!projects/*/agent-transcripts/**",
    "# Terminal output files",
    "!projects/*/terminals/",
    "!projects/*/terminals/**",
    "# Conversation notes (shared scratchpad)",
    "!projects/*/agent-notes/",
    "!projects/*/agent-notes/**",
    "# Large tool output files",
    "!projects/*/agent-tools/",
    "!projects/*/agent-tools/**",
    "# Plugin cache (rules, skills, agents)",
    "!plugins/",
    "!plugins/**",
    "# Built-in Cursor skills",
    "!skills-cursor/",
    "!skills-cursor/**",
    "# User's personal skills",
    "!skills/",
    "!skills/**",
    "# User's personal slash commands",
    "!commands/",
    "!commands/**",
    "# User's plan files",
    "!plans/",
    "!plans/**",
    "# Subagent state/transcripts",
    "!subagents/",
    "!subagents/**",
    "# User-level cursor rules",
    "!rules/",
    "!rules/**"
].join("\n");
function ao(e, t, r = 15e3) {
    let n;
    return Promise.race([
        e.catch(()=>t),
        new Promise((e)=>{
            n = setTimeout(()=>e(t), r);
        })
    ]).finally(()=>clearTimeout(n));
}
function co(e) {
    return e.replace(/[^a-zA-Z0-9_-]/g, "_");
}
function lo(e) {
    if (void 0 === e) return;
    const t = e.trim();
    return t.length > 0 ? t : void 0;
}
function uo(e) {
    return {
        clientKey: e.serverIdentifier,
        providerIdentifier: e.serverName,
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginId: e.pluginId,
        marketplaceId: e.marketplaceId,
        toolName: ro,
        name: ro,
        description: e.authToolDescription,
        inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: !1
        }
    };
}
function po(e) {
    switch(e.kind){
        case "loading":
            return "initializing";
        case "requires_authentication":
            return "needsAuth";
        case "ready":
            return "connected";
        case "error":
            return "error";
        default:
            return "disconnected";
    }
}
function mo(e) {
    if (Array.isArray(e)) return e.map((e)=>mo(e));
    if (null !== e && "object" == typeof e) {
        const t = Object.entries(e).filter(([, e])=>void 0 !== e).sort(([e], [t])=>e < t ? -1 : e > t ? 1 : 0).map(([e, t])=>[
                e,
                mo(t)
            ]);
        return Object.fromEntries(t);
    }
    return e;
}
function ho(e) {
    return JSON.stringify(mo(e));
}
function fo(e) {
    const t = e.map((e)=>({
            value: e,
            key: ho(e)
        }));
    return t.sort((e, t)=>e.key < t.key ? -1 : e.key > t.key ? 1 : 0), t.map((e)=>e.value);
}
function go(e) {
    const t = fo(e.tools.map((e)=>({
            name: e.toolName,
            description: e.description,
            inputSchema: e.inputSchema,
            outputSchema: e.outputSchema
        }))), r = fo(e.resources.map((e)=>({
            uri: e.uri,
            name: e.name,
            description: e.description,
            mimeType: e.mimeType
        }))), n = fo(e.prompts.map((e)=>({
            name: e.name,
            description: e.description,
            arguments: e.arguments
        })));
    return ho({
        id: e.serverIdentifier,
        name: e.serverName,
        plugin: e.plugin,
        marketplace: e.marketplace,
        pluginId: e.pluginId,
        marketplaceId: e.marketplaceId,
        tools: t,
        resources: r,
        prompts: n,
        instructions: e.instructions,
        status: e.status
    });
}
class yo {
    constructor(e, t, r){
        this.cachedFingerprints = new Map, this.disposed = !1, this.hasPendingLeaseChangeEvent = !1, this.lastDivergenceCheckMs = 0, this.mcpLease = e, this.projectDir = t, this.debounceMs = r?.debounceMs ?? 100, this.mcpAuthCopyOverrides = r?.mcpAuthCopyOverrides, this.exposeVirtualMcpAuthTool = r?.exposeVirtualMcpAuthTool ?? !0, this.alwaysExposeVirtualMcpAuthTool = r?.alwaysExposeVirtualMcpAuthTool ?? !1, this.snapshotProvider = r?.snapshotProvider, this.mcpVersion = r?.mcpVersion ?? (this.snapshotProvider ? "snapshots" : "v1"), this.onDidWrite = r?.onDidWrite, this.ctx = this.getContext(r?.loggerBackend), this.startupCleanupPromise = this.cleanupStaleStagingDirs(this.ctx), this.leaseChangeDisposable = this.mcpLease.onDidChange((e)=>{
            Qs.info(this.ctx, "Lease change event received", {
                serverIdentifiers: e?.serverIdentifiers,
                reason: e?.reason
            }), this.onLeaseChanged(this.ctx, e);
        }), Qs.info(this.ctx, "Constructor: scheduling initial write"), this.scheduleWrite(this.ctx), this.ensureCursorDirGitignore();
    }
    ensureCursorDirGitignore() {
        (async function(e) {
            const t = (0, s.join)(e, ".gitignore"), r = `${so}\n${io}\n${oo}\n`;
            let o;
            await (0, n.mkdir)(e, {
                recursive: !0
            });
            try {
                o = await (0, n.readFile)(t, "utf-8");
            } catch (e) {
                if ("ENOENT" !== e?.code) throw e;
            }
            if (void 0 === o) return void await (0, n.writeFile)(t, r);
            const i = o.indexOf(so), a = o.indexOf(oo, i + 30);
            if (-1 !== i && -1 !== a) {
                const e = `${o.slice(0, i)}${r}${o.slice(a + 30).replace(/^\n/, "")}`;
                return void (e !== o && await (0, n.writeFile)(t, e));
            }
            await (0, n.writeFile)(t, r);
        })((0, s.join)((0, ge.homedir)(), ".cursor")).catch((e)=>{
            Qs.warn(this.ctx, "Failed to ensure ~/.cursor/.gitignore", e);
        });
    }
    async cleanupStaleStagingDirs(e) {
        const t = this.getLogContext(e), r = (0, s.join)(this.projectDir, Xs);
        try {
            const e = await (0, n.readdir)(r);
            await Promise.allSettled(e.filter((e)=>e.endsWith(eo)).map((e)=>(0, n.rm)((0, s.join)(r, e), {
                    recursive: !0,
                    force: !0
                })));
        } catch (e) {
            "ENOENT" !== e?.code && Qs.error(t, "Error clearing stale mcps staging dirs", e);
        }
    }
    onLeaseChanged(e, t) {
        if (this.disposed) return;
        const r = t ?? {
            serverIdentifiers: void 0
        };
        this.hasPendingLeaseChangeEvent ? this.pendingLeaseChangeEvent = (0, m.sfj)(this.pendingLeaseChangeEvent ?? {
            serverIdentifiers: void 0
        }, r) : (this.pendingLeaseChangeEvent = r, this.hasPendingLeaseChangeEvent = !0), void 0 !== this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(()=>{
            this.debounceTimer = void 0;
            const t = this.takePendingLeaseChangeEvent();
            this.scheduleWrite(e, t);
        }, this.debounceMs);
    }
    takePendingLeaseChangeEvent() {
        if (!this.hasPendingLeaseChangeEvent) return;
        const e = this.pendingLeaseChangeEvent ?? {
            serverIdentifiers: void 0
        };
        return this.pendingLeaseChangeEvent = void 0, this.hasPendingLeaseChangeEvent = !1, e;
    }
    scheduleWrite(e, t) {
        const r = this.getLogContext(e);
        if (this.disposed) return;
        const n = this.writePromise;
        this.writePromise = (async ()=>{
            if (n) try {
                await n;
            } catch (e) {
                Qs.error(r, "Error waiting for previous write", e);
            }
            this.disposed || (await this.startupCleanupPromise, this.disposed || await this.fetchAndWrite(e, t));
        })();
    }
    getContext(e) {
        let t = (0, ye.q6)();
        return e && (t = t.with(T._O, e)), t;
    }
    getLogContext(e) {
        return e.with(T._O, this.ctx.get(T._O));
    }
    getMetricTags(e) {
        return {
            ...e,
            mcp_version: this.mcpVersion
        };
    }
    getMcpAuthToolDescription() {
        return lo(this.mcpAuthCopyOverrides?.authToolDescription) ?? no;
    }
    shouldExposeVirtualMcpAuthToolForStatus(e, t) {
        return this.exposeVirtualMcpAuthTool && (0, m.N1y)(e) && (this.alwaysExposeVirtualMcpAuthTool || "needsAuth" === t);
    }
    getErrorStatusMessage() {
        return lo(this.mcpAuthCopyOverrides?.errorStatusMessage) ?? "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor's Customize page > MCPs; otherwise continue with a different approach.";
    }
    getNeedsAuthStatusMessage(e) {
        return function(e, t) {
            return e.replace(/\{serverIdentifier\}/g, t.serverIdentifier).replace(/\{authToolName\}/g, t.authToolName);
        }(lo(this.mcpAuthCopyOverrides?.needsAuthStatusMessageWithAuthTool) ?? 'The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server "{serverIdentifier}" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, authenticate it first; otherwise continue with a different approach.', {
            serverIdentifier: e,
            authToolName: ro
        });
    }
    getNeedsAuthStatusMessageForWrite(e) {
        return this.exposeVirtualMcpAuthTool && (0, m.N1y)(e) ? this.getNeedsAuthStatusMessage(e) : lo(this.mcpAuthCopyOverrides?.needsAuthStatusMessageWithoutVirtualTool) ?? "This MCP server requires authentication before its tools can be used. Open Cursor's Customize page > MCPs, select this server, and use Authenticate/Reopen, or refresh credentials in your MCP configuration (for example mcp.json), then restart this environment. If this server is not required for the task, continue without it.";
    }
    async getToolsForServers(e, t) {
        if (0 === t.length) return [];
        const r = this.getLogContext(e);
        try {
            return await this.mcpLease.getToolsForServers(e, t);
        } catch (n) {
            Qs.warn(r, `getToolsForServers() threw, falling back to filtered getTools(): ${n}`);
            const s = await this.mcpLease.getTools(e).catch((e)=>(Qs.warn(r, `getTools() threw during scoped-tool fallback, defaulting to []: ${e}`), [])), o = new Set(t);
            return s.filter((e)=>o.has(e.clientKey));
        }
    }
    async fetchClientDataForServer(e, t, r, n) {
        const s = await ao(r.getState(e), {
            kind: "error"
        }).then((r)=>("error" !== r.kind || "message" in r || Qs.warn(e, `getState() timed out for "${t}", defaulting to error`), r)), o = "ready" === s.kind || "requires_authentication" === s.kind, [i, a, c] = await Promise.all([
            o ? ao(r.listResources(e), {
                resources: []
            }) : Promise.resolve({
                resources: []
            }),
            o ? ao(r.listPrompts(e), []) : Promise.resolve([]),
            o && n?.fetchInstructions ? ao(r.getInstructions(e), void 0) : Promise.resolve(void 0)
        ]);
        return {
            clientKey: t,
            serverName: r.serverName,
            plugin: r.plugin,
            marketplace: r.marketplace,
            pluginId: r.pluginId,
            marketplaceId: r.marketplaceId,
            resources: i.resources.map((e)=>({
                    ...e,
                    serverIdentifier: t,
                    serverName: r.serverName
                })),
            prompts: a.map((e)=>({
                    ...e,
                    serverIdentifier: t,
                    serverName: r.serverName
                })),
            instructions: c,
            status: po(s)
        };
    }
    buildServerDataMap(e, t, r) {
        const n = new Map;
        for (const e of t){
            const t = xo(e.clientKey);
            n.set(e.clientKey, {
                serverIdentifier: e.clientKey,
                serverName: e.serverName,
                plugin: e.plugin,
                marketplace: e.marketplace,
                pluginId: e.pluginId,
                marketplaceId: e.marketplaceId,
                sanitizedId: t,
                folderPath: (0, s.join)(this.projectDir, Xs, t),
                tools: [],
                resources: e.resources,
                prompts: e.prompts,
                instructions: e.instructions,
                status: e.status
            });
        }
        for (const t of e){
            let e = n.get(t.clientKey);
            if (!e) {
                const r = xo(t.clientKey);
                e = {
                    serverIdentifier: t.clientKey,
                    serverName: t.providerIdentifier,
                    plugin: t.plugin,
                    marketplace: t.marketplace,
                    pluginId: t.pluginId,
                    marketplaceId: t.marketplaceId,
                    sanitizedId: r,
                    folderPath: (0, s.join)(this.projectDir, Xs, r),
                    tools: [],
                    resources: [],
                    prompts: [],
                    instructions: void 0,
                    status: void 0
                }, n.set(t.clientKey, e);
            }
            e.tools.push(t);
        }
        if (void 0 !== r) for (const e of r){
            const t = e.serverIdentifier?.trim();
            let r = t ? Array.from(n.values()).find((e)=>e.serverIdentifier === t) : void 0;
            if (!r) {
                const t = e.serverName?.trim();
                r = t ? Array.from(n.values()).find((e)=>e.serverName === t) : void 0;
            }
            r && e.instructions && (r.instructions = e.instructions);
        }
        if (this.exposeVirtualMcpAuthTool) for (const e of n.values()){
            if (!this.shouldExposeVirtualMcpAuthToolForStatus(e.serverIdentifier, e.status)) continue;
            e.tools.some((e)=>e.toolName === ro) || e.tools.push(uo({
                serverIdentifier: e.serverIdentifier,
                serverName: e.serverName,
                plugin: e.plugin,
                marketplace: e.marketplace,
                pluginId: e.pluginId,
                marketplaceId: e.marketplaceId,
                authToolDescription: this.getMcpAuthToolDescription()
            }));
        }
        return n;
    }
    buildServersToWrite(e, t) {
        const r = [], n = new Set;
        for (const s of t.values()){
            const t = s.tools.length > 0 || s.resources.length > 0 || s.prompts.length > 0 || s.instructions, o = "error" === s.status || "needsAuth" === s.status || "initializing" === s.status;
            t || o ? n.has(s.sanitizedId) ? Qs.warn(e, `Skipping server "${s.serverIdentifier}" — sanitizedId "${s.sanitizedId}" collides with another server`) : (n.add(s.sanitizedId), r.push(s)) : Qs.info(e, `Server "${s.serverIdentifier}" excluded from write: tools=${s.tools.length}, resources=${s.resources.length}, prompts=${s.prompts.length}, hasInstructions=${!!s.instructions}, status=${s.status}`);
        }
        return r;
    }
    mergeScopedRefreshWithCachedServerData(e, t) {
        const r = [
            ...t.tools
        ];
        if (this.shouldExposeVirtualMcpAuthToolForStatus(e.serverIdentifier, e.status) && !r.some((e)=>e.toolName === ro)) {
            const t = e.tools.find((e)=>e.toolName === ro);
            void 0 !== t && r.push(t);
        }
        return {
            ...e,
            ...t,
            tools: r,
            resources: e.resources,
            prompts: e.prompts,
            instructions: e.instructions,
            status: e.status,
            plugin: t.plugin ?? e.plugin,
            marketplace: t.marketplace ?? e.marketplace,
            pluginId: t.pluginId ?? e.pluginId,
            marketplaceId: t.marketplaceId ?? e.marketplaceId
        };
    }
    async refreshServersFromLease(e, t) {
        const r = this.getLogContext(e), n = [
            ...new Set(t.serverIdentifiers ?? [])
        ];
        Qs.info(r, `fetchAndWrite: refreshing ${n.length} targeted servers`, {
            serverIdentifiers: n
        });
        const s = await this.getToolsForServers(e, n), o = await this.mcpLease.getInstructions(e).catch((e)=>(Qs.warn(r, `getInstructions() threw during scoped refresh, defaulting to []: ${e}`), [])), i = await Promise.all(n.map(async (t)=>{
            try {
                const r = await this.mcpLease.getClient(e, t);
                return void 0 === r ? {
                    serverIdentifier: t,
                    kind: "missing"
                } : {
                    serverIdentifier: t,
                    kind: "client",
                    client: r
                };
            } catch (e) {
                return Qs.warn(r, `getClient("${t}") threw during scoped refresh, preserving cached data: ${e}`), {
                    serverIdentifier: t,
                    kind: "error",
                    error: e
                };
            }
        })), a = i.filter((e)=>"missing" === e.kind).map((e)=>e.serverIdentifier);
        let c = new Set;
        if (a.length > 0) {
            const t = await this.mcpLease.getClients(e).catch((e)=>{
                Qs.warn(r, `getClients() threw while confirming targeted server removal, preserving cached data: ${e}`);
            });
            void 0 !== t && (c = new Set(a.filter((e)=>void 0 === t[e])));
        }
        const l = await Promise.all(i.filter((e)=>"client" === e.kind).map(({ serverIdentifier: t, client: r })=>this.fetchClientDataForServer(e, t, r, {
                fetchInstructions: !0
            }))), u = new Map((this.cachedServerData ?? []).map((e)=>[
                e.serverIdentifier,
                e
            ])), d = this.buildServerDataMap(s, l, o), p = new Set(n), m = new Set(i.filter((e)=>"error" === e.kind || "missing" === e.kind && !c.has(e.serverIdentifier)).map((e)=>e.serverIdentifier));
        for (const e of n){
            const t = u.get(e), n = d.get(e);
            if (void 0 === n) c.has(e) ? u.delete(e) : Qs.warn(r, `refreshServersFromLease: preserving cached data for "${e}" because targeted refresh returned no replacement`);
            else {
                if (m.has(e) && void 0 !== t) {
                    u.set(e, this.mergeScopedRefreshWithCachedServerData(t, n)), Qs.warn(r, `refreshServersFromLease: preserving cached metadata for "${e}" because the client was unavailable during targeted refresh`);
                    continue;
                }
                u.set(e, n);
            }
        }
        const h = new Map(Array.from(u.values()).map((e)=>[
                e.sanitizedId,
                e.serverIdentifier
            ]));
        for (const [e, t] of this.cachedFingerprints)if (!p.has(e) && !u.has(e)) {
            const t = xo(e);
            h.set(t, e);
        }
        const f = this.buildServersToWrite(e, u);
        await this.writeServerData(e, f, h), this.cachedServerData = f, this.fireOnDidWrite(f);
    }
    async fetchAndWrite(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Us(r, (0, C.VI)(e.withName("McpFileSystemWriter.fetchAndWrite")), !1);
            const n = this.getLogContext(e);
            try {
                if (void 0 !== this.cachedServerData && void 0 !== t && !(0, m._1u)(t)) {
                    if ([
                        ...new Set(t.serverIdentifiers ?? [])
                    ].length > 0) return void await this.refreshServersFromLease(e, t);
                }
                const [r, s, o] = await Promise.all([
                    this.mcpLease.getTools(e).catch((e)=>(Qs.warn(n, `getTools() threw, defaulting to []: ${e}`), [])),
                    this.mcpLease.getInstructions(e).catch(()=>[]),
                    this.mcpLease.getClients(e).catch((e)=>(Qs.warn(n, `getClients() threw, defaulting to {}: ${e}`), {}))
                ]), i = Object.keys(o);
                Qs.info(n, `fetchAndWrite: lease returned ${r.length} tools across ${i.length} clients`);
                const a = Object.entries(o).map(([t, r])=>this.fetchClientDataForServer(e, t, r)), c = await Promise.all(a), l = this.buildServerDataMap(r, c, s), u = this.buildServersToWrite(e, l), d = new Map(Array.from(l.values()).map((e)=>[
                        e.sanitizedId,
                        e.serverIdentifier
                    ]));
                await this.writeServerData(e, u, d), this.cachedServerData = u, this.fireOnDidWrite(u);
            } catch (e) {
                Qs.error(n, "Error fetching/writing MCP state", e);
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Ls(r);
        }
    }
    fireOnDidWrite(e) {
        if (this.onDidWrite) try {
            const t = e.map((e)=>({
                    serverIdentifier: e.serverIdentifier,
                    folderPath: e.folderPath,
                    tools: e.tools.map((t)=>({
                            toolName: t.toolName,
                            definitionPath: (0, s.join)(e.folderPath, Zs, `${co(t.toolName)}.json`)
                        }))
                }));
            this.onDidWrite(t);
        } catch  {}
    }
    async writeServerData(e, t, r) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Us(o, (0, C.VI)(e.withName("McpFileSystemWriter.writeServerData")), !1);
            const i = this.getLogContext(e), a = (0, s.join)(this.projectDir, Xs);
            await (0, n.mkdir)(a, {
                recursive: !0
            });
            const c = new Map;
            for (const e of t)try {
                c.set(e.serverIdentifier, go(e));
            } catch (t) {
                Qs.error(i, "Error computing server fingerprint, will force write", t, {
                    serverIdentifier: e.serverIdentifier
                }), c.set(e.serverIdentifier, `__error_${Date.now()}_${Math.random()}`);
            }
            const l = [];
            for (const e of t){
                const t = this.cachedFingerprints.get(e.serverIdentifier);
                t !== c.get(e.serverIdentifier) && (l.push(e), void 0 !== t && Qs.info(i, `Server "${e.serverIdentifier}" fingerprint changed: tools=${e.tools.length}, status=${e.status}`));
            }
            for (const e of t)if (!l.includes(e)) try {
                await (0, n.stat)((0, s.join)(a, e.sanitizedId));
            } catch  {
                Qs.info(i, `Server "${e.serverIdentifier}" directory missing on disk, forcing write`), l.push(e);
            }
            const u = new Set;
            for (const [e] of this.cachedFingerprints)if (!c.has(e)) {
                const t = this.cachedServerData?.find((t)=>t.serverIdentifier === e), n = t?.sanitizedId ?? xo(e);
                r.has(n) ? (Qs.info(i, `Server "${e}" (sanitized="${n}") still in lease but excluded from write, preserving directory`), c.set(e, this.cachedFingerprints.get(e))) : (Qs.info(i, `Server "${e}" (sanitized="${n}") left the lease, scheduling directory removal`), u.add(n));
            }
            const d = void 0 === this.cachedServerData;
            if (d) try {
                const e = await (0, n.readdir)(a), t = new Set(e.filter((e)=>!e.endsWith(eo) && !e.endsWith(to)));
                for (const r of e)if (r.endsWith(eo)) await (0, n.rm)((0, s.join)(a, r), {
                    recursive: !0,
                    force: !0
                });
                else if (r.endsWith(to)) {
                    const e = r.slice(0, -5);
                    if (t.has(e)) await (0, n.rm)((0, s.join)(a, r), {
                        recursive: !0,
                        force: !0
                    });
                    else try {
                        await (0, n.rename)((0, s.join)(a, r), (0, s.join)(a, e)), t.add(e);
                    } catch  {
                        await (0, n.rm)((0, s.join)(a, r), {
                            recursive: !0,
                            force: !0
                        }).catch(()=>{});
                    }
                }
                for (const e of t)if (r.has(e)) {
                    const t = r.get(e);
                    c.has(t) || c.set(t, `__preserved_${e}`);
                } else u.add(e);
            } catch (e) {
                Qs.error(i, "Error clearing mcps directory", e);
            }
            const p = Array.from(u);
            if (l.length > 0 || u.size > 0) {
                const e = l.map((e)=>({
                        serverIdentifier: e.serverIdentifier,
                        sanitizedId: e.sanitizedId,
                        toolCount: e.tools.length
                    }));
                Qs.info(i, `Incremental write: ${l.length} changed, ${u.size} removed, ${t.length - l.length} unchanged`, {
                    changedServerCount: l.length,
                    changedServers: e,
                    removedServerCount: u.size,
                    removedServerSanitizedIds: p,
                    unchangedServerCount: t.length - l.length,
                    totalServerCount: t.length,
                    leaseServerCount: r.size,
                    coldStartReconcile: d,
                    projectDirHash: (0, qt.createHash)("sha256").update(this.projectDir).digest("hex")
                }, {
                    includeStructuredLogs: !0
                });
            }
            const m = await Promise.allSettled(l.map((t)=>this.writeServerAtomic(e, t, a)));
            for(let t = 0; t < l.length; t++){
                const r = m[t];
                if ("rejected" === r.status) {
                    const n = l[t], s = this.cachedFingerprints.get(n.serverIdentifier);
                    void 0 !== s ? c.set(n.serverIdentifier, s) : c.delete(n.serverIdentifier), Qs.error(e, "Error writing server directory", r.reason, {
                        serverIdentifier: n.serverIdentifier,
                        sanitizedId: n.sanitizedId
                    }, {
                        includeStructuredLogs: !0
                    });
                }
            }
            const h = await Promise.allSettled(p.map((e)=>(0, n.rm)((0, s.join)(a, e), {
                    recursive: !0,
                    force: !0
                })));
            for(let r = 0; r < h.length; r++){
                const n = h[r];
                if ("rejected" === n.status) {
                    const s = p[r];
                    Qs.error(e, "Error removing server directory", n.reason, {
                        sanitizedId: s,
                        removalIndex: r,
                        removalAttemptCount: h.length,
                        removedServerCount: p.length,
                        removedServerSanitizedIds: p,
                        changedServerCount: l.length,
                        unchangedServerCount: t.length - l.length,
                        totalServerCount: t.length
                    }, {
                        includeStructuredLogs: !0
                    });
                }
            }
            this.cachedFingerprints = c;
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Ls(o);
        }
    }
    async writeServerAtomic(e, t, r) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Us(o, (0, C.VI)(e.withName("McpFileSystemWriter.writeServerAtomic")), !1);
            const i = `${t.sanitizedId}${eo}`, a = `${t.sanitizedId}${to}`, c = (0, s.join)(r, i), l = (0, s.join)(r, a), u = (0, s.join)(r, t.sanitizedId);
            await (0, n.rm)(c, {
                recursive: !0,
                force: !0
            });
            try {
                await (0, n.rename)(l, u);
            } catch  {
                await (0, n.rm)(l, {
                    recursive: !0,
                    force: !0
                });
            }
            await this.writeServerDirectory(e, t, {
                basePath: r,
                dirName: i
            });
            try {
                try {
                    await (0, n.rename)(u, l);
                } catch  {}
                await (0, n.rename)(c, u);
            } catch (r) {
                Qs.error(e, "Per-server swap failed", r, {
                    serverIdentifier: t.serverIdentifier,
                    sanitizedId: t.sanitizedId
                }, {
                    includeStructuredLogs: !0
                });
                try {
                    await (0, n.rename)(l, u);
                } catch  {}
                throw await (0, n.rm)(c, {
                    recursive: !0,
                    force: !0
                }), r;
            }
            await (0, n.rm)(l, {
                recursive: !0,
                force: !0
            }).catch(()=>{});
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Ls(o);
        }
    }
    async writeServerDirectory(e, t, r) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Us(o, (0, C.VI)(e.withName("McpFileSystemWriter.writeServerDirectory")), !1);
            const i = (0, s.join)(r.basePath, r.dirName ?? t.sanitizedId);
            if (await (0, n.mkdir)(i, {
                recursive: !0
            }), t.tools.length > 0) {
                const e = (0, s.join)(i, Zs);
                await (0, n.mkdir)(e, {
                    recursive: !0
                });
                for (const r of t.tools){
                    const t = co(r.toolName), o = (0, s.join)(e, `${t}.json`), i = (0, m.kUN)(r);
                    await (0, n.writeFile)(o, JSON.stringify(i, null, 2));
                }
            }
            if (t.resources.length > 0) {
                const e = (0, s.join)(i, "resources");
                await (0, n.mkdir)(e, {
                    recursive: !0
                });
                for (const r of t.resources){
                    const t = co(r.name || r.uri.replace(/[^a-zA-Z0-9_-]/g, "_")), o = (0, s.join)(e, `${t}.json`), i = {
                        uri: r.uri,
                        name: r.name,
                        description: r.description,
                        mimeType: r.mimeType
                    };
                    await (0, n.writeFile)(o, JSON.stringify(i, null, 2));
                }
            }
            if (t.prompts.length > 0) {
                const e = (0, s.join)(i, "prompts");
                await (0, n.mkdir)(e, {
                    recursive: !0
                });
                for (const r of t.prompts){
                    const t = co(r.name), o = (0, s.join)(e, `${t}.json`), i = {
                        name: r.name,
                        description: r.description,
                        arguments: r.arguments
                    };
                    await (0, n.writeFile)(o, JSON.stringify(i, null, 2));
                }
            }
            if (t.instructions && t.instructions.trim().length > 0) {
                const e = (0, s.join)(i, "INSTRUCTIONS.md");
                await (0, n.writeFile)(e, t.instructions.trim());
            }
            if ("error" === t.status || "needsAuth" === t.status) {
                const e = (0, s.join)(i, "STATUS.md"), r = "error" === t.status ? this.getErrorStatusMessage() : this.getNeedsAuthStatusMessageForWrite(t.serverIdentifier);
                await (0, n.writeFile)(e, r);
            }
            const a = (0, s.join)(i, "SERVER_METADATA.json"), c = {
                serverIdentifier: t.serverIdentifier,
                serverName: t.serverName
            };
            await (0, n.writeFile)(a, JSON.stringify(c, null, 2));
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Ls(o);
        }
    }
    async getMcpFileSystemOptions(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            if (this.disposed) return;
            Us(r, (0, C.VI)(e.withName("McpFileSystemWriter.getMcpFileSystemOptions")), !1);
            const n = this.getLogContext(e), o = await this.ensureWritesSettled(e, t?.timeoutMs);
            if (this.snapshotProvider && !o) return this.buildOptionsFromSnapshots(e);
            this.snapshotProvider && o && Qs.warn(n, "Snapshot mode write barrier timed out; falling back to cached descriptors", {
                timeoutMs: t?.timeoutMs
            }, {
                includeStructuredLogs: !0
            });
            const i = (this.cachedServerData ?? []).map((e)=>{
                const t = e.tools.map((t)=>{
                    const r = co(t.toolName), n = (0, s.join)(e.folderPath, Zs, `${r}.json`);
                    return new fs.E$({
                        toolName: t.toolName,
                        definitionPath: n,
                        ...(0, Fs.hT)(t.annotations)
                    });
                });
                return new fs.UC({
                    serverIdentifier: e.serverIdentifier,
                    serverName: e.serverName,
                    plugin: e.plugin,
                    marketplace: e.marketplace,
                    pluginDbId: e.pluginId,
                    marketplaceId: e.marketplaceId,
                    folderPath: e.folderPath,
                    serverUseInstructions: e.instructions,
                    tools: t
                });
            });
            return this.checkDescriptorsVsFilesystem(e, i, "workbench_lease"), new fs.Is({
                enabled: !0,
                workspaceProjectDir: this.projectDir,
                mcpDescriptors: i
            });
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Ls(r);
        }
    }
    async ensureWritesSettled(e, t) {
        const r = this.getLogContext(e), n = void 0 !== this.debounceTimer;
        if (void 0 !== this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = void 0, this.scheduleWrite(e, this.takePendingLeaseChangeEvent())), n && Qs.info(r, "getMcpFileSystemOptions force-fired pending debounce"), !this.writePromise) return !1;
        if (void 0 !== t) {
            let e, n = !1;
            try {
                await Promise.race([
                    this.writePromise,
                    new Promise((r)=>{
                        e = setTimeout(()=>{
                            n = !0, r();
                        }, t);
                    })
                ]);
            } catch (e) {
                Qs.error(r, "Error waiting for pending write to complete", e);
            } finally{
                clearTimeout(e);
            }
            return n && Qs.warn(r, `getMcpFileSystemOptions timed out after ${t}ms waiting for write; returning stale cache`), n;
        }
        try {
            await this.writePromise;
        } catch (e) {
            Qs.error(r, "Error waiting for pending write to complete", e);
        }
        return !1;
    }
    async buildOptionsFromSnapshots(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Us(t, (0, C.VI)(e.withName("McpFileSystemWriter.buildOptionsFromSnapshots")), !1);
            const r = this.getLogContext(e), n = Date.now(), o = await this.snapshotProvider.getAllSnapshots(e), i = (0, s.join)(this.projectDir, Xs), a = o.filter((e)=>e.tools.length > 0 || e.resources.length > 0 || e.prompts.length > 0 || void 0 !== e.instructions || this.shouldExposeVirtualMcpAuthToolForStatus(e.serverIdentifier, e.status) || "needsAuth" === e.status || "error" === e.status).map((e)=>{
                const t = xo(e.serverIdentifier), r = (0, s.join)(i, t), n = e.tools.map((e)=>{
                    const t = co(e.name);
                    return new fs.E$({
                        toolName: e.name,
                        definitionPath: (0, s.join)(r, Zs, `${t}.json`),
                        ...(0, Fs.hT)(e.annotations)
                    });
                });
                if (this.shouldExposeVirtualMcpAuthToolForStatus(e.serverIdentifier, e.status) && !e.tools.some((e)=>e.name === ro)) {
                    const e = co(ro);
                    n.push(new fs.E$({
                        toolName: ro,
                        definitionPath: (0, s.join)(r, Zs, `${e}.json`)
                    }));
                }
                return new fs.UC({
                    serverIdentifier: e.serverIdentifier,
                    serverName: e.serverName,
                    plugin: e.plugin,
                    marketplace: e.marketplace,
                    pluginDbId: e.pluginId,
                    marketplaceId: e.marketplaceId,
                    folderPath: r,
                    serverUseInstructions: e.instructions,
                    tools: n
                });
            }), c = a.reduce((e, t)=>e + t.tools.length, 0);
            return Qs.info(r, `buildOptionsFromSnapshots completed in ${Date.now() - n}ms: ${o.length} snapshots, ${a.length} descriptors, ${c} tools`), this.checkDescriptorsVsFilesystem(e, a, "snapshot"), new fs.Is({
                enabled: !0,
                workspaceProjectDir: this.projectDir,
                mcpDescriptors: a
            });
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            Ls(t);
        }
    }
    async waitForPendingWrites() {
        if (void 0 !== this.debounceTimer && await new Promise((e)=>{
            const t = ()=>{
                void 0 === this.debounceTimer ? e() : setTimeout(t, 10);
            };
            t();
        }), this.writePromise) try {
            await this.writePromise;
        } catch  {}
    }
    getCachedServerData() {
        return this.cachedServerData;
    }
    checkDescriptorsVsFilesystem(e, t, r) {
        const n = this.getLogContext(e), s = Date.now();
        s - this.lastDivergenceCheckMs < yo.DIVERGENCE_CHECK_COOLDOWN_MS || (this.lastDivergenceCheckMs = s, this._checkDescriptorsVsFilesystemAsync(e, t, r).catch((e)=>{
            Qs.warn(n, "Divergence check failed", e);
        }));
    }
    async _checkDescriptorsVsFilesystemAsync(e, t, r) {
        const o = this.getLogContext(e), i = (0, s.join)(this.projectDir, Xs), a = new Set, c = new Map;
        for (const e of t){
            const t = xo(e.serverIdentifier);
            a.add(t), c.set(t, e.tools.length);
        }
        let l = [];
        try {
            l = await (0, n.readdir)(i), l = l.filter((e)=>!e.endsWith(eo) && !e.endsWith(to));
        } catch (e) {
            if ("ENOENT" !== e?.code) throw e;
        }
        const u = new Set(l);
        let d = !0, p = 0, m = 0, h = 0;
        const f = function(e) {
            return 0 === e ? "0" : e <= 3 ? "1-3" : e <= 6 ? "4-6" : e <= 10 ? "7-10" : "11+";
        }(a.size);
        for (const t of a)u.has(t) || (d = !1, p++, $s.increment(e, 1, this.getMetricTags({
            divergence_type: "server_missing",
            mcp_source: r,
            configured_servers: f
        })), Qs.warn(o, "Divergence detected: server missing from filesystem", {
            mcpFileSystemMeta: {
                divergenceType: "server_missing",
                serverId: t,
                source: r,
                configuredServers: a.size,
                configuredServersBucket: f
            }
        }, {
            includeStructuredLogs: !0
        }));
        for (const t of u)a.has(t) || (d = !1, m++, $s.increment(e, 1, this.getMetricTags({
            divergence_type: "server_stale",
            mcp_source: r,
            configured_servers: f
        })));
        for (const t of a){
            if (!u.has(t)) continue;
            const l = c.get(t) ?? 0, p = (0, s.join)(i, t, Zs);
            let m = 0;
            try {
                m = (await (0, n.readdir)(p)).filter((e)=>e.endsWith(".json")).length;
            } catch  {}
            m !== l && (d = !1, h++, $s.increment(e, 1, this.getMetricTags({
                divergence_type: "tool_count_mismatch",
                mcp_source: r,
                configured_servers: f
            })), Qs.warn(o, "Divergence detected: tool count mismatch", {
                mcpFileSystemMeta: {
                    divergenceType: "tool_count_mismatch",
                    serverId: t,
                    expected: l,
                    actual: m,
                    source: r,
                    configuredServers: a.size,
                    configuredServersBucket: f
                }
            }, {
                includeStructuredLogs: !0
            }));
        }
        js.increment(e, 1, this.getMetricTags({
            synced: String(d),
            mcp_source: r,
            configured_servers: f
        })), Gs.gauge(e, a.size, this.getMetricTags({
            mcp_source: r
        })), zs.gauge(e, u.size, this.getMetricTags({
            mcp_source: r
        })), Ws.gauge(e, p, this.getMetricTags({
            mcp_source: r
        })), Hs.gauge(e, h, this.getMetricTags({
            mcp_source: r
        })), Qs.info(o, "MCP filesystem sync check", {
            mcpFileSystemMeta: {
                synced: d,
                expectedServers: a.size,
                actualServers: u.size,
                serversMissing: p,
                serversStale: m,
                toolMismatches: h,
                source: r,
                configuredServers: a.size,
                configuredServersBucket: f
            }
        }, {
            includeStructuredLogs: !0
        }), d || Qs.warn(o, "MCP filesystem divergence summary", {
            mcpFileSystemMeta: {
                synced: d,
                expectedServers: a.size,
                actualServers: u.size,
                serversMissing: p,
                serversStale: m,
                toolMismatches: h,
                source: r,
                configuredServers: a.size,
                configuredServersBucket: f
            }
        }, {
            includeStructuredLogs: !0
        });
    }
    dispose() {
        this.disposed || (this.disposed = !0, void 0 !== this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = void 0), this.leaseChangeDisposable && (this.leaseChangeDisposable.dispose(), this.leaseChangeDisposable = void 0), this.cachedServerData = void 0, this.cachedFingerprints.clear());
    }
}
yo.DIVERGENCE_CHECK_COOLDOWN_MS = 1e4;
var wo = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, vo = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const _o = (0, T.h)("local-exec:mcp");
function bo(e, t) {
    const r = s.relative(e, t);
    return "" === r || !s.isAbsolute(r) && ".." !== r && !r.startsWith(`..${s.sep}`);
}
function So(e) {
    return e instanceof Error && "code" in e && "string" == typeof e.code ? e.code : void 0;
}
function ko(e) {
    return new Ds._Z({
        content: {
            case: "text",
            value: new Ds.zN({
                text: e
            })
        }
    });
}
function xo(e) {
    const t = e.replace(/\s/g, "_").replace(/[^a-zA-Z0-9_.-]/g, "").replace(/\.+/g, ".");
    return "." === t || ".." === t ? t.replace(/\./g, "_") : 0 === t.length ? "_" : t;
}
class Eo {
    constructor(e, t, r, n, s = Os.g4, o, i){
        this.toolSet = e, this.permissionsService = t, this.pendingDecisionProvider = r, this.projectDir = n, this.fileOutputThresholdBytes = s, this.elicitationFactory = o, this.ensureMcpServersLoaded = i;
    }
    async describeDisconnectedServer(e, t) {
        const r = new Set(t.filter((e)=>"" !== e));
        if (0 === r.size) return;
        let n;
        try {
            n = await this.toolSet.getClients(e);
        } catch  {
            return;
        }
        const s = Object.entries(n).find(([e, t])=>r.has(e) || r.has(t.serverName));
        if (void 0 === s) return;
        const [o, i] = s;
        let a;
        try {
            a = await i.getState(e);
        } catch  {
            return;
        }
        if ("ready" === a.kind) return;
        const c = (0, m.ggl)((0, m.Lxn)(a));
        if (void 0 === c) return;
        return `MCP server "${o}" has no callable tools right now. ${c}${"error" === a.kind && a.message ? ` (${a.message})` : ""}`;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = wo(r, (0, C.VI)(e.withName("LocalMcpToolExecutor.execute")), !1).ctx, i = t.serverIdentifier || t.providerIdentifier;
            await this.ensureMcpServersLoaded?.(o, [
                i
            ]);
            const a = await this.toolSet.getTools(o), c = Array.from(new Set(a.map((e)=>e.clientKey))).sort(), l = a.find((e)=>e.clientKey === i && e.toolName === t.toolName), u = await async function(e, t, r) {
                const n = !t.skipApproval && await r.permissionsService.shouldBlockMcp(e, t, r.toolDef?.annotations);
                if (!n) return;
                const s = await Xe(n, {
                    onNeedsApproval: async (e, n)=>{
                        if ("mcp" !== n.type) return new Ds.iz({
                            result: {
                                case: "error",
                                value: new Ds.Nh({
                                    error: "Invalid approval details type for MCP execution"
                                })
                            }
                        });
                        const s = await r.pendingDecisionProvider.requestApproval({
                            type: ds.Mcp,
                            details: {
                                name: n.name,
                                toolName: n.toolName,
                                providerIdentifier: n.providerIdentifier,
                                source: r.toolDef?.source,
                                args: n.args,
                                reason: n.reason ?? e,
                                canAllowlist: n.canAllowlist,
                                smartModeApprovalReason: n.smartModeApprovalReason,
                                smartModeApprovalRequestId: n.smartModeApprovalRequestId
                            },
                            toolCallId: t.toolCallId
                        });
                        return s.approved ? t.smartModeApprovalOnly ? new Ds.iz({
                            result: {
                                case: "approved",
                                value: new Ds.Ke
                            }
                        }) : null : new Ds.iz({
                            result: {
                                case: "rejected",
                                value: new Ds.xo({
                                    reason: `User rejected MCP: ${t.name}${s.reason ? ` - ${s.reason}` : ""}`
                                })
                            }
                        });
                    },
                    onUserRejected: (e)=>new Ds.iz({
                            result: {
                                case: "error",
                                value: new Ds.Nh({
                                    error: `User rejected MCP: ${t.name}${e ? ` - ${e}` : ""}`
                                })
                            }
                        }),
                    onPermissionDenied: (e, r)=>{
                        const n = `MCP tool execution blocked: ${t.name} - ${e}`;
                        return new Ds.iz({
                            result: {
                                case: "permissionDenied",
                                value: new Ds.HQ({
                                    error: n,
                                    isReadonly: r?.isReadonly ?? !1
                                })
                            }
                        });
                    }
                });
                return s ?? void 0;
            }(o, t, {
                permissionsService: this.permissionsService,
                pendingDecisionProvider: this.pendingDecisionProvider,
                toolDef: l
            });
            if (void 0 !== u) return u;
            const d = await this.toolSet.getToolSet(o);
            let p;
            try {
                p = await d.execute(t.name, Object.fromEntries(Object.entries(t.args).map(([e, t])=>[
                        e,
                        t.toJson()
                    ])), t.toolCallId, this.elicitationFactory);
            } catch (e) {
                let r = e;
                if ((0, Bs._o)(r) && t.providerIdentifier.length > 0 && !a.some((e)=>e.clientKey === t.providerIdentifier || e.providerIdentifier === t.providerIdentifier) && (r = new Bs.bm(t.providerIdentifier, c)), r instanceof Bs.bm) {
                    const e = await this.describeDisconnectedServer(o, [
                        i,
                        t.providerIdentifier
                    ]);
                    return void 0 !== e ? new Ds.iz({
                        result: {
                            case: "error",
                            value: new Ds.Nh({
                                error: e
                            })
                        }
                    }) : new Ds.iz({
                        result: {
                            case: "serverNotFound",
                            value: new Ds.JL({
                                name: r.serverName,
                                availableServers: r.availableServers
                            })
                        }
                    });
                }
                if ((0, Bs._o)(r)) return new Ds.iz({
                    result: {
                        case: "toolNotFound",
                        value: new Ds.WV({
                            name: r.toolName,
                            availableTools: r.availableTools
                        })
                    }
                });
                throw r;
            }
            const m = [];
            for (const e of p.content){
                const t = e.type;
                if ("text" === t) {
                    const t = e;
                    m.push(ko(t.text));
                } else if ("resource" === t) {
                    const t = e;
                    t.resource?.text && m.push(ko(t.resource.text));
                } else if ("image" === t) {
                    const t = e, r = Buffer.from(t.data, "base64"), n = await (0, Ns.O5)(r);
                    m.push(new Ds._Z({
                        content: {
                            case: "image",
                            value: new Ds.do({
                                data: n.data,
                                mimeType: n.mimeType
                            })
                        }
                    }));
                } else if ("image" !== t) {
                    const t = (0, Bs.SW)(e);
                    m.push(ko(t));
                }
            }
            const h = await (0, Os._y)({
                contentItems: m,
                thresholdBytes: this.fileOutputThresholdBytes,
                write: (e)=>(async function(e, t) {
                        const r = s.join(t, Os.YW), o = s.join(r, `${(0, qt.randomUUID)()}.txt`);
                        await (0, n.mkdir)(s.dirname(o), {
                            recursive: !0
                        });
                        const i = e.slice(0, Os.Ol), a = i.split("\n").length, c = Buffer.byteLength(i, "utf8");
                        return await (0, n.writeFile)(o, i, "utf8"), new qs.pV({
                            filePath: o,
                            sizeBytes: BigInt(c),
                            lineCount: BigInt(a)
                        });
                    })(e, this.projectDir)
            });
            if (void 0 === h) throw new Error("Failed to materialize MCP text output");
            const f = p.structuredContent && "object" == typeof p.structuredContent && !Array.isArray(p.structuredContent) ? bn.Struct.fromJson(p.structuredContent) : void 0, g = new Ds.QW({
                content: h,
                isError: p.isError,
                structuredContent: f
            });
            return new Ds.iz({
                result: {
                    case: "success",
                    value: g
                }
            });
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vo(r);
        }
    }
}
class Io {
    constructor(e, t){
        this.mcpLease = e, this.ensureMcpServersLoaded = t;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = wo(r, (0, C.VI)(e.withName("LocalListMcpResourcesExecutor.execute")), !1).ctx;
            try {
                if (t.server) {
                    await this.ensureMcpServersLoaded?.(n, [
                        t.server
                    ]);
                    const e = await this.mcpLease.getClients(n), r = e[t.server] ?? Object.values(e).find((e)=>e.serverName === t.server);
                    if (!r) return new Ds.kP({
                        result: {
                            case: "error",
                            value: new Ds.w2({
                                error: `Server "${t.server}" not found`
                            })
                        }
                    });
                    const s = await this.listResourcesFromClient(n, r, t.server, !0);
                    return new Ds.kP({
                        result: {
                            case: "success",
                            value: new Ds.T2({
                                resources: s
                            })
                        }
                    });
                }
                const e = await this.mcpLease.getClients(n), r = new Set, s = await this.mcpLease.getTools(n);
                for (const e of s)r.add(e.providerIdentifier), r.add(`user-${e.providerIdentifier}`);
                const o = [];
                for (const [t, s] of Object.entries(e)){
                    if (r.size > 0 && !r.has(t)) continue;
                    const e = await this.listResourcesFromClient(n, s, t);
                    o.push(...e);
                }
                return new Ds.kP({
                    result: {
                        case: "success",
                        value: new Ds.T2({
                            resources: o
                        })
                    }
                });
            } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                return new Ds.kP({
                    result: {
                        case: "error",
                        value: new Ds.w2({
                            error: `Failed to list MCP resources: ${t}`
                        })
                    }
                });
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vo(r);
        }
    }
    async listResourcesFromClient(e, t, r, n = !1) {
        const s = await t.getState(e);
        if ("ready" !== s.kind && (!n || "loading" !== s.kind)) return [];
        const o = await t.listResources(e);
        return o && o.resources ? o.resources.map((e)=>new Ds.X2({
                uri: e.uri,
                name: e.name,
                description: e.description,
                mimeType: e.mimeType,
                server: r,
                annotations: e.annotations
            })) : [];
    }
}
class To {
    constructor(e, t = ".", r, n = [], s, o){
        this.mcpLease = e, this.projectDir = t, this.permissionsService = r, this.pendingDecisionProvider = s, this.ensureMcpServersLoaded = o, this.workspacePaths = n.filter((e)=>e.length > 0);
    }
    resolveProjectDir(e) {
        const t = e.get(m.IjH), r = t?.find((e)=>"string" == typeof e && e.length > 0);
        return r || (this.workspacePaths.length > 0 ? this.workspacePaths[0] : this.projectDir);
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = wo(r, (0, C.VI)(e.withName("LocalReadMcpResourceExecutor.execute")), !1).ctx, i = t.smartModeApproval?.reason;
            if (void 0 !== i) {
                if (void 0 === this.pendingDecisionProvider) return new Ds.ZD({
                    result: {
                        case: "error",
                        value: new Ds.Jx({
                            uri: t.uri,
                            error: "Auto-review approval provider is not configured"
                        })
                    }
                });
                const e = await this.pendingDecisionProvider.requestApproval({
                    type: ds.Mcp,
                    details: {
                        name: "FetchMcpResource",
                        toolName: "FetchMcpResource",
                        providerIdentifier: t.server,
                        args: {
                            server: bn.Value.fromJson(t.server),
                            uri: bn.Value.fromJson(t.uri),
                            ...void 0 !== t.downloadPath ? {
                                downloadPath: bn.Value.fromJson(t.downloadPath)
                            } : {}
                        },
                        reason: "smartMode",
                        canAllowlist: !1,
                        smartModeApprovalReason: i,
                        smartModeApprovalRequestId: t.smartModeApproval?.requestId
                    },
                    toolCallId: t.toolCallId
                });
                if (!e.approved) return new Ds.ZD({
                    result: {
                        case: "rejected",
                        value: new Ds.Dh({
                            reason: "User rejected MCP resource fetch" + (e.reason ? ` - ${e.reason}` : "")
                        })
                    }
                });
            }
            await this.ensureMcpServersLoaded?.(o, [
                t.server
            ]);
            const a = await this.mcpLease.getClients(o), c = a[t.server] ?? Object.values(a).find((e)=>e.serverName === t.server);
            if (!c) return new Ds.ZD({
                result: {
                    case: "error",
                    value: new Ds.Jx({
                        uri: t.uri,
                        error: `Server "${t.server}" not found`
                    })
                }
            });
            try {
                if ("ready" !== (await c.getState(o)).kind) return new Ds.ZD({
                    result: {
                        case: "error",
                        value: new Ds.Jx({
                            uri: t.uri,
                            error: `Server "${t.server}" is not ready`
                        })
                    }
                });
                const e = await c.readResource(o, {
                    uri: t.uri
                });
                if (!e || !e.contents || 0 === e.contents.length) return new Ds.ZD({
                    result: {
                        case: "notFound",
                        value: new Ds.ov({
                            uri: t.uri
                        })
                    }
                });
                const r = e.contents[0];
                if (t.downloadPath) {
                    const e = await async function(e, t) {
                        const r = s.resolve(e), o = await (0, n.realpath)(r), i = s.resolve(r, t.replace(/^\/+/, ""));
                        if (!bo(r, i)) throw new Error("downloadPath must stay within the workspace");
                        let a = s.dirname(i);
                        for(;;)try {
                            if (!bo(o, await (0, n.realpath)(a))) throw new Error("downloadPath must stay within the workspace");
                            break;
                        } catch (e) {
                            if ("ENOENT" !== So(e)) throw e;
                            const t = s.dirname(a);
                            if (t === a) throw e;
                            a = t;
                        }
                        if (await (0, n.mkdir)(s.dirname(i), {
                            recursive: !0
                        }), !bo(o, await (0, n.realpath)(s.dirname(i)))) throw new Error("downloadPath must stay within the workspace");
                        try {
                            if ((await (0, n.lstat)(i)).isSymbolicLink()) throw new Error("downloadPath must stay within the workspace");
                        } catch (e) {
                            if ("ENOENT" !== So(e)) throw e;
                        }
                        return i;
                    }(this.resolveProjectDir(o), t.downloadPath);
                    if (r.text) await (0, n.writeFile)(e, r.text, "utf8");
                    else if (r.blob) {
                        const t = Buffer.from(r.blob, "base64");
                        await (0, n.writeFile)(e, t);
                    }
                    return new Ds.ZD({
                        result: {
                            case: "success",
                            value: new Ds.KZ({
                                uri: t.uri,
                                name: r.name,
                                description: r.description,
                                mimeType: r.mimeType
                            })
                        }
                    });
                }
                if (r.text) return new Ds.ZD({
                    result: {
                        case: "success",
                        value: new Ds.KZ({
                            uri: t.uri,
                            name: r.name,
                            description: r.description,
                            mimeType: r.mimeType,
                            annotations: r.annotations,
                            metaJson: (0, m.Qw5)(r._meta),
                            content: {
                                case: "text",
                                value: r.text
                            }
                        })
                    }
                });
                if (r.blob) {
                    const e = Buffer.from(r.blob, "base64");
                    return new Ds.ZD({
                        result: {
                            case: "success",
                            value: new Ds.KZ({
                                uri: t.uri,
                                name: r.name,
                                description: r.description,
                                mimeType: r.mimeType,
                                annotations: r.annotations,
                                metaJson: (0, m.Qw5)(r._meta),
                                content: {
                                    case: "blob",
                                    value: e
                                }
                            })
                        }
                    });
                }
                return new Ds.ZD({
                    result: {
                        case: "error",
                        value: new Ds.Jx({
                            uri: t.uri,
                            error: "Failed to read resource"
                        })
                    }
                });
            } catch (e) {
                const r = e instanceof Error ? e.message : String(e);
                return _o.warn(o, "LocalReadMcpResourceExecutor.execute failed", {
                    server: t.server,
                    hasDownloadPath: Boolean(t.downloadPath),
                    errorName: e instanceof Error ? e.name : typeof e,
                    errorMessage: r
                }), new Ds.ZD({
                    result: {
                        case: "error",
                        value: new Ds.Jx({
                            uri: t.uri,
                            error: `Failed to read MCP resource: ${r}`
                        })
                    }
                });
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            vo(r);
        }
    }
}
async function Co(e, t) {
    const r = xo(t), o = (0, s.join)(e, m.FHy, r, m.J6s);
    let i;
    try {
        i = await (0, n.readdir)(o);
    } catch (e) {
        if ("ENOENT" === e?.code) return {
            toolNames: [],
            toolsDirExists: !1
        };
        throw e;
    }
    const a = await Promise.all(i.map(async (e)=>{
        if (e.endsWith(".json")) try {
            const t = await (0, n.readFile)((0, s.join)(o, e), "utf8");
            return (0, m.TGP)(t);
        } catch  {
            return;
        }
    })), c = new Set;
    for (const e of a)e && c.add(e);
    return {
        toolNames: Array.from(c).sort((e, t)=>e.localeCompare(t)),
        toolsDirExists: !0
    };
}
const Po = (0, T.h)("local-exec:mcp-disk-freshness-on-access"), Ao = "/mcps/", Ro = (0, cn.Pu)("mcp.discovery_freshness.check", {
    description: "MCP discovery surface freshness comparison outcome against canonical live tools",
    labelNames: [
        "surface",
        "outcome"
    ]
}), Mo = (0, cn.v5)("mcp.discovery_freshness.missing_tools", {
    description: "Number of tools present in canonical live state but missing from the observed discovery surface",
    labelNames: [
        "surface"
    ]
}), Jo = (0, cn.v5)("mcp.discovery_freshness.extra_tools", {
    description: "Number of tools present on the observed discovery surface but absent from canonical live state",
    labelNames: [
        "surface"
    ]
}), Oo = (0, cn.v5)("mcp.discovery_freshness.symmetric_difference", {
    description: "Total symmetric difference between canonical live tools and the observed discovery surface",
    labelNames: [
        "surface"
    ]
}), Bo = new Map;
function Do(e) {
    const t = e.replace(/\\/g, "/");
    return t.endsWith("/mcps") ? `${t}/` : t;
}
async function qo({ ctx: e, mcpStateAccessor: t, projectDir: r, sanitizedServerFolder: n, readDiskCatalog: s, state: o }) {
    let i = o;
    if (void 0 === i) try {
        i = await t.getState(e);
    } catch (t) {
        return void Po.warn(e, "mcp_disk_state_read_failed", {
            error_type: t instanceof Error ? t.name : typeof t
        });
    }
    const a = i.servers.find((e)=>xo(e.serverIdentifier) === n);
    if (void 0 === a) return;
    let c;
    try {
        c = await s(r, a.serverIdentifier);
    } catch (t) {
        return void Po.warn(e, "mcp_disk_catalog_read_failed", {
            error_type: t instanceof Error ? t.name : typeof t
        });
    }
    if (!c.toolsDirExists) return;
    const l = a.tools.map((e)=>e.toolName).filter((e)=>e.length > 0).sort((e, t)=>e.localeCompare(t));
    !function({ ctx: e, serverIdentifier: t, canonicalToolNames: r, observedToolNames: n }) {
        const s = new Set(n), o = new Set(r), i = r.filter((e)=>!s.has(e)), a = n.filter((e)=>!o.has(e)), c = 0 === i.length && 0 === a.length ? "match" : "mismatch", l = {
            surface: "disk"
        };
        Ro.increment(e, 1, {
            ...l,
            outcome: c
        }), Mo.histogram(e, i.length, l), Jo.histogram(e, a.length, l), Oo.histogram(e, i.length + a.length, l), "mismatch" === c && Po.warn(e, "mcp_disk_discovery_freshness_mismatch", {
            server_identifier: t,
            missing_tool_count: i.length,
            extra_tool_count: a.length
        });
    }({
        ctx: e,
        serverIdentifier: a.serverIdentifier,
        canonicalToolNames: l,
        observedToolNames: c.toolNames
    });
}
function No(e, t, r, n = Co) {
    if (void 0 === r || !function(e) {
        return void 0 !== e && Do(e).includes(Ao);
    }(r)) return;
    const s = function(e) {
        const t = Do(e), r = t.indexOf(Ao);
        if (-1 === r) return;
        const n = t.slice(0, r), s = t.slice(r + 6).split("/").filter(Boolean);
        return 0 !== n.length ? 0 === s.length ? {
            projectDir: n,
            kind: "mcps_root"
        } : {
            projectDir: n,
            kind: "server",
            sanitizedServerFolder: s[0]
        } : void 0;
    }(r);
    if (void 0 === s) return;
    let o, i;
    const a = "mcps_root" === s.kind;
    "mcps_root" === s.kind ? (o = `${s.projectDir}\0__mcps_root__`, i = void 0) : (o = `${s.projectDir}\0${s.sanitizedServerFolder}`, i = s.sanitizedServerFolder);
    const c = Bo.get(o);
    void 0 !== c && clearTimeout(c);
    const l = e, u = setTimeout(()=>{
        Bo.delete(o);
        (async ()=>{
            if (a) {
                const e = await t.getState(l);
                for (const r of e.servers){
                    const o = xo(r.serverIdentifier);
                    await qo({
                        ctx: l,
                        mcpStateAccessor: t,
                        projectDir: s.projectDir,
                        sanitizedServerFolder: o,
                        readDiskCatalog: n,
                        state: e
                    });
                }
                return;
            }
            void 0 !== i && await qo({
                ctx: l,
                mcpStateAccessor: t,
                projectDir: s.projectDir,
                sanitizedServerFolder: i,
                readDiskCatalog: n
            });
        })().catch((e)=>{
            Po.warn(l, "mcp_disk_discovery_freshness_schedule_failed", {
                error_type: e instanceof Error ? e.name : typeof e
            });
        });
    }, 2e3);
    Bo.set(o, u);
}
var Fo = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Uo = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Lo(e, t, r) {
    const n = function(e, t) {
        let r;
        for (const n of t)(0, O.ZU)({
            basePath: n,
            targetPath: e
        }) && (void 0 === r || n.length > r.length) && (r = n);
        return r;
    }((0, s.resolve)(e, t), r);
    return void 0 === n || n === e;
}
function $o(e, t, r) {
    return function(e, t, r) {
        const n = e.trim();
        if ("" === n) return {
            files: [],
            totalFiles: 0,
            clientTruncated: !1,
            ripgrepTruncated: !1
        };
        const s = [], o = new Rs;
        let i = 0, a = 0;
        for(; Ms(n, a, o);){
            const e = a, r = o.lineEnd;
            a = o.nextStart, i < t && s.push(n.slice(e, r)), i++;
        }
        return {
            files: s,
            totalFiles: ks(i),
            clientTruncated: i > t,
            ripgrepTruncated: i >= r
        };
    }(e, t, r);
}
function jo(e, t, r) {
    return function(e, t, r) {
        const n = e.trim();
        if ("" === n) return {
            counts: [],
            totalFiles: 0,
            totalMatches: 0,
            clientTruncated: !1,
            ripgrepTruncated: !1
        };
        const s = [], o = new Rs;
        let i = 0;
        for(; Ms(n, i, o);){
            const e = i, t = o.lineEnd;
            if (i = o.nextStart, t === e) continue;
            const r = n.lastIndexOf(":", t - 1);
            if (r < e || r === e) continue;
            const a = n.slice(r + 1, t).trim(), c = parseInt(a, 10);
            Number.isFinite(c) && s.push({
                file: n.slice(e, r),
                count: c
            });
        }
        const a = s.length;
        let c = 0;
        for(let e = 0; e < s.length; e++){
            const t = s[e];
            void 0 !== t && (c += t.count);
        }
        const l = [], u = a < t ? a : t;
        for(let e = 0; e < u; e++){
            const t = s[e];
            void 0 !== t && l.push(t);
        }
        return {
            counts: l,
            totalFiles: ks(a),
            totalMatches: ks(c),
            clientTruncated: a > t,
            ripgrepTruncated: a >= r
        };
    }(e, t, r);
}
function Go(e, t, r, n) {
    const s = {
        stack: [],
        error: void 0,
        hasError: !1
    };
    try {
        Fo(s, (0, C.VI)(n.withName("parseContentOutput")), !1);
        return function(e, t, r) {
            const n = {
                byFile: new Map,
                totalLines: 0,
                totalMatchedLines: 0,
                totalFiles: 0,
                clientTruncated: !1,
                ripgrepTruncated: !1
            };
            if ("" === e.trim()) return n;
            const s = new Map, o = new Set, i = new Rs;
            let a = 0, c = 0, l = 0, u = 0;
            for(; Ms(e, u, i);){
                const r = u, n = i.lineEnd;
                if (u = i.nextStart, l++, Js(e, r, n)) continue;
                let d = -1;
                for(let t = r; t < n; t++)if (e.charCodeAt(t) === Es) {
                    d = t;
                    break;
                }
                if (-1 === d) continue;
                let p = d + 1;
                if (p >= n) continue;
                let m = 0, h = 0;
                for(; p < n;){
                    const t = e.charCodeAt(p);
                    if (t < Cs || t > Ps) break;
                    m = 10 * m + (t - Cs), h++, p++;
                }
                if (0 === h || p >= n || !Number.isFinite(m)) continue;
                const f = e.charCodeAt(p);
                if (f !== As && f !== Ts) continue;
                const g = f === Ts;
                !1 === g && a++;
                const y = e.slice(r, d);
                if (o.has(y) || o.add(y), c >= t) continue;
                const w = e.slice(p + 1, n);
                let v = s.get(y);
                void 0 === v && (v = {
                    file: y,
                    matches: []
                }, s.set(y, v)), v.matches.push({
                    lineNumber: m,
                    content: w,
                    isContextLine: g
                }), c++;
            }
            return {
                byFile: s,
                totalLines: ks(l),
                totalMatchedLines: ks(a),
                totalFiles: ks(o.size),
                clientTruncated: c >= t,
                ripgrepTruncated: l >= r
            };
        }(e, t, r);
    } catch (e) {
        s.error = e, s.hasError = !0;
    } finally{
        Uo(s);
    }
}
const zo = (0, T.h)("local-exec/grep");
function Wo(e) {
    return e instanceof Error && e.message.includes("ENOENT") && e.message.includes("spawn");
}
function Ho(e) {
    try {
        return (0, I.existsSync)(e);
    } catch  {
        return "check_failed";
    }
}
function Ko(e, t, r, n) {
    return {
        ...Yo(e),
        ...n,
        cwd: t,
        cwdExists: Ho(t),
        errorMessage: r.message,
        errorCode: r.code,
        errno: r.errno,
        syscall: r.syscall,
        errorPath: r.path
    };
}
function Vo(e) {
    return new Error(`Path does not exist: ${e}`);
}
function Yo(e) {
    const t = {
        rgPath: e,
        platform: process.platform,
        arch: process.arch,
        pid: process.pid,
        uptimeSeconds: Math.round(process.uptime()),
        execPath: process.execPath
    };
    try {
        t.rgPathExists = (0, I.existsSync)(e);
    } catch (e) {
        t.rgPathExists = !1, t.rgPathExistsError = e instanceof Error ? e.message : String(e);
    }
    try {
        const r = (0, I.lstatSync)(e);
        t.rgIsSymlink = r.isSymbolicLink(), r.isSymbolicLink() && !t.rgPathExists && (t.rgBrokenSymlink = !0);
    } catch  {
        t.rgLstatFailed = !0;
    }
    const r = (0, s.dirname)(e);
    try {
        t.parentDirExists = (0, I.existsSync)(r), t.parentDirExists && (t.parentDirContents = (0, I.readdirSync)(r).slice(0, 50));
    } catch (e) {
        t.parentDirError = e instanceof Error ? e.message : String(e);
    }
    const n = (0, s.dirname)(r);
    try {
        t.grandparentDirExists = (0, I.existsSync)(n), t.grandparentDirExists && (t.grandparentDirContents = (0, I.readdirSync)(n).slice(0, 50));
    } catch (e) {
        t.grandparentDirError = e instanceof Error ? e.message : String(e);
    }
    if (t.rgPathExists) try {
        const r = (0, I.statSync)(e);
        t.rgFileSize = r.size, t.rgFileMode = r.mode.toString(8), t.rgIsFile = r.isFile(), t.rgModifiedMs = r.mtimeMs;
    } catch (e) {
        t.rgStatError = e instanceof Error ? e.message : String(e);
    }
    const o = "node_modules.asar.unpacked";
    if (e.includes(o)) {
        const r = e.split(o)[0];
        if (r) {
            const e = r.concat("node_modules.asar");
            try {
                t.asarExists = (0, I.existsSync)(e);
            } catch  {
                t.asarExists = "check_failed";
            }
            const n = r.concat(o);
            try {
                if (t.asarUnpackedDirExists = (0, I.existsSync)(n), t.asarUnpackedDirExists) {
                    const e = (0, s.join)(n, "@vscode", "ripgrep");
                    t.ripgrepPkgDirExists = (0, I.existsSync)(e);
                }
            } catch  {
                t.asarUnpackedDirExists = "check_failed";
            }
        }
    }
    return t;
}
class Qo {
    constructor(e, t, r, n){
        this.ignoreService = e, this.grepProvider = t, this.workspacePath = r;
        const s = Array.isArray(this.workspacePath) ? this.workspacePath[0] : this.workspacePath;
        this.singleWorkspacePath = Array.isArray(this.workspacePath) && this.workspacePath.length > 1 ? void 0 : s, this.mcpStateAccessor = n?.mcpStateAccessor, this.permissionsService = n?.permissionsService;
    }
    computeRelativeTarget(e, t) {
        const r = (0, O.o1)(e, this.singleWorkspacePath ?? t);
        return r === t ? "." : (0, s.relative)(t, r);
    }
    isRootIndependentSearchPath(e) {
        return (0, s.isAbsolute)(e) || /^~(?=$|[/\\])/.test(e) || e.startsWith("file://");
    }
    resolveSearchTargets(e, t) {
        const r = this.isRootIndependentSearchPath(e);
        return t.map((t)=>{
            const n = (0, s.resolve)(t);
            return {
                root: t,
                resolvedRoot: n,
                target: (0, O.o1)(e, r ? void 0 : n)
            };
        });
    }
    clampGrepArgsToWorkspace(e, t) {
        if (void 0 === e.path || "" === e.path) return e;
        const r = this.resolveSearchTargets(e.path, t);
        if (this.isRootIndependentSearchPath(e.path) ? r.some(({ resolvedRoot: e, target: t })=>(0, O.BJ)(t, e)) : r.every(({ resolvedRoot: e, target: t })=>(0, O.BJ)(t, e))) return e;
        const n = e.clone();
        return n.path = void 0, n;
    }
    async buildArgs(e, t, r) {
        const n = [], s = await this.ignoreService.listCursorIgnoreFilesByRoot(e);
        for (const e of s)n.push("--cursor-ignore", e);
        if ("content" === r) n.push("--line-number", "--with-filename", "--no-heading", "-0"), void 0 !== t.contextBefore && n.push("--before-context", String(t.contextBefore)), void 0 !== t.contextAfter && n.push("--after-context", String(t.contextAfter)), n.push("--max-columns", String(1e3), "--max-columns-preview"), void 0 !== t.context && void 0 === t.contextBefore && void 0 === t.contextAfter && n.push("--before-context", String(t.context), "--after-context", String(t.context));
        else if ("files_with_matches" === r) n.push("-l");
        else {
            if ("count" !== r) {
                throw new Error(`Unknown output mode: ${r}`);
            }
            n.push("-c", "--with-filename");
        }
        !0 === t.caseInsensitive ? n.push("--ignore-case") : n.push("--case-sensitive"), t.type && n.push("--type", t.type), t.glob && n.push("--iglob", t.glob), t.multiline && n.push("--multiline", "--multiline-dotall");
        const o = t.sort ?? "modified";
        if ("none" !== o) {
            const e = !0 === t.sortAscending ? "--sort" : "--sortr";
            n.push(e, o);
        }
        return n.push("--no-config", "--color=never"), n.push("--hidden"), n.push("--follow"), n.push("--regexp", t.pattern), n.push("--"), n.push(t.path ? this.computeRelativeTarget(t.path, e) : "."), n;
    }
    async filterBlockedFiles(e, t) {
        const r = await this.permissionsService?.getFileReadBoundaryBlocker?.(), n = [];
        for (const s of e){
            const e = (0, O.o1)(s.file, t), o = await He(e);
            null === o || await this.isPostRipgrepBlocked(o) || void 0 !== r && await r(e, o) || n.push(s);
        }
        return n;
    }
    async isPostRipgrepBlocked(e) {
        const [t, r] = await Promise.all([
            this.ignoreService.isCursorIgnored(e),
            this.ignoreService.isRepoBlocked(e)
        ]);
        return t || r;
    }
    async runFilesMode(e, t, r, n, s) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const i = Fo(o, (0, C.VI)(e.withName("LocalGrepExecutor.runFilesMode")), !1), a = await this.buildArgs(t, r, "files_with_matches"), c = await this.executeRg(i.ctx, t, a, void 0, n, s);
            if (("" !== c.stderr || 2 === c.exitCode) && "" === c.stdout.trim()) throw new Error(c.stderr || `ripgrep exited with code ${c.exitCode}`);
            const { files: l, totalFiles: u, clientTruncated: d, ripgrepTruncated: p } = $o(c.stdout, Qo.CLIENT_LIMIT_LINES, Qo.HARD_MAX_OUTPUT_LINES), m = (await this.filterBlockedFiles(l.map((e)=>({
                    file: e
                })), t)).map(({ file: e })=>e), h = l.length - m.length, f = new _s.T7({
                files: m,
                totalFiles: ks(u - h),
                clientTruncated: d,
                ripgrepTruncated: p
            });
            return new _s.vD({
                result: {
                    case: "files",
                    value: f
                }
            });
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Uo(o);
        }
    }
    async runCountMode(e, t, r, n, s) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const i = Fo(o, (0, C.VI)(e.withName("LocalGrepExecutor.runCountMode")), !1), a = await this.buildArgs(t, r, "count"), c = await this.executeRg(i.ctx, t, a, void 0, n, s);
            if (("" !== c.stderr || 2 === c.exitCode) && "" === c.stdout.trim()) throw new Error(c.stderr || `ripgrep exited with code ${c.exitCode}`);
            const { counts: l, totalFiles: u, totalMatches: d, clientTruncated: p, ripgrepTruncated: m } = jo(c.stdout, Qo.CLIENT_LIMIT_LINES, Qo.HARD_MAX_OUTPUT_LINES), h = await this.filterBlockedFiles(l, t), f = h.reduce((e, t)=>e + t.count, 0), g = l.length - h.length, y = l.reduce((e, t)=>e + t.count, 0) - f, w = new _s.xA({
                counts: h.map((e)=>new _s.sS({
                        file: e.file,
                        count: ks(e.count)
                    })),
                totalFiles: ks(u - g),
                totalMatches: ks(d - y),
                clientTruncated: p,
                ripgrepTruncated: m
            });
            return new _s.vD({
                result: {
                    case: "count",
                    value: w
                }
            });
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Uo(o);
        }
    }
    async runContentMode(e, t, r, n, s) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const i = Fo(o, (0, C.VI)(e.withName("LocalGrepExecutor.runContentMode")), !1), a = await this.buildArgs(t, r, "content"), c = await this.executeRg(i.ctx, t, a, void 0, n, s);
            if (("" !== c.stderr || 2 === c.exitCode) && "" === c.stdout.trim()) throw new Error(c.stderr || `ripgrep exited with code ${c.exitCode}`);
            const { byFile: l, totalLines: u, totalMatchedLines: d, clientTruncated: p, ripgrepTruncated: m } = Go(c.stdout, Qo.CLIENT_LIMIT_LINES, Qo.HARD_MAX_OUTPUT_LINES, i.ctx), h = Array.from(l.values()), f = await this.filterBlockedFiles(h, t), g = h.filter((e)=>!f.includes(e)), y = g.reduce((e, t)=>e + t.matches.length, 0), w = g.reduce((e, t)=>e + t.matches.filter((e)=>!e.isContextLine).length, 0), v = new _s.Zp({
                matches: f.map((e)=>new _s.uI({
                        file: e.file,
                        matches: e.matches.map((e)=>new _s.dx({
                                lineNumber: e.lineNumber,
                                content: e.content,
                                isContextLine: e.isContextLine
                            }))
                    })),
                totalLines: ks(u - y),
                totalMatchedLines: ks(d - w),
                clientTruncated: p,
                ripgrepTruncated: m
            });
            return new _s.vD({
                result: {
                    case: "content",
                    value: v
                }
            });
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Uo(o);
        }
    }
    async executeIndexedGrepWithTimeout(e, t, r, n) {
        if (void 0 === this.grepProvider.executeIndexedGrep) return;
        const [s, o] = e.withTimeoutAndCancel(Qo.INDEXED_GREP_CONTEXT_TIMEOUT_MS), i = {
            phase: "provider"
        }, a = performance.now();
        try {
            return await (0, ke.wj)(this.grepProvider.executeIndexedGrep(s, t, r, i), Qo.INDEXED_GREP_TIMEOUT_MS, `Indexed grep timed out after ${Qo.INDEXED_GREP_TIMEOUT_MS / 1e3}s`);
        } catch (t) {
            if (t instanceof ke.MU) return void zo.debug(e, "indexed_grep.timeout_fallback", {
                ...n,
                totalMs: Math.round(performance.now() - a),
                ...i
            });
            throw t;
        } finally{
            o();
        }
    }
    async executeRg(e, t, r, n, s, o) {
        const i = (0, C.VI)(e.withName("LocalGrepExecutor.executeRg")), a = "utf8", c = 8388608;
        return n = n ?? Qo.HARD_MAX_OUTPUT_LINES, new Promise((l, u)=>{
            let d = !1, p = !1;
            const m = ()=>{
                p || (p = !0, i.span.end());
            };
            let h, f;
            try {
                const e = s;
                if (h = (0, R.spawnInSandbox)((0, R.Ko)(), r, {
                    cwd: t
                }, e), Ae()) {
                    const t = r.indexOf("--regexp"), n = t >= 0 && t + 1 < r.length ? r[t + 1].length : 0;
                    let s = 0;
                    for (const e of r)"--iglob" === e && s++;
                    Re({
                        timestamp: Date.now(),
                        source: "agent_grep_tool",
                        mode: o.outputMode,
                        patternLength: n,
                        hasPath: void 0 !== o.targetPath,
                        includeGlobCount: s,
                        excludeGlobCount: 0,
                        sandboxPolicyType: e.type,
                        toolCallId: o.toolCallId,
                        execId: o.execId
                    });
                }
            } catch (r) {
                if (m(), Wo(r)) {
                    const n = r, s = (0, R.Ko)();
                    if (zo.error(e, "rg_diagnostics.spawn_throw", void 0, Ko(s, t, n, o)), !1 === Ho(t)) return u(Vo(t));
                }
                return u(r);
            }
            const g = [], y = [];
            let w = 0, v = 0, _ = 0, b = !1;
            f = setTimeout(()=>{
                if (!d) try {
                    m(), u(new Error(`Timed out after ${Qo.MAIN_TIMEOUT_MS / 1e3}s`)), h.kill();
                } catch  {}
            }, Qo.MAIN_TIMEOUT_MS), h.stdout?.on("data", (e)=>{
                if (w += e.length, void 0 !== n && !0 !== b) {
                    let t = -1, r = 0;
                    for(let s = 0; s < e.length; s++)if (10 === e[s] && (r++, _ + r >= n)) {
                        t = s + 1, b = !0;
                        try {
                            h.kill();
                        } catch  {}
                        break;
                    }
                    _ += r;
                    const s = t >= 0 ? e.subarray(0, t) : e;
                    w <= c && g.push(s);
                } else !0 !== b && w <= c && g.push(e);
            }), h.stderr?.on("data", (e)=>{
                v += e.length, v <= c && y.push(e);
            }), h.on("error", (r)=>{
                if (clearTimeout(f), m(), Wo(r)) {
                    const n = (0, R.Ko)(), s = r;
                    if (zo.error(e, "rg_diagnostics.spawn_enoent", void 0, Ko(n, t, s, o)), !1 === Ho(t)) return void u(Vo(t));
                }
                u(r);
            }), h.on("close", (e)=>{
                d = !0, clearTimeout(f);
                const t = Buffer.concat(g).toString(a), r = Buffer.concat(y).toString(a);
                m(), l({
                    stdout: t,
                    stderr: r,
                    exitCode: e ?? 0
                });
            });
        });
    }
    async execute(e, t, r) {
        const o = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const i = Fo(o, (0, C.VI)(e.withName("LocalGrepExecutor.execute")), !1), a = Array.isArray(this.workspacePath) ? this.workspacePath : [
                this.workspacePath ?? process.cwd()
            ], c = t.outputMode ?? "content", l = {
                toolCallId: t.toolCallId,
                execId: r?.execId,
                outputMode: c,
                targetPath: t.path,
                workspacePaths: a
            }, u = re(t.sandboxPolicy), d = this.grepProvider.getWorktreeGuardInfo?.(a);
            if ((0, O.fl)({
                targetPath: t.path,
                workspacePaths: a,
                mainWorktreePath: d?.mainWorktreePath
            })) return new _s.Ud({
                result: {
                    case: "error",
                    value: new _s.ts({
                        error: O.PS
                    })
                }
            });
            const p = this.clampGrepArgsToWorkspace(t, a);
            let m = a;
            try {
                if (p.path) {
                    const t = [];
                    let r = !1, n = !1;
                    for (const { root: s, resolvedRoot: o, target: i } of this.resolveSearchTargets(p.path, a)){
                        if (!(0, O.BJ)(i, o)) continue;
                        const a = await He(i);
                        null !== a ? await this.ignoreService.isCursorIgnored(a) ? r = !0 : (t.push(s), void 0 !== this.mcpStateAccessor && No(e, this.mcpStateAccessor, a)) : n = !0;
                    }
                    if (0 === t.length) {
                        const e = r ? `Path '${p.path}' is filtered out by .cursorignore` : n ? function(e) {
                            return `Path '${e}' could not be verified while resolving symlinks. This can happen when access is denied or the path contains a symlink loop.`;
                        }(p.path) : `Path '${p.path}' is outside the workspace`;
                        return new _s.Ud({
                            result: {
                                case: "error",
                                value: new _s.ts({
                                    error: e
                                })
                            }
                        });
                    }
                    m = t;
                }
                let t = {};
                const r = await this.executeIndexedGrepWithTimeout(i.ctx, m, p, l);
                if (void 0 !== r) {
                    t = r;
                    for (const [e, r] of Object.entries(t)){
                        const t = r.result;
                        switch(t.case){
                            case "content":
                                t.value.matches = await this.filterBlockedFiles(t.value.matches, e);
                                break;
                            case "files":
                                t.value.files = (await this.filterBlockedFiles(t.value.files.map((e)=>({
                                        file: e
                                    })), e)).map(({ file: e })=>e);
                                break;
                            case "count":
                                t.value.counts = await this.filterBlockedFiles(t.value.counts, e);
                        }
                    }
                } else for (const e of m){
                    if (!1 === Ho(e)) return new _s.Ud({
                        result: {
                            case: "error",
                            value: new _s.ts({
                                error: `Path does not exist: ${e}`
                            })
                        }
                    });
                    let r;
                    if ("content" === c) r = await this.runContentMode(i.ctx, e, p, u, l);
                    else if ("files_with_matches" === c) r = await this.runFilesMode(i.ctx, e, p, u, l);
                    else {
                        if ("count" !== c) {
                            throw new Error(`Unknown output mode: ${c}`);
                        }
                        r = await this.runCountMode(i.ctx, e, p, u, l);
                    }
                    t[e] = r;
                }
                const n = function(e, t) {
                    if (t.length <= 1) return e;
                    const r = [
                        ...new Set(t.map((e)=>(0, s.resolve)(e)))
                    ], n = {};
                    for (const [t, o] of Object.entries(e)){
                        const e = (0, s.resolve)(t), i = (t)=>Lo(e, t, r), a = o.result;
                        switch(a.case){
                            case "content":
                                {
                                    const e = a.value, r = [];
                                    let s = 0, o = 0;
                                    for (const t of e.matches)i(t.file) ? r.push(t) : (s += t.matches.length, o += t.matches.filter((e)=>!e.isContextLine).length);
                                    n[t] = new _s.vD({
                                        result: {
                                            case: "content",
                                            value: new _s.Zp({
                                                ...e,
                                                matches: r,
                                                totalLines: Math.max(0, e.totalLines - s),
                                                totalMatchedLines: Math.max(0, e.totalMatchedLines - o)
                                            })
                                        }
                                    });
                                    break;
                                }
                            case "files":
                                {
                                    const e = a.value, r = e.files.filter((e)=>i(e));
                                    n[t] = new _s.vD({
                                        result: {
                                            case: "files",
                                            value: new _s.T7({
                                                ...e,
                                                files: r,
                                                totalFiles: Math.max(0, e.totalFiles - (e.files.length - r.length))
                                            })
                                        }
                                    });
                                    break;
                                }
                            case "count":
                                {
                                    const e = a.value, r = [];
                                    let s = 0;
                                    for (const t of e.counts)i(t.file) ? r.push(t) : s += t.count;
                                    n[t] = new _s.vD({
                                        result: {
                                            case: "count",
                                            value: new _s.xA({
                                                ...e,
                                                counts: r,
                                                totalFiles: Math.max(0, e.totalFiles - (e.counts.length - r.length)),
                                                totalMatches: Math.max(0, e.totalMatches - s)
                                            })
                                        }
                                    });
                                    break;
                                }
                            default:
                                n[t] = o;
                        }
                    }
                    return n;
                }(t, m), o = new _s._0({
                    pattern: p.pattern,
                    path: p.path,
                    outputMode: c,
                    workspaceResults: n
                });
                return new _s.Ud({
                    result: {
                        case: "success",
                        value: o
                    }
                });
            } catch (e) {
                if (p.path) {
                    const e = (0, O.o1)(p.path, this.singleWorkspacePath);
                    try {
                        await (0, n.stat)(e);
                    } catch (t) {
                        return new _s.Ud({
                            result: {
                                case: "error",
                                value: new _s.ts({
                                    error: `Path does not exist: ${e}`
                                })
                            }
                        });
                    }
                }
                return new _s.Ud({
                    result: {
                        case: "error",
                        value: new _s.ts({
                            error: e instanceof Error ? e.message : String(e)
                        })
                    }
                });
            }
        } catch (e) {
            o.error = e, o.hasError = !0;
        } finally{
            Uo(o);
        }
    }
}
Qo.MAIN_TIMEOUT_MS = 25e3, Qo.INDEXED_GREP_TIMEOUT_MS = 25e3, Qo.INDEXED_GREP_CONTEXT_TIMEOUT_MS = Qo.INDEXED_GREP_TIMEOUT_MS + 100, Qo.HARD_MAX_OUTPUT_LINES = 1e4, Qo.CLIENT_LIMIT_LINES = 2e3;
Pn.Ik({
    record_v: Pn.ai().int().nullish(),
    pid: Pn.ai().int().nonnegative().nullish(),
    version: Pn.Yj().nullish(),
    started_at: Pn.ai().nullish(),
    control_sock: Pn.Yj().nullish(),
    runtime_dir: Pn.Yj().nullish(),
    data_dir: Pn.Yj().nullish(),
    config_path: Pn.Yj().nullish(),
    log_path: Pn.Yj().nullish(),
    metrics_addr: Pn.Yj().nullish(),
    exe: Pn.Yj().nullish()
});
Pn.Ik({
    mountpoint: Pn.Yj().nullish(),
    capabilities: Pn.YO(Pn.Yj()).nullish(),
    nfs_transport: Pn.Yj().nullish(),
    bind_ignored: Pn.Ik({
        active: Pn.YO(Pn.Yj()).nullish()
    }).passthrough().nullish()
}), Pn.Ik({
    daemon_alive: Pn.zM().nullish(),
    mounts: Pn.YO(Pn.L5()).nullish(),
    data_plane: Pn.Ik({
        enabled: Pn.zM().nullish()
    }).passthrough().nullish()
});
const Xo = Pn.ai().int().nonnegative(), Zo = Pn.Ik({
    line_no: Pn.ai().int().positive(),
    kind: Pn.k5([
        "match",
        "before",
        "after"
    ]),
    text: Pn.Yj().optional(),
    bytes: Pn.Yj().regex(/^(?:[0-9a-fA-F]{2})*$/).optional(),
    truncated: Pn.zM().default(!1)
}).refine((e)=>void 0 !== e.text || void 0 !== e.bytes);
Pn.Ik({
    type: Pn.eu("file"),
    path: Pn.Yj(),
    lines: Pn.YO(Zo)
}), Pn.Ik({
    type: Pn.eu("summary"),
    files_searched: Xo,
    more: Pn.zM(),
    stop_reason: Pn.Yj().nullable(),
    skipped: Pn.Ik({
        over_size: Xo,
        size_unknown: Xo,
        budget_exhausted: Xo,
        fetch_failed: Xo,
        unreadable: Xo
    })
}), Pn.Ik({
    type: Pn.Yj()
});
(0, T.h)("local-exec/grove-grep");
var ei = require("./module-72730.js"), ti = require("./module-90066.js"), ri = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, ni = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class si {
    constructor(e, t, r){
        this.permissionsService = e, this.ignoreService = t, this.workspacePath = r;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            ri(r, (0, C.VI)(e.withName("LocalLsExecutor.execute")), !1).ctx;
            const s = (0, O.o1)(t.path, this.workspacePath);
            try {
                let r;
                try {
                    r = await (0, n.stat)(s);
                } catch (e) {
                    return "ENOENT" === e.code ? (0, ti.jq)(s) ? new ei.fv({
                        result: {
                            case: "error",
                            value: new ei.uj({
                                path: s,
                                error: "No active terminals."
                            })
                        }
                    }) : new ei.fv({
                        result: {
                            case: "error",
                            value: new ei.uj({
                                path: s,
                                error: `Path does not exist: ${s}`
                            })
                        }
                    }) : new ei.fv({
                        result: {
                            case: "error",
                            value: new ei.uj({
                                path: s,
                                error: e.message
                            })
                        }
                    });
                }
                if (!r.isDirectory()) return new ei.fv({
                    result: {
                        case: "error",
                        value: new ei.uj({
                            path: s,
                            error: `Path is not a directory: ${s}`
                        })
                    }
                });
                const o = re(t.sandboxPolicy), i = t.timeoutMs ?? 5e3, a = e.withTimeout(i), { tree: c, didTimeout: l } = await this.getDirectoryTree(a, s, t.ignore, o);
                return l ? new ei.fv({
                    result: {
                        case: "timeout",
                        value: new ei.ze({
                            directoryTreeRoot: c
                        })
                    }
                }) : new ei.fv({
                    result: {
                        case: "success",
                        value: new ei.PC({
                            directoryTreeRoot: c
                        })
                    }
                });
            } catch (e) {
                return new ei.fv({
                    result: {
                        case: "error",
                        value: new ei.uj({
                            path: s,
                            error: e instanceof Error ? e.message : "Unknown error occurred"
                        })
                    }
                });
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            ni(r);
        }
    }
    async getDirectoryTree(e, t, r, n) {
        const s = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            ri(s, (0, C.VI)(e.withName("LocalLsExecutor.getDirectoryTree")), !1);
            return await this.buildTreeFromRipgrepStream(e, t, r, n, 2500);
        } catch (e) {
            s.error = e, s.hasError = !0;
        } finally{
            ni(s);
        }
    }
    async buildTreeFromRipgrepStream(e, t, r, n, o) {
        const i = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            ri(i, (0, C.VI)(e.withName("LocalLsExecutor.buildTreeFromRipgrepStream")), !1);
            const a = (0, s.resolve)(t), c = new ei.vq({
                absPath: a,
                childrenDirs: [],
                childrenFiles: [],
                childrenWereProcessed: !0,
                fullSubtreeExtensionCounts: {}
            }), l = new Map;
            l.set(a, c);
            const u = {
                charactersUsed: a.length,
                budgetExceeded: !1
            }, [d, p] = await Promise.all([
                this.ignoreService.listCursorIgnoreFilesByRoot(t),
                this.ignoreService.getRepoBlockExcludeGlobs(t)
            ]), m = [
                ...r,
                ...p
            ], { lines: h, didTimeout: f } = Oe(e, {
                root: t,
                excludeGlobs: m,
                caseSensitive: !0,
                cursorIgnoreFiles: d,
                sandboxPolicy: n,
                source: "ls"
            });
            for await (const e of h){
                if (!e) continue;
                const r = (0, s.resolve)(t, e), n = await He(r);
                null === n || await this.ignoreService.isCursorIgnored(n) || await this.ignoreService.isRepoBlocked(n) || this.addPathToTree(r, a, l, u, o);
            }
            return this.sortTreeChildren(c), {
                tree: c,
                didTimeout: await f
            };
        } catch (e) {
            i.error = e, i.hasError = !0;
        } finally{
            ni(i);
        }
    }
    addPathToTree(e, t, r, n, o) {
        const i = (0, s.basename)(e), a = (0, s.dirname)(e);
        this.ensureDirectoryPath(a, t, r, n.budgetExceeded);
        const c = r.get(a);
        if (!c) return;
        const l = i.length;
        if (!n.budgetExceeded && n.charactersUsed + l <= o) {
            const e = new ei.ur({
                name: i
            });
            c.childrenFiles.push(e), n.charactersUsed += l;
        } else {
            if (!n.budgetExceeded) {
                n.budgetExceeded = !0;
                let e = a;
                for(; e.startsWith(t);){
                    const t = r.get(e);
                    t && (t.childrenWereProcessed = !1);
                    const n = (0, s.dirname)(e);
                    if (n === e) break;
                    e = n;
                }
            }
            const o = (0, s.extname)(e);
            let i = a;
            for(; i.startsWith(t);){
                const e = r.get(i);
                e && (e.fullSubtreeExtensionCounts[o] ??= 0, e.fullSubtreeExtensionCounts[o] = ks(e.fullSubtreeExtensionCounts[o] + 1), e.numFiles ??= 0, e.numFiles = ks(e.numFiles + 1));
                const t = (0, s.dirname)(i);
                if (t === i) break;
                i = t;
            }
        }
    }
    ensureDirectoryPath(e, t, r, n) {
        if (r.has(e) || e === t) return;
        const o = (0, s.dirname)(e);
        o !== e && o.startsWith(t) && this.ensureDirectoryPath(o, t, r, n);
        const i = new ei.vq({
            absPath: e,
            childrenDirs: [],
            childrenFiles: [],
            childrenWereProcessed: !n,
            fullSubtreeExtensionCounts: {}
        });
        r.set(e, i);
        const a = r.get(o);
        a && a.childrenDirs.push(i);
    }
    sortTreeChildren(e) {
        e.childrenDirs.sort((e, t)=>(0, s.basename)(e.absPath).localeCompare((0, s.basename)(t.absPath))), e.childrenFiles.sort((e, t)=>e.name.localeCompare(t.name));
        for (const t of e.childrenDirs)this.sortTreeChildren(t);
    }
}
var oi = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, ii = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const ai = 1e4, ci = 5e3, li = {
    PAGER: "cat",
    MANPAGER: "cat",
    LESS: "-R",
    PIP_PROGRESS_BAR: "off",
    TQDM_DISABLE: "1"
};
class ui {
    constructor(){
        this.fullOutput = "", this.outputHead = "", this.outputTail = "", this.totalChars = 0;
    }
    append(e) {
        if (0 === e.length) return;
        const t = this.totalChars;
        if (this.totalChars += e.length, this.outputHead.length < ci && (this.outputHead = (this.outputHead + e).slice(0, ci)), this.outputTail = (this.outputTail + e).slice(-5e3), t < ai) {
            const r = Math.min(e.length, ai - t);
            this.fullOutput += e.slice(0, r);
        }
        this.totalChars > ai && (this.fullOutput = "");
    }
    getOutput() {
        return this.totalChars <= ai ? this.fullOutput : void 0;
    }
    getTruncation() {
        if (!(this.totalChars <= ai)) return {
            outputHead: this.outputHead,
            outputTail: this.outputTail,
            elidedChars: this.totalChars - ai
        };
    }
}
function di(e, t) {
    const r = ls - e.length;
    return r <= 0 ? e : e + t.slice(0, r);
}
function pi(e, t) {
    return null !== e ? e : null === t ? -1 : -ge.constants.signals[t];
}
class mi {
    constructor(e, t, r){
        this.permissionsService = e, this.ignoreService = t, this.defaultCwd = r;
    }
    buildResult({ args: e, workingDirectory: t, processResult: r, sandboxPolicy: n }) {
        const s = {
            command: e.command,
            workingDirectory: t,
            exitCode: r.returncode,
            signal: r.signal,
            stdout: r.stdout,
            stderr: r.exceptionInfo || r.stderr,
            interleavedOutput: r.output,
            outputHead: r.outputTruncation?.outputHead,
            outputTail: r.outputTruncation?.outputTail,
            elidedChars: r.outputTruncation?.elidedChars,
            executionTime: r.localExecutionTimeMs ?? 0,
            localExecutionTimeMs: r.localExecutionTimeMs
        }, o = r.exceptionInfo.length > 0, i = 0 !== r.returncode || o ? {
            case: "failure",
            value: new A.xC({
                ...s,
                aborted: o,
                abortReason: r.abortReason
            })
        } : {
            case: "success",
            value: new A.QR(s)
        };
        return new A.W4({
            result: i,
            sandboxPolicy: ne(n)
        });
    }
    async runProcess({ ctx: e, args: t, workingDirectory: r, sandboxPolicy: n, timeoutMs: s }) {
        const o = performance.now(), i = this.defaultCwd, a = (await (0, R.resolveSandboxPolicyForWorkspace)(i, n ? {
            perRepo: n
        } : void 0)).policy, c = "insecure_none" !== a.type ? {
            ...a,
            sandboxWorkspaceRoot: i
        } : a;
        return await new Promise((n)=>{
            const i = new ui;
            let a, l, u = "", d = "", p = !1, m = !1, h = "", f = ()=>{};
            const g = (0, R.Xw)({
                ...process.env,
                ...li,
                CURSOR_AGENT: "1"
            }), y = {
                cwd: r,
                env: g,
                stdio: [
                    "pipe",
                    "pipe",
                    "pipe"
                ],
                detached: "win32" !== process.platform,
                windowsVerbatimArguments: "win32" === process.platform
            }, w = "win32" === process.platform ? {
                executable: process.env.ComSpec ?? "cmd.exe",
                args: (v = t.command, [
                    "/d",
                    "/s",
                    "/c",
                    `"${v}"`
                ])
            } : {
                executable: "/bin/sh",
                args: [
                    "-c",
                    t.command
                ]
            };
            var v;
            const _ = "insecure_none" === c.type ? (0, dn.D9)(un.spawn, w.executable, w.args, y) : (0, R.spawnInSandbox)(w.executable, w.args, y, c);
            _.stdin?.end();
            const b = (e)=>{
                p || (p = !0, clearTimeout(l), f(), n({
                    ...e,
                    output: i.getOutput(),
                    outputTruncation: i.getTruncation(),
                    localExecutionTimeMs: xs(performance.now() - o)
                }));
            };
            l = setTimeout(()=>{
                if (m = !0, void 0 === a && (h = `An error occurred while executing the command: Command timed out after ${s}ms`, a = A.Lv.TIMEOUT, f()), void 0 !== _.pid && "win32" !== process.platform) try {
                    return void process.kill(-_.pid, "SIGKILL");
                } catch  {}
                _.kill("SIGKILL");
            }, s);
            const S = ()=>{
                if (void 0 === a) {
                    if (h = "An error occurred while executing the command: Command aborted", a = A.Lv.USER_ABORT, void 0 !== _.pid && "win32" !== process.platform) try {
                        return void process.kill(-_.pid, "SIGTERM");
                    } catch  {}
                    _.kill("SIGTERM");
                }
            };
            e.signal.aborted ? S() : (e.signal.addEventListener("abort", S, {
                once: !0
            }), f = ()=>{
                e.signal.removeEventListener("abort", S);
            }), _.stdout?.on("data", (e)=>{
                const t = e.toString();
                u = di(u, t), i.append(t);
            }), _.stderr?.on("data", (e)=>{
                const t = e.toString();
                d = di(d, t), i.append(t);
            }), _.on("error", (e)=>{
                b({
                    stdout: u,
                    stderr: d,
                    returncode: -1,
                    signal: "",
                    exceptionInfo: `An error occurred while executing the command: ${e.message}`
                });
            }), _.on("close", (e, t)=>{
                b({
                    stdout: u,
                    stderr: d,
                    returncode: h.length > 0 ? -1 : pi(e, t),
                    signal: t ?? (m ? "SIGKILL" : ""),
                    exceptionInfo: h,
                    abortReason: a
                });
            });
        });
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = oi(r, (0, C.VI)(e.withName("LocalMiniSweAgentBashExecutor.execute")), !1).ctx;
            (0, C.HF)(n, "LocalMiniSweAgentBashExecutor.execute");
            const s = t.command, o = (0, O.o1)(t.workingDirectory || this.defaultCwd), i = t.timeout > 0 ? t.timeout : 3e4;
            if (!t.parsingResult) return new A.W4({
                result: {
                    case: "spawnError",
                    value: new A.mJ({
                        command: s,
                        workingDirectory: o,
                        error: "Parsing result is required"
                    })
                }
            });
            let a = t.requestedSandboxPolicy ? re(t.requestedSandboxPolicy) : void 0;
            const c = await this.permissionsService.shouldBlockShellCommand(n, s, {
                workingDirectory: o,
                timeout: i,
                parsingResult: t.parsingResult,
                toolCallId: t.toolCallId
            }, a);
            if ("block" === c.kind) {
                return "permissionsConfig" === c.reason.type && (c.reason.isReadonly ?? !1) ? new A.W4({
                    result: {
                        case: "permissionDenied",
                        value: new A.jn({
                            command: s,
                            workingDirectory: o,
                            error: "Command blocked by permissions configuration",
                            isReadonly: !0
                        })
                    }
                }) : new A.W4({
                    result: {
                        case: "rejected",
                        value: new A.pZ({
                            command: s,
                            workingDirectory: o,
                            reason: Ze(c.reason)
                        })
                    }
                });
            }
            a = c.policy, G() && (a = Y(s, t.parsingResult)), a && "insecure_none" !== a.type && (a = {
                ...a,
                ignoreMapping: await this.ignoreService.getCursorIgnoreMapping()
            });
            const l = await this.runProcess({
                ctx: n,
                args: t,
                workingDirectory: o,
                sandboxPolicy: a,
                timeoutMs: i
            });
            return this.buildResult({
                args: t,
                workingDirectory: o,
                processResult: l,
                sandboxPolicy: a
            });
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            ii(r);
        }
    }
}
var hi = require("./module-83407.js"), fi = require("./module-38036.js");
const gi = 51200;
function yi(e) {
    return Buffer.byteLength(e, "utf8");
}
function wi(e) {
    return e < 1024 ? `${e}B` : `${Math.round(e / 1024)}KB`;
}
function vi(e) {
    return new fi.d({
        truncated: e.truncated,
        truncatedBy: e.truncatedBy ?? "",
        totalLines: e.totalLines,
        outputLines: e.outputLines,
        outputBytes: e.outputBytes,
        maxLines: e.maxLines,
        maxBytes: e.maxBytes,
        firstLineExceedsLimit: e.firstLineExceedsLimit ?? !1,
        lastLinePartial: e.lastLinePartial ?? !1
    });
}
function _i(e, t) {
    const r = t?.maxLines ?? 2e3, n = t?.maxBytes ?? gi, s = e.split("\n"), o = s.length;
    if (yi(s[0] ?? "") > n) return {
        content: "",
        truncation: vi({
            truncated: !0,
            truncatedBy: "bytes",
            totalLines: o,
            outputLines: 0,
            outputBytes: 0,
            maxLines: r,
            maxBytes: n,
            firstLineExceedsLimit: !0
        })
    };
    const i = [];
    let a, c = 0;
    for(let e = 0; e < s.length; e++){
        if (i.length >= r) {
            a = "lines";
            break;
        }
        const t = s[e], o = i.length > 0 ? 1 : 0, l = yi(t) + o;
        if (c + l > n) {
            a = "bytes";
            break;
        }
        i.push(t), c += l;
    }
    return {
        content: i.join("\n"),
        truncation: vi({
            truncated: void 0 !== a,
            truncatedBy: a,
            totalLines: o,
            outputLines: i.length,
            outputBytes: c,
            maxLines: r,
            maxBytes: n
        })
    };
}
function bi(e) {
    return e.length <= 500 ? {
        text: e,
        wasTruncated: !1
    } : {
        text: `${e.slice(0, 500)}... [truncated]`,
        wasTruncated: !0
    };
}
var Si = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, ki = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
async function xi(e) {
    const { content: t, truncation: r } = function(e, t) {
        const r = t?.maxLines ?? 2e3, n = t?.maxBytes ?? gi, s = e.split("\n"), o = s.length, i = [];
        let a, c = 0, l = !1;
        for(let e = s.length - 1; e >= 0; e--){
            if (i.length >= r) {
                a = "lines";
                break;
            }
            const t = s[e], o = i.length > 0 ? 1 : 0, u = yi(t) + o;
            if (c + u > n) {
                if (a = "bytes", 0 === i.length) {
                    const e = Buffer.from(t, "utf8");
                    i.unshift(e.subarray(Math.max(0, e.length - n)).toString("utf8")), c = yi(i[0]), l = !0;
                }
                break;
            }
            i.unshift(t), c += u;
        }
        return {
            content: i.join("\n"),
            truncation: vi({
                truncated: void 0 !== a,
                truncatedBy: a,
                totalLines: o,
                outputLines: i.length,
                outputBytes: c,
                maxLines: r,
                maxBytes: n,
                lastLinePartial: l
            })
        };
    }(e || "(no output)");
    if (!r.truncated) return {
        output: t
    };
    const o = await (0, n.mkdtemp)((0, s.join)((0, ge.tmpdir)(), "pi-bash-")), i = (0, s.join)(o, "output.log");
    await (0, n.writeFile)(i, e, "utf8");
    const a = r.totalLines - r.outputLines + 1, c = r.totalLines;
    return {
        output: `${t}\n\n${r.lastLinePartial ? `[Showing last ${wi(r.outputBytes)} of line ${c} (${wi(gi)} limit). Full output: ${i}]` : `[Showing lines ${a}-${c} of ${r.totalLines}. Full output: ${i}]`}`,
        fullOutputPath: i,
        truncation: r
    };
}
class Ei {
    constructor(e){
        this.shellExecutor = e;
    }
    async execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = Si(n, (0, C.VI)(e.withName("LocalPiBashExecutor.execute")), !1), o = await this.shellExecutor.execute(s.ctx, function(e, t) {
                const r = void 0 !== e.timeout && e.timeout > 0 ? Math.round(1e3 * e.timeout) : 2147483647, n = e.command.trim().split(/\s+/)[0] ?? "";
                return new A.a({
                    command: e.command,
                    timeout: r,
                    toolCallId: t?.execId ?? "",
                    fileOutputThresholdBytes: BigInt(0),
                    parsingResult: new A.HO({
                        parsingFailed: !1,
                        executableCommands: [
                            {
                                name: n,
                                fullText: e.command,
                                args: []
                            }
                        ]
                    })
                });
            }(t, r), r);
            switch(o.result.case){
                case "success":
                    {
                        const e = await xi(`${o.result.value.stdout}${o.result.value.stderr}`);
                        return new hi.AH({
                            result: {
                                case: "success",
                                value: new hi.cV(e)
                            }
                        });
                    }
                case "failure":
                    {
                        const e = await xi(`${o.result.value.stdout}${o.result.value.stderr}`);
                        return new hi.AH({
                            result: {
                                case: "success",
                                value: new hi.cV({
                                    ...e,
                                    output: `${e.output}\n\nCommand exited with code ${o.result.value.exitCode}`
                                })
                            }
                        });
                    }
                case "timeout":
                    return this.error(`Command timed out after ${Math.round(o.result.value.timeoutMs / 1e3)} seconds`);
                case "rejected":
                    return this.error(o.result.value.reason || "Command aborted");
                case "permissionDenied":
                case "spawnError":
                    return this.error(o.result.value.error);
                default:
                    return this.error("Command failed");
            }
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            ki(n);
        }
    }
    error(e) {
        return new hi.AH({
            result: {
                case: "error",
                value: new hi.bD({
                    error: e
                })
            }
        });
    }
}
var Ii = require("./module-98837.js"), Ti = require("./module-19950.js");
function Ci(e) {
    switch(e.type){
        case "cursorIgnore":
            return "Path is blocked by cursorignore";
        case "adminBlock":
            return `Blocked by ${e.source}`;
        case "adminCommandDenylist":
            return he(e.pattern);
        case "userRejected":
            return e.reason ?? "User rejected the operation";
        case "permissionsConfig":
            return e.isReadonly ? "Blocked by readonly permissions configuration" : "Blocked by permissions configuration";
        case "cursorFiles":
            return "Path is blocked because it is a Cursor internal file";
        case "unsafeResolution":
            return e.message;
        case "needsApproval":
            return e.approvalReason;
    }
}
var Pi = require("./module-75261.js");
function Ai(e) {
    return e.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}
function Ri(e) {
    return e.normalize("NFKC").replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/\u00a0/g, " ").split("\n").map((e)=>e.trimEnd()).join("\n");
}
function Mi(e, t) {
    if (0 === t.length) return 0;
    let r = 0, n = e.indexOf(t);
    for(; -1 !== n;)r++, n = e.indexOf(t, n + t.length);
    return r;
}
function Ji(e, t) {
    const r = e.split("\n"), n = t.split("\n"), s = Math.max(r.length, n.length);
    for(let e = 0; e < s; e++)if (r[e] !== n[e]) return e + 1;
}
function Oi(e, t, r) {
    if (0 === r.length) throw new Error("edits must contain at least one replacement.");
    const { bom: n, text: s } = 65279 === (o = t).charCodeAt(0) ? {
        bom: o[0],
        text: o.slice(1)
    } : {
        bom: "",
        text: o
    };
    var o;
    const i = function(e) {
        return e.includes("\r\n") ? "\r\n" : "\n";
    }(s), a = Ai(s), { matches: c, matchedContent: l } = function(e, t) {
        const r = [];
        let n = !1;
        for (const s of t){
            if (0 === s.oldText.length) throw new Error("oldText must not be empty.");
            const t = Ai(s.oldText), o = Mi(e, t);
            if (1 !== o) {
                if (o > 1) throw new Error("oldText must be unique in the file.");
                n = !0;
                break;
            }
            r.push({
                index: e.indexOf(t),
                length: t.length,
                replacement: Ai(s.newText)
            });
        }
        if (!n) return {
            matches: r,
            matchedContent: e
        };
        const s = Ri(e), o = [];
        for (const e of t){
            const t = Ri(Ai(e.oldText)), r = Mi(s, t);
            if (0 === r) throw new Error("oldText was not found in the file.");
            if (r > 1) throw new Error("oldText must be unique in the file.");
            o.push({
                index: s.indexOf(t),
                length: t.length,
                replacement: Ri(Ai(e.newText))
            });
        }
        return {
            matches: o,
            matchedContent: s
        };
    }(a, r), u = function(e, t) {
        const r = [
            ...t
        ].sort((e, t)=>e.index - t.index);
        for(let e = 1; e < r.length; e++){
            const t = r[e - 1];
            if (r[e].index < t.index + t.length) throw new Error("edits must not overlap.");
        }
        let n = e;
        for (const e of r.reverse())n = n.slice(0, e.index) + e.replacement + n.slice(e.index + e.length);
        return n;
    }(l, c);
    if (u === a) throw new Error("edits did not change the file.");
    const d = n + function(e, t) {
        return "\n" === t ? e : e.replace(/\n/g, "\r\n");
    }(u, i), p = (0, Pi.ss)(e, e, a, u, "", "", {
        context: 4
    });
    return {
        newContent: d,
        diff: p,
        patch: p,
        firstChangedLine: Ji(a, u)
    };
}
const Bi = new Map;
async function Di(e, t) {
    const r = await async function(e) {
        try {
            return await (0, n.realpath)(e);
        } catch  {
            return e;
        }
    }(e), s = Bi.get(r) ?? Promise.resolve();
    let o;
    const i = new Promise((e)=>{
        o = e;
    }), a = s.then(()=>i);
    Bi.set(r, a), await s;
    try {
        return await t();
    } finally{
        o(), Bi.get(r) === a && Bi.delete(r);
    }
}
function qi(e, t) {
    let r = e.trim().replace(/\u00a0/g, " ");
    return r.startsWith("@") && (r = r.slice(1)), r.startsWith("file://") && (r = (0, zn.fileURLToPath)(r)), ("~" === r || r.startsWith("~/")) && (r = (0, s.join)((0, ge.homedir)(), r.slice(2))), (0, s.normalize)((0, s.isAbsolute)(r) ? r : (0, s.resolve)(t ?? process.cwd(), r));
}
function Ni(e, t) {
    const r = qi(e, t);
    if ((0, I.existsSync)(r)) return r;
    for (const e of function(e) {
        const t = (0, s.dirname)(e), r = e.slice(t.length + 1), n = new Set;
        return n.add(e), n.add((0, s.join)(t, r.normalize("NFD"))), n.add((0, s.join)(t, r.replace(/'/g, "’"))), n.add((0, s.join)(t, r.replace(/ /g, " "))), n.add((0, s.join)(t, r.replace(/'/g, "’").normalize("NFD"))), [
            ...n
        ];
    }(r))if ((0, I.existsSync)(e)) return e;
    return r;
}
var Fi = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Ui = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class Li {
    constructor(e, t, r){
        this.permissionsService = e, this.writeExecutor = t, this.workspacePath = r;
    }
    async execute(e, t, r) {
        const s = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = Fi(s, (0, C.VI)(e.withName("LocalPiEditExecutor.execute")), !1), i = qi(t.path, this.workspacePath);
            return Di(i, async ()=>{
                const e = await this.permissionsService.shouldBlockRead(i);
                if (e) return this.error(`Read blocked: ${Ci(e)}`);
                try {
                    if ((await (0, n.stat)(i)).isDirectory()) return this.error(`Path is a directory: ${i}`);
                    const e = (await (0, n.readFile)(i)).toString("utf8"), s = Oi(t.path, e, t.edits), a = await this.writeExecutor.execute(o.ctx, new Ti.hY({
                        path: i,
                        fileText: s.newContent,
                        toolCallId: r?.execId ?? ""
                    }), r);
                    switch(a.result.case){
                        case "success":
                            return new Ii.u7({
                                result: {
                                    case: "success",
                                    value: new Ii.uL({
                                        output: `Successfully replaced ${t.edits.length} block(s) in ${t.path}.`,
                                        diff: s.diff,
                                        patch: s.patch,
                                        firstChangedLine: s.firstChangedLine
                                    })
                                }
                            });
                        case "rejected":
                            return new Ii.u7({
                                result: {
                                    case: "rejected",
                                    value: new Ii.pE({
                                        reason: a.result.value.reason
                                    })
                                }
                            });
                        default:
                            return this.error(this.writeErrorMessage(a.result.value, t.path));
                    }
                } catch (e) {
                    return this.error(e instanceof Error ? e.message : "Unknown edit error");
                }
            });
        } catch (e) {
            s.error = e, s.hasError = !0;
        } finally{
            Ui(s);
        }
    }
    writeErrorMessage(e, t) {
        if (null != e && "object" == typeof e && "error" in e) {
            const t = e.error;
            if ("string" == typeof t) return t;
        }
        return `Failed to edit ${t}`;
    }
    error(e) {
        return new Ii.u7({
            result: {
                case: "error",
                value: new Ii.Nd({
                    error: e
                })
            }
        });
    }
}
var $i = require("./module-83426.js"), ji = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Gi = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function zi(e) {
    return e.split(s.sep).join("/");
}
class Wi {
    constructor(e, t){
        this.permissionsService = e, this.workspacePath = t;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            ji(r, (0, C.VI)(e.withName("LocalPiFindExecutor.execute")), !1);
            const o = qi(t.path || ".", this.workspacePath), i = await this.permissionsService.shouldBlockRead(o);
            if (i) return this.error(`Find blocked: ${Ci(i)}`);
            try {
                if (!(await (0, n.stat)(o)).isDirectory()) return this.error(`Not a directory: ${o}`);
                const e = Math.max(1, t.limit ?? 1e3), r = await async function(e, t, r) {
                    const o = [];
                    return await async function e(i) {
                        if (o.length >= t) return;
                        const a = await (0, n.readdir)(i, {
                            withFileTypes: !0
                        });
                        for (const n of a){
                            if (o.length >= t) return;
                            if (".git" === n.name || "node_modules" === n.name) continue;
                            const a = (0, s.join)(i, n.name);
                            await r(a) && (o.push(a + (n.isDirectory() ? s.sep : "")), n.isDirectory() && await e(a));
                        }
                    }(e), o;
                }(o, e, async (e)=>!await this.permissionsService.shouldBlockRead(e)), i = t.pattern.includes("/") && !t.pattern.startsWith("**/") ? `**/${t.pattern}` : t.pattern, a = r.map((e)=>({
                        raw: e,
                        relative: zi((0, s.relative)(o, e))
                    })).filter(({ relative: e })=>(0, Rt.xF)(e, i, {
                        dot: !0
                    }));
                if (0 === a.length) return this.success("No files found matching pattern");
                const c = _i(a.map((e)=>e.relative).join("\n"), {
                    maxLines: Number.MAX_SAFE_INTEGER
                }), l = r.length >= e ? e : void 0, u = [];
                return void 0 !== l && u.push(`${e} results limit reached. Use limit=${2 * e} for more, or refine pattern`), c.truncation.truncated && u.push(`${wi(gi)} limit reached`), this.success(u.length > 0 ? `${c.content}\n\n[${u.join(". ")}]` : c.content, {
                    resultLimitReached: l,
                    truncation: c.truncation.truncated ? c.truncation : void 0
                });
            } catch (e) {
                return this.error(e instanceof Error ? e.message : "Unknown find error");
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Gi(r);
        }
    }
    success(e, t) {
        return new $i.bT({
            result: {
                case: "success",
                value: new $i.x9({
                    output: e,
                    truncation: t?.truncation,
                    resultLimitReached: t?.resultLimitReached
                })
            }
        });
    }
    error(e) {
        return new $i.bT({
            result: {
                case: "error",
                value: new $i.Uy({
                    error: e
                })
            }
        });
    }
}
const Hi = require("node:readline");
var Ki = require("./module-71125.js"), Vi = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Yi = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const Qi = un.spawn;
class Xi {
    constructor(e, t){
        this.permissionsService = e, this.workspacePath = t;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Vi(r, (0, C.VI)(e.withName("LocalPiGrepExecutor.execute")), !1);
            const s = qi(t.path || ".", this.workspacePath), o = await this.permissionsService.shouldBlockRead(s);
            if (o) return this.error(`Search blocked: ${Ci(o)}`);
            try {
                const e = (await (0, n.stat)(s)).isDirectory(), r = [
                    "--json",
                    "--line-number",
                    "--color=never",
                    "--hidden"
                ];
                t.ignoreCase && r.push("--ignore-case"), t.literal && r.push("--fixed-strings"), void 0 !== t.glob && r.push("--glob", t.glob), r.push("--", t.pattern, s);
                const o = (0, dn.D9)(Qi, (0, R.Ko)(), r, {
                    stdio: [
                        "ignore",
                        "pipe",
                        "pipe"
                    ]
                }), i = [];
                let a = "", c = !1;
                const l = Math.max(1, t.limit ?? 100), u = (0, Hi.createInterface)({
                    input: o.stdout
                });
                o.stderr.on("data", (e)=>{
                    a += e.toString();
                }), u.on("line", (e)=>{
                    if (i.length >= l || 0 === e.trim().length) return;
                    const t = JSON.parse(e);
                    if ("match" !== t.type) return;
                    const r = t.data?.path?.text, n = t.data?.line_number;
                    void 0 !== r && void 0 !== n && (i.push({
                        filePath: r,
                        lineNumber: n,
                        lineText: t.data?.lines?.text?.replace(/\n$/, "")
                    }), i.length >= l && (c = !0, o.kill()));
                });
                const d = await new Promise((e, t)=>{
                    o.on("error", t), o.on("close", e);
                });
                if (u.close(), !c && 0 !== d && 1 !== d) return this.error(a.trim() || `ripgrep exited with code ${d}`);
                if (0 === i.length) return this.success("No matches found");
                const p = [];
                for (const e of i)await this.permissionsService.shouldBlockRead(e.filePath) || p.push(e);
                if (0 === p.length) return this.success("No matches found");
                const { output: m, linesTruncated: h } = await this.formatMatches(p, s, e, Math.max(0, t.context ?? 0)), f = _i(m, {
                    maxLines: Number.MAX_SAFE_INTEGER
                }), g = [];
                return c && g.push(`${l} matches limit reached. Use limit=${2 * l} for more, or refine pattern`), f.truncation.truncated && g.push(`${wi(gi)} limit reached`), h && g.push("Some lines truncated to 500 chars. Use read tool to see full lines"), this.success(g.length > 0 ? `${f.content}\n\n[${g.join(". ")}]` : f.content, {
                    matchLimitReached: c ? l : void 0,
                    linesTruncated: h,
                    truncation: f.truncation.truncated ? f.truncation : void 0
                });
            } catch (e) {
                return this.error(e instanceof Error ? e.message : "Unknown grep error");
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Yi(r);
        }
    }
    async formatMatches(e, t, r, o) {
        const i = [];
        let a = !1;
        for (const c of e){
            const e = r ? (0, s.relative)(t, c.filePath) : (0, s.basename)(c.filePath);
            if (0 === o && void 0 !== c.lineText) {
                const t = bi(c.lineText);
                a = a || t.wasTruncated, i.push(`${e}:${c.lineNumber}: ${t.text}`);
                continue;
            }
            const l = (await (0, n.readFile)(c.filePath, "utf8")).replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n"), u = Math.max(1, c.lineNumber - o), d = Math.min(l.length, c.lineNumber + o);
            for(let t = u; t <= d; t++){
                const r = bi(l[t - 1] ?? "");
                a = a || r.wasTruncated, i.push(t === c.lineNumber ? `${e}:${t}: ${r.text}` : `${e}-${t}- ${r.text}`);
            }
        }
        return {
            output: i.join("\n"),
            linesTruncated: a
        };
    }
    success(e, t) {
        return new Ki.mr({
            result: {
                case: "success",
                value: new Ki.oC({
                    output: e,
                    truncation: t?.truncation,
                    matchLimitReached: t?.matchLimitReached,
                    linesTruncated: t?.linesTruncated ?? !1
                })
            }
        });
    }
    error(e) {
        return new Ki.mr({
            result: {
                case: "error",
                value: new Ki.hP({
                    error: e
                })
            }
        });
    }
}
var Zi = require("./module-53996.js"), ea = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, ta = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class ra {
    constructor(e, t){
        this.permissionsService = e, this.workspacePath = t;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            ea(r, (0, C.VI)(e.withName("LocalPiLsExecutor.execute")), !1);
            const o = qi(t.path || ".", this.workspacePath), i = await this.permissionsService.shouldBlockRead(o);
            if (i) return this.error(`List blocked: ${Ci(i)}`);
            try {
                if (!(await (0, n.stat)(o)).isDirectory()) return this.error(`Not a directory: ${o}`);
                const e = Math.max(1, t.limit ?? 500), r = (await (0, n.readdir)(o)).sort((e, t)=>e.toLowerCase().localeCompare(t.toLowerCase())), i = [];
                let a = !1;
                for (const t of r){
                    if (i.length >= e) {
                        a = !0;
                        break;
                    }
                    try {
                        const e = (0, s.join)(o, t);
                        if (await this.permissionsService.shouldBlockRead(e)) continue;
                        const r = await (0, n.stat)(e);
                        i.push(t + (r.isDirectory() ? "/" : ""));
                    } catch  {}
                }
                if (0 === i.length) return this.success("(empty directory)");
                const c = _i(i.join("\n"), {
                    maxLines: Number.MAX_SAFE_INTEGER
                }), l = [];
                return a && l.push(`${e} entries limit reached. Use limit=${2 * e} for more`), c.truncation.truncated && l.push(`${wi(gi)} limit reached`), this.success(l.length > 0 ? `${c.content}\n\n[${l.join(". ")}]` : c.content, {
                    entryLimitReached: a ? e : void 0,
                    truncation: c.truncation.truncated ? c.truncation : void 0
                });
            } catch (e) {
                return this.error(e instanceof Error ? e.message : "Unknown ls error");
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            ta(r);
        }
    }
    success(e, t) {
        return new Zi.pX({
            result: {
                case: "success",
                value: new Zi.f5({
                    output: e,
                    truncation: t?.truncation,
                    entryLimitReached: t?.entryLimitReached
                })
            }
        });
    }
    error(e) {
        return new Zi.pX({
            result: {
                case: "error",
                value: new Zi.iG({
                    error: e
                })
            }
        });
    }
}
var na = require("./module-39857.js"), sa = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, oa = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class ia {
    constructor(e, t){
        this.permissionsService = e, this.workspacePath = t;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            sa(r, (0, C.VI)(e.withName("LocalPiReadExecutor.execute")), !1);
            const s = Ni(t.path, this.workspacePath), o = await this.permissionsService.shouldBlockRead(s);
            if (o) return this.error(`Read blocked: ${Ci(o)}`);
            try {
                if ((await (0, n.stat)(s)).isDirectory()) return this.error(`Path is a directory: ${s}`);
                const e = (await (0, n.readFile)(s)).toString("utf8").split("\n"), r = void 0 !== t.offset ? Math.max(0, t.offset - 1) : 0;
                if (r >= e.length) return this.error(`Offset ${t.offset} is beyond end of file (${e.length} lines total)`);
                const o = void 0 !== t.limit ? e.slice(r, r + t.limit).join("\n") : e.slice(r).join("\n"), { content: i, truncation: a } = _i(o), c = r + 1;
                let l = i;
                if (a.firstLineExceedsLimit) {
                    l = `[Line ${c} is ${wi(Buffer.byteLength(e[r] ?? "", "utf8"))}, exceeds ${wi(gi)} limit. Use bash: sed -n '${c}p' ${t.path} | head -c 51200]`;
                } else if (a.truncated) {
                    const t = c + a.outputLines - 1;
                    l += `\n\n[Showing lines ${c}-${t} of ${e.length}. Use offset=${t + 1} to continue.]`;
                } else if (void 0 !== t.limit && r + t.limit < e.length) {
                    const n = r + t.limit + 1;
                    l += `\n\n[${e.length - (r + t.limit)} more lines in file. Use offset=${n} to continue.]`;
                }
                return new na.Q({
                    result: {
                        case: "success",
                        value: new na.yP({
                            output: l,
                            truncation: a.truncated ? a : void 0
                        })
                    }
                });
            } catch (e) {
                return this.error(e instanceof Error ? e.message : "Unknown read error");
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            oa(r);
        }
    }
    error(e) {
        return new na.Q({
            result: {
                case: "error",
                value: new na.tB({
                    error: e
                })
            }
        });
    }
}
var aa = require("./module-43464.js"), ca = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, la = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class ua {
    constructor(e, t){
        this.writeExecutor = e, this.workspacePath = t;
    }
    async execute(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const s = ca(n, (0, C.VI)(e.withName("LocalPiWriteExecutor.execute")), !1), o = qi(t.path, this.workspacePath);
            return Di(o, async ()=>{
                const e = await this.writeExecutor.execute(s.ctx, new Ti.hY({
                    path: o,
                    fileText: t.content,
                    toolCallId: r?.execId ?? ""
                }), r);
                switch(e.result.case){
                    case "success":
                        return new aa.hO({
                            result: {
                                case: "success",
                                value: new aa.vu({
                                    output: `Successfully wrote ${t.content.length} bytes to ${t.path}`
                                })
                            }
                        });
                    case "rejected":
                        return new aa.hO({
                            result: {
                                case: "rejected",
                                value: new aa.Ye({
                                    reason: e.result.value.reason
                                })
                            }
                        });
                    case "permissionDenied":
                    case "noSpace":
                    case "error":
                        return new aa.hO({
                            result: {
                                case: "error",
                                value: new aa.OD({
                                    error: "error" in e.result.value ? e.result.value.error : `Failed to write ${t.path}`
                                })
                            }
                        });
                    default:
                        return new aa.hO({
                            result: {
                                case: "error",
                                value: new aa.OD({
                                    error: `Failed to write ${t.path}`
                                })
                            }
                        });
                }
            });
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            la(n);
        }
    }
}
var da = require("./module-88701.js");
function pa(e) {
    if (void 0 !== e) return {
        journalEpoch: e.journalEpoch,
        seq: Number(e.seq),
        lastEventId: e.lastEventId
    };
}
class ma {
    constructor(e){
        this.drainer = e;
    }
    async execute(e, t) {
        try {
            void 0 !== t.includeQuotaNotices && this.drainer.setIncludeQuotaNoticesOverride(t.includeQuotaNotices);
            const e = await this.drainer.drain({
                cursor: pa(t.cursor),
                advance: !1 !== t.advance
            });
            return new da.Ev({
                result: {
                    case: "success",
                    value: new da.iS({
                        events: e.events.map((e)=>new da.RZ({
                                v: e.v,
                                eventId: e.event_id,
                                journalEpoch: e.journal_epoch,
                                seq: BigInt(e.seq),
                                tsMs: BigInt(e.ts_ms),
                                kind: e.kind,
                                storeId: e.store_id,
                                originalRelPath: e.original_rel_path,
                                conflictRelPath: e.conflict_rel_path,
                                originalAbsPath: e.original_abs_path,
                                conflictAbsPath: e.conflict_abs_path,
                                preservedBytes: void 0 === e.preserved_bytes ? void 0 : BigInt(e.preserved_bytes),
                                scopeKind: e.scope_kind,
                                limitBytes: void 0 === e.limit_bytes ? void 0 : BigInt(e.limit_bytes),
                                usageBytes: void 0 === e.usage_bytes ? void 0 : BigInt(e.usage_bytes)
                            })),
                        nextCursor: (r = e.nextCursor, new da.LK({
                            journalEpoch: r.journalEpoch,
                            seq: BigInt(r.seq),
                            lastEventId: r.lastEventId
                        })),
                        gap: e.gap
                    })
                }
            });
        } catch (e) {
            return new da.Ev({
                result: {
                    case: "error",
                    value: new da.h6({
                        error: e instanceof Error ? e.message : String(e)
                    })
                }
            });
        }
        var r;
    }
}
class ha {
    constructor(e){
        this.shellStdinWriter = e;
    }
    async execute(e, t) {
        const r = t.shellId;
        try {
            await this.shellStdinWriter(r, t.chars);
        } catch (e) {
            return new P.nt({
                result: {
                    case: "error",
                    value: new P.Gv({
                        error: `Failed to write to shell ${r} stdin: ${e instanceof Error ? e.message : "Unknown error"}`
                    })
                }
            });
        }
        return new P.nt({
            result: {
                case: "success",
                value: new P.tR({
                    shellId: r,
                    terminalFileLengthBeforeInputWritten: 0
                })
            }
        });
    }
}
var fa = require("./module-91434.js");
class ga {
    constructor(e){
        this.source = e, this.pastElements = [], this.closed = !1, this.forks = new Set, this.consume();
    }
    async consume() {
        try {
            for await (const e of this.source){
                this.pastElements.push(e);
                const t = [];
                for (const r of this.forks)t.push(r.write(e).catch(()=>{}));
                await Promise.allSettled(t);
            }
        } catch (e) {
            this.error = e instanceof Error ? e : new Error(String(e));
        } finally{
            this.closed = !0;
            for (const e of this.forks)this.error ? e.throw(this.error) : e.close();
            this.forks.clear();
        }
    }
    fork() {
        if (this.closed) {
            const e = this.pastElements, t = this.error;
            return async function*() {
                for (const t of e)yield t;
                if (t) throw t;
            }();
        }
        const e = (0, fa.Jt)(), t = this.pastElements.slice();
        this.forks.add(e);
        const r = this;
        return async function*() {
            for (const e of t)yield e;
            try {
                for await (const t of e)yield t;
            } finally{
                r.forks.delete(e);
            }
        }();
    }
}
function ya(e, t) {
    return `${e}:${(0, qt.createHash)("sha256").update(t.toBinary()).digest("hex")}`;
}
function wa(e, t) {
    const r = new x({
        max: t?.max ?? 10,
        ttl: t?.ttl
    });
    return {
        async execute (t, n, s) {
            if (!s?.execId) return e.execute(t, n, s);
            const o = ya(s.execId, n), i = r.get(o);
            if (void 0 !== i) return i;
            const a = await e.execute(t, n, s);
            return r.set(o, a), a;
        }
    };
}
var va = require("./module-91448.js"), _a = require("./module-26885.js");
class ba {
    constructor(e, t){
        this.getCanvasDiagnostics = e, this.beginCanvasSave = t;
    }
    async execute(e, t) {
        let r = ()=>{};
        const n = new Promise((e)=>{
            r = e;
        });
        let s;
        if (void 0 === this.beginCanvasSave) s = Promise.resolve(void 0);
        else try {
            s = this.beginCanvasSave(t.path, {
                typecheckOutcome: n
            }).catch(()=>{});
        } catch  {
            s = Promise.resolve(void 0);
        }
        try {
            const e = await this.getCanvasDiagnostics(t.path);
            return void 0 === e ? (r("unavailable"), Sa(ka(t.path, "diagnostics unavailable"), await s)) : (r(e.some((e)=>1 === e.severity) ? "failed" : "passed"), Sa(new va.GL({
                result: {
                    case: "success",
                    value: new va.uX({
                        path: t.path,
                        diagnostics: e.map(xa)
                    })
                }
            }), await s));
        } catch (e) {
            return r("unavailable"), Sa(ka(t.path, e instanceof Error ? e.message : String(e)), await s);
        }
    }
}
function Sa(e, t) {
    return void 0 === t || (e.saveState = t.saveState, e.canvasId = t.canvasId, e.title = t.title, e.saveDetail = t.saveDetail), e;
}
function ka(e, t) {
    return new va.GL({
        result: {
            case: "error",
            value: new va.HW({
                path: e,
                error: t
            })
        }
    });
}
function xa(e) {
    return new _a.oQ({
        severity: Ea(e.severity),
        range: new qs.Q6({
            start: new qs.yX({
                line: e.range.start.line + 1,
                column: e.range.start.character + 1
            }),
            end: new qs.yX({
                line: e.range.end.line + 1,
                column: e.range.end.character + 1
            })
        }),
        message: e.message,
        source: "ts",
        code: e.code ?? ""
    });
}
function Ea(e) {
    switch(e){
        case 1:
            return _a.h_.ERROR;
        case 2:
            return _a.h_.WARNING;
        case 3:
            return _a.h_.INFORMATION;
        case 4:
            return _a.h_.HINT;
        default:
            return _a.h_.UNSPECIFIED;
    }
}
var Ia = require("./module-81001.js"), Ta = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Ca = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class Pa {
    constructor(e, t){
        this.workspacePath = e, this.diagnosticsProvider = t;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Ta(r, (0, C.VI)(e.withName("LocalDiagnosticsExecutor.execute")), !1);
            let s;
            [e, s] = e.withTimeoutAndCancel(1e4);
            try {
                const r = (0, O.o1)(t.path, this.workspacePath);
                try {
                    const e = await (0, n.stat)(r);
                    if (!e.isFile() && !e.isDirectory()) return new _a.Ek({
                        result: {
                            case: "fileNotFound",
                            value: new _a.Mu({
                                path: t.path
                            })
                        }
                    });
                } catch (e) {
                    if ("ENOENT" === e.code) return new _a.Ek({
                        result: {
                            case: "fileNotFound",
                            value: new _a.Mu({
                                path: t.path
                            })
                        }
                    });
                    if ("EACCES" === e.code) return new _a.Ek({
                        result: {
                            case: "permissionDenied",
                            value: new _a.RP({
                                path: t.path
                            })
                        }
                    });
                    throw e;
                }
                const s = (0, O.o1)(r, this.workspacePath), o = new Ia.q(s);
                await this.diagnosticsProvider.open(e, o);
                const i = (await this.diagnosticsProvider.getDiagnostics(e, o)).map((e)=>this.convertDiagnostic(e));
                return new _a.Ek({
                    result: {
                        case: "success",
                        value: new _a.a1({
                            path: t.path,
                            diagnostics: i,
                            totalDiagnostics: i.length
                        })
                    }
                });
            } catch (r) {
                return e.canceled ? new _a.Ek({
                    result: {
                        case: "error",
                        value: new _a.Ho({
                            path: t.path,
                            error: "Request timed out after 10 seconds"
                        })
                    }
                }) : new _a.Ek({
                    result: {
                        case: "error",
                        value: new _a.Ho({
                            path: t.path,
                            error: r instanceof Error ? r.message : String(r)
                        })
                    }
                });
            } finally{
                s();
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Ca(r);
        }
    }
    convertDiagnostic(e) {
        const t = e.message, r = "string" == typeof t ? t : t && "object" == typeof t && "value" in t && "string" == typeof t.value ? t.value : "";
        return new _a.oQ({
            severity: this.convertSeverity(e.severity),
            range: e.range ? new qs.Q6({
                start: new qs.yX({
                    line: e.range.start.line,
                    column: e.range.start.character
                }),
                end: new qs.yX({
                    line: e.range.end.line,
                    column: e.range.end.character
                })
            }) : void 0,
            message: r,
            source: e.source,
            code: e.code ? String(e.code) : void 0
        });
    }
    convertSeverity(e) {
        switch(e){
            case 1:
                return _a.h_.ERROR;
            case 2:
                return _a.h_.WARNING;
            case 3:
                return _a.h_.INFORMATION;
            case 4:
                return _a.h_.HINT;
            default:
                return _a.h_.UNSPECIFIED;
        }
    }
}
var Aa = require("./module-66058.js");
async function Ra(e) {
    const { repoRoot: t, filePaths: r, getContent: n } = e, s = new Map;
    if (0 === r.length) return s;
    const o = await async function(e, t) {
        const r = new Map;
        if (0 === t.length) return r;
        try {
            const n = await new Promise((r, n)=>{
                const s = (0, un.spawn)("git", [
                    "check-attr",
                    "linguist-generated",
                    "--stdin"
                ], {
                    cwd: e
                });
                let o = "";
                s.stdout.on("data", (e)=>{
                    o += e.toString();
                }), s.stdin.write(`${t.join("\n")}\n`), s.stdin.end(), s.on("close", (e)=>{
                    r(o);
                }), s.on("error", (e)=>{
                    n(e);
                });
            });
            for (const e of n.trim().split("\n")){
                const t = e.match(/^(.+): linguist-generated: (.+)$/);
                if (t) {
                    const e = t[1], n = t[2];
                    "true" === n || "set" === n ? r.set(e, !0) : "false" !== n && "unset" !== n || r.set(e, !1);
                }
            }
        } catch  {}
        return r;
    }(t, r);
    return await Promise.all(r.map(async (e)=>{
        const t = o.get(e);
        if (!0 !== t) if (!1 !== t) if (Ma(e)) s.set(e, {
            isGenerated: !0,
            source: "path-heuristic"
        });
        else {
            if (n) {
                const t = await n(e);
                if (void 0 !== t && Ja(e, t)) return void s.set(e, {
                    isGenerated: !0,
                    source: "content-heuristic"
                });
            }
            s.set(e, {
                isGenerated: !1,
                source: "none"
            });
        }
        else s.set(e, {
            isGenerated: !1,
            source: "gitattributes"
        });
        else s.set(e, {
            isGenerated: !0,
            source: "gitattributes"
        });
    })), s;
}
function Ma(e) {
    return new Oa(e).isGeneratedByPath();
}
function Ja(e, t) {
    return new Oa(e, ()=>t).isGeneratedByContent();
}
class Oa {
    constructor(e, t){
        this.name = e, this.extname = s.extname(e).toLowerCase(), this.getContent = t;
    }
    get lines() {
        if (void 0 === this.cachedLines) {
            const e = this.getContent?.();
            this.cachedLines = e ? e.split("\n") : [];
        }
        return this.cachedLines;
    }
    get data() {
        return this.getContent?.();
    }
    isGeneratedByPath() {
        return this.xcodeFile() || this.intellijFile() || this.cocoapods() || this.carthageBuild() || this.generatedGraphqlRelay() || this.generatedNetDesignerFile() || this.generatedNetSpecflowFeatureFile() || this.composerLock() || this.cargoLock() || this.cargoOrig() || this.denoLock() || this.flakeLock() || this.bazelLock() || this.nodeModules() || this.goVendor() || this.goLock() || this.packageResolved() || this.poetryLock() || this.pdmLock() || this.uvLock() || this.pixiLock() || this.esyLock() || this.npmShrinkwrapOrPackageLock() || this.pnpmLock() || this.bunLock() || this.terraformLock() || this.generatedYarnPlugnplay() || this.godeps() || this.generatedByZephir() || this.htmlcov() || this.gradleWrapper() || this.mavenWrapper() || this.pipenvLock() || this.generatedPascalTlb() || this.generatedSqlxQuery() || this.sourceMapByName();
    }
    isGeneratedByContent() {
        return !!this.getContent && (this.minifiedFiles() || this.hasSourceMap() || this.sourceMap() || this.compiledCoffeescript() || this.generatedParser() || this.generatedNetDocfile() || this.generatedPostscript() || this.compiledCythonFile() || this.generatedGo() || this.generatedProtocolBufferFromGo() || this.generatedProtocolBuffer() || this.generatedJavascriptProtocolBuffer() || this.generatedTypescriptProtocolBuffer() || this.generatedApacheThrift() || this.generatedJniHeader() || this.vcrCassette() || this.generatedAntlr() || this.generatedModule() || this.generatedUnity3dMeta() || this.generatedRacc() || this.generatedJflex() || this.generatedGrammarkit() || this.generatedRoxygen2() || this.generatedHtml() || this.generatedJison() || this.generatedGrpcCpp() || this.generatedDart() || this.generatedPerlPpportHeader() || this.generatedGamemakerstudio() || this.generatedGimp() || this.generatedVisualstudio6() || this.generatedHaxe() || this.generatedJooq() || this.generatedSorbetRbi() || this.generatedMysqlViewDefinitionFormat());
    }
    xcodeFile() {
        return [
            ".nib",
            ".xcworkspacedata",
            ".xcuserstate"
        ].includes(this.extname);
    }
    intellijFile() {
        return /(?:^|\/)\.idea\//.test(this.name);
    }
    cocoapods() {
        return /(^Pods|\/Pods)\//.test(this.name);
    }
    carthageBuild() {
        return /(^|\/)Carthage\/Build\//.test(this.name);
    }
    generatedGraphqlRelay() {
        return /__generated__\//.test(this.name);
    }
    generatedNetDesignerFile() {
        return /\.designer\.(cs|vb)$/i.test(this.name);
    }
    generatedNetSpecflowFeatureFile() {
        return /\.feature\.cs$/i.test(this.name);
    }
    composerLock() {
        return /composer\.lock/.test(this.name);
    }
    cargoLock() {
        return /Cargo\.lock/.test(this.name);
    }
    cargoOrig() {
        return /Cargo\.toml\.orig/.test(this.name);
    }
    denoLock() {
        return /deno\.lock/.test(this.name);
    }
    flakeLock() {
        return /(^|\/)flake\.lock$/.test(this.name);
    }
    bazelLock() {
        return /(^|\/)MODULE\.bazel\.lock$/.test(this.name);
    }
    nodeModules() {
        return /node_modules\//.test(this.name);
    }
    goVendor() {
        return /vendor\/((?!-)[-0-9A-Za-z]+(?<!-)\.)+(com|edu|gov|in|me|net|org|fm|io)/.test(this.name);
    }
    goLock() {
        return /(Gopkg|glide)\.lock/.test(this.name);
    }
    packageResolved() {
        return /Package\.resolved/.test(this.name);
    }
    poetryLock() {
        return /poetry\.lock/.test(this.name);
    }
    pdmLock() {
        return /pdm\.lock/.test(this.name);
    }
    uvLock() {
        return /uv\.lock/.test(this.name);
    }
    pixiLock() {
        return /pixi\.lock/.test(this.name);
    }
    esyLock() {
        return /(^|\/)(\w+\.)?esy\.lock$/.test(this.name);
    }
    npmShrinkwrapOrPackageLock() {
        return /npm-shrinkwrap\.json/.test(this.name) || /package-lock\.json/.test(this.name);
    }
    pnpmLock() {
        return /pnpm-lock\.yaml/.test(this.name);
    }
    bunLock() {
        return /(?:^|\/)bun\.lockb?$/.test(this.name);
    }
    terraformLock() {
        return /(?:^|\/)\.terraform\.lock\.hcl$/.test(this.name);
    }
    generatedYarnPlugnplay() {
        return /(^|\/)\.pnp\..*$/.test(this.name);
    }
    godeps() {
        return /Godeps\//.test(this.name);
    }
    generatedByZephir() {
        return /\.zep\.(c|h|php)$/.test(this.name);
    }
    htmlcov() {
        return /(?:^|\/)htmlcov\//.test(this.name);
    }
    gradleWrapper() {
        return /(?:^|\/)gradlew(?:\.bat)?$/i.test(this.name);
    }
    mavenWrapper() {
        return /(?:^|\/)mvnw(?:\.cmd)?$/i.test(this.name);
    }
    pipenvLock() {
        return /Pipfile\.lock/.test(this.name);
    }
    generatedPascalTlb() {
        return /_tlb\.pas$/i.test(this.name);
    }
    generatedSqlxQuery() {
        return /(?:^|\/)\.sqlx\/query-[a-f\d]{64}\.json$/.test(this.name);
    }
    sourceMapByName() {
        return /\.(css|js)\.map$/i.test(this.name);
    }
    maybeMinified() {
        return [
            ".js",
            ".css"
        ].includes(this.extname);
    }
    minifiedFiles() {
        if (!this.maybeMinified() || 0 === this.lines.length) return !1;
        return this.lines.reduce((e, t)=>e + t.length, 0) / this.lines.length > 110;
    }
    hasSourceMap() {
        if (!this.maybeMinified()) return !1;
        return this.lines.slice(-2).some((e)=>/^\/[*/][#@] source(?:Mapping)?URL|sourceURL=/.test(e));
    }
    sourceMap() {
        if (".map" !== this.extname) return !1;
        if (/\.(css|js)\.map$/i.test(this.name)) return !0;
        const e = this.lines[0] || "";
        return /^{"version":\d+,/.test(e) || /^\/\*\* Begin line maps\. \*\*\/{/.test(e);
    }
    compiledCoffeescript() {
        if (".js" !== this.extname) return !1;
        const e = this.lines[0] || "";
        if (/^\/\/ Generated by /.test(e)) return !0;
        if ("(function() {" === e && "}).call(this);" === (this.lines[this.lines.length - 2] || "") && "" === (this.lines[this.lines.length - 1] || "")) {
            let e = 0;
            for (const t of this.lines)if (/var /.test(t)) {
                const r = t.match(/_fn|_i|_len|_ref|_results/g);
                e += 1 * (r?.length || 0);
                const n = t.match(/__bind|__extends|__hasProp|__indexOf|__slice/g);
                e += 3 * (n?.length || 0);
            }
            return e >= 3;
        }
        return !1;
    }
    generatedNetDocfile() {
        return ".xml" === this.extname && !(this.lines.length <= 3) && (this.lines[1] || "").includes("<doc>") && (this.lines[2] || "").includes("<assembly>") && (this.lines[this.lines.length - 2] || "").includes("</doc>");
    }
    generatedParser() {
        if (".js" !== this.extname) return !1;
        const e = this.lines.slice(0, 5).join("");
        return /^(?:[^/]|\/[^*])*\/\*(?:[^*]|\*[^/])*Generated by PEG\.js/.test(e);
    }
    generatedPostscript() {
        if (![
            ".ps",
            ".eps",
            ".pfa"
        ].includes(this.extname)) return !1;
        const e = this.data;
        if (!e) return !1;
        if (/^\s*(?:currentfile eexec\s+|\/sfnts\s+\[\s<)/.test(e)) return !0;
        const t = this.lines.slice(0, 10).find((e)=>/^%%Creator: /.test(e));
        return !!t && (!(!/[0-9]|draw|mpage|ImageMagick|inkscape|MATLAB/.test(t) && !/PCBNEW|pnmtops|\(Unknown\)|Serif Affinity|Filterimage -tops/.test(t)) || !!t.includes("EAGLE") && this.lines.slice(0, 5).some((e)=>/^%%Title: EAGLE Drawing /.test(e)));
    }
    generatedGo() {
        return ".go" === this.extname && !(this.lines.length <= 1) && this.lines.slice(0, 40).some((e)=>/^\/\/ Code generated .*/.test(e));
    }
    generatedProtocolBufferFromGo() {
        return ".proto" === this.extname && !(this.lines.length <= 1) && this.lines.slice(0, 20).some((e)=>e.includes("This file was autogenerated by go-to-protobuf"));
    }
    generatedProtocolBuffer() {
        return !![
            ".py",
            ".java",
            ".h",
            ".cc",
            ".cpp",
            ".m",
            ".rb",
            ".php"
        ].includes(this.extname) && !(this.lines.length <= 1) && this.lines.slice(0, 3).some((e)=>e.includes("Generated by the protocol buffer compiler.  DO NOT EDIT!"));
    }
    generatedJavascriptProtocolBuffer() {
        return ".js" === this.extname && !(this.lines.length <= 6) && (this.lines[5] || "").includes("GENERATED CODE -- DO NOT EDIT!");
    }
    generatedTypescriptProtocolBuffer() {
        return ".ts" === this.extname && !(this.lines.length <= 4) && (this.lines[0] || "").includes("Code generated by protoc-gen-ts_proto. DO NOT EDIT.");
    }
    generatedApacheThrift() {
        return !![
            ".rb",
            ".py",
            ".go",
            ".js",
            ".m",
            ".java",
            ".h",
            ".cc",
            ".cpp",
            ".php"
        ].includes(this.extname) && this.lines.slice(0, 6).some((e)=>e.includes("Autogenerated by Thrift Compiler"));
    }
    generatedJniHeader() {
        return ".h" === this.extname && !(this.lines.length <= 2) && (this.lines[0] || "").includes("/* DO NOT EDIT THIS FILE - it is machine generated */") && (this.lines[1] || "").includes("#include <jni.h>");
    }
    vcrCassette() {
        return ".yml" === this.extname && !(this.lines.length <= 2) && (this.lines[this.lines.length - 2] || "").includes("recorded_with: VCR");
    }
    generatedAntlr() {
        return ".g" === this.extname && !(this.lines.length <= 2) && (this.lines[1] || "").includes("generated by Xtest");
    }
    compiledCythonFile() {
        return !![
            ".c",
            ".cpp"
        ].includes(this.extname) && !(this.lines.length <= 1) && (this.lines[0] || "").includes("Generated by Cython");
    }
    generatedModule() {
        if (".mod" !== this.extname) return !1;
        if (this.lines.length <= 1) return !1;
        const e = this.lines[0] || "";
        return e.includes("PCBNEW-LibModule-V") || e.includes("GFORTRAN module version '");
    }
    generatedUnity3dMeta() {
        return ".meta" === this.extname && !(this.lines.length <= 1) && (this.lines[0] || "").includes("fileFormatVersion: ");
    }
    generatedRacc() {
        return ".rb" === this.extname && !(this.lines.length <= 2) && (this.lines[2] || "").startsWith("# This file is automatically generated by Racc");
    }
    generatedJflex() {
        return ".java" === this.extname && !(this.lines.length <= 1) && (this.lines[0] || "").startsWith("/* The following code was generated by JFlex ");
    }
    generatedGrammarkit() {
        return ".java" === this.extname && !(this.lines.length <= 1) && (this.lines[0] || "").startsWith("// This is a generated file. Not intended for manual editing.");
    }
    generatedRoxygen2() {
        return ".rd" === this.extname && !(this.lines.length <= 1) && (this.lines[0] || "").includes("% Generated by roxygen2: do not edit by hand");
    }
    generatedHtml() {
        if (![
            ".html",
            ".htm",
            ".xhtml"
        ].includes(this.extname)) return !1;
        if (this.lines.length <= 1) return !1;
        if (this.lines.slice(0, 2).some((e)=>/<!-- Generated by pkgdown: do not edit by hand -->/.test(e))) return !0;
        if (this.lines.length > 2 && (this.lines[2] || "").startsWith("\x3c!-- This is an automatically generated file.")) return !0;
        if (this.lines.slice(0, 31).some((e)=>/<!--\s+Generated by Doxygen\s+[.0-9]+\s*-->/i.test(e))) return !0;
        const e = this.lines.slice(0, 31).join(" ").match(/<meta(\s+[^>]+)>/gi);
        if (!e) return !1;
        for (const t of e){
            const e = this.extractHtmlMeta(t);
            if ("generator" === e.name?.toLowerCase() && (e.content || e.value)) {
                const t = e.content || e.value || "";
                if (/^(org\s+mode|j?latex2html|groff|makeinfo|texi2html|ronn)\b/i.test(t)) return !0;
            }
        }
        return !1;
    }
    extractHtmlMeta(e) {
        const t = {}, r = e.matchAll(/(?<=^|\s)(name|content|value)\s*=\s*("[^"]+"|'[^']+'|[^\s"']+)/gi);
        for (const e of r){
            const r = e[1].toLowerCase();
            let n = e[2];
            (n.startsWith('"') && n.endsWith('"') || n.startsWith("'") && n.endsWith("'")) && (n = n.slice(1, -1)), t[r] = n;
        }
        return t;
    }
    generatedJison() {
        if (".js" !== this.extname) return !1;
        if (this.lines.length <= 1) return !1;
        const e = this.lines[0] || "";
        return e.startsWith("/* parser generated by jison ") || e.startsWith("/* generated by jison-lex ");
    }
    generatedGrpcCpp() {
        return !![
            ".cpp",
            ".hpp",
            ".h",
            ".cc"
        ].includes(this.extname) && !(this.lines.length <= 1) && (this.lines[0] || "").startsWith("// Generated by the gRPC");
    }
    generatedDart() {
        return ".dart" === this.extname && !(this.lines.length <= 1) && this.lines.slice(0, 3).some((e)=>/generated code\W{2,3}do not modify/i.test(e));
    }
    generatedPerlPpportHeader() {
        return !!/ppport\.h$/.test(this.name) && !(this.lines.length <= 10) && (this.lines[8] || "").includes("Automatically created by Devel::PPPort");
    }
    generatedGamemakerstudio() {
        if (![
            ".yy",
            ".yyp"
        ].includes(this.extname)) return !1;
        if (this.lines.length <= 3) return !1;
        const e = this.lines.slice(0, 3).join("");
        return /^\s*[{[]/.test(e) || /^\d\.\d\.\d.+\|\{/.test(this.lines[0] || "");
    }
    generatedGimp() {
        if (![
            ".c",
            ".h"
        ].includes(this.extname)) return !1;
        if (0 === this.lines.length) return !1;
        const e = this.lines[0] || "";
        return /^\/\* GIMP [a-zA-Z0-9- ]+ C-Source image dump \(.+?\.c\) \*\//.test(e) || /^\/\* {2}GIMP header image file format \([a-zA-Z0-9- ]+\): .+?\.h {2}\*\//.test(e);
    }
    generatedVisualstudio6() {
        return ".dsp" === this.extname && this.lines.slice(0, 3).some((e)=>e.includes("# Microsoft Developer Studio Generated Build File"));
    }
    generatedHaxe() {
        return !![
            ".js",
            ".py",
            ".lua",
            ".cpp",
            ".h",
            ".java",
            ".cs",
            ".php"
        ].includes(this.extname) && this.lines.slice(0, 3).some((e)=>e.includes("Generated by Haxe"));
    }
    generatedJooq() {
        return ".java" === this.extname && this.lines.slice(0, 2).some((e)=>e.includes("This file is generated by jOOQ."));
    }
    generatedSorbetRbi() {
        return ".rbi" === this.extname && !(this.lines.length < 5) && /^# typed:/.test(this.lines[0] || "") && (this.lines[2] || "").includes("DO NOT EDIT MANUALLY") && /^# Please (run|instead update this file by running) `bin\/tapioca/.test(this.lines[4] || "");
    }
    generatedMysqlViewDefinitionFormat() {
        return ".frm" === this.extname && (this.lines[0] || "").includes("TYPE=VIEW");
    }
}
var Ba = require("./module-67918.js");
const Da = (e)=>{
    if (!e) return [];
    if ("string" != typeof e || e.match(/^\s+$/)) return [];
    const t = e.split("\n");
    if (0 === t.length) return [];
    const r = [];
    let n = null, s = null, o = 0, i = 0, a = null;
    const c = (e)=>{
        const [t, s] = Fa(e) ?? [];
        n = {
            chunks: [],
            deletions: 0,
            additions: 0,
            from: t,
            to: s
        }, r.push(n);
    }, l = ()=>{
        n && !n.chunks.length || c();
    }, u = (e)=>+(e || 1), d = (e)=>{
        if (!s) return;
        const [t] = s.changes.slice(-1);
        s.changes.push({
            type: t.type,
            [t.type]: !0,
            ln1: t.ln1,
            ln2: t.ln2,
            ln: t.ln,
            content: e
        });
    }, p = [
        [
            /^diff\s/,
            c
        ],
        [
            /^new file mode (\d+)$/,
            (e, t)=>{
                l(), n.new = !0, n.newMode = t[1], n.from = "/dev/null";
            }
        ],
        [
            /^deleted file mode (\d+)$/,
            (e, t)=>{
                l(), n.deleted = !0, n.oldMode = t[1], n.to = "/dev/null";
            }
        ],
        [
            /^old mode (\d+)$/,
            (e, t)=>{
                l(), n.oldMode = t[1];
            }
        ],
        [
            /^new mode (\d+)$/,
            (e, t)=>{
                l(), n.newMode = t[1];
            }
        ],
        [
            /^index\s[\da-zA-Z]+\.\.[\da-zA-Z]+(\s(\d+))?$/,
            (e, t)=>{
                l(), n.index = e.split(" ").slice(1), t[1] && (n.oldMode = n.newMode = t[1].trim());
            }
        ],
        [
            /^---\s/,
            (e)=>{
                l(), n.from = La(e);
            }
        ],
        [
            /^\+\+\+\s/,
            (e)=>{
                l(), n.to = La(e);
            }
        ],
        [
            /^@@\s+-(\d+),?(\d+)?\s+\+(\d+),?(\d+)?\s@@/,
            (e, t)=>{
                n || c(e);
                const [r, l, d, p] = t.slice(1);
                o = +r, i = +d, s = {
                    content: e,
                    changes: [],
                    oldStart: +r,
                    oldLines: u(l),
                    newStart: +d,
                    newLines: u(p)
                }, a = {
                    oldLines: u(l),
                    newLines: u(p)
                }, n.chunks.push(s);
            }
        ],
        [
            /^\\ No newline at end of file$/,
            d
        ]
    ], m = [
        [
            /^\\ No newline at end of file$/,
            d
        ],
        [
            /^-/,
            (e)=>{
                s && (s.changes.push({
                    type: "del",
                    del: !0,
                    ln: o++,
                    content: e
                }), n.deletions++, a.oldLines--);
            }
        ],
        [
            /^\+/,
            (e)=>{
                s && (s.changes.push({
                    type: "add",
                    add: !0,
                    ln: i++,
                    content: e
                }), n.additions++, a.newLines--);
            }
        ],
        [
            /^\s+/,
            (e)=>{
                s?.changes.push({
                    type: "normal",
                    normal: !0,
                    ln1: o++,
                    ln2: i++,
                    content: e
                }), a.oldLines--, a.newLines--;
            }
        ]
    ], h = (e)=>{
        a ? ((e)=>{
            for (const [t, r] of m){
                const n = e.match(t);
                if (n) {
                    r(e, n);
                    break;
                }
            }
            0 === a.oldLines && 0 === a.newLines && (a = null);
        })(e) : ((e)=>{
            for (const [t, r] of p){
                const n = e.match(t);
                if (n) {
                    r(e, n);
                    break;
                }
            }
        })(e);
    };
    for (const e of t)h(e);
    return r;
}, qa = /(a|i|w|c|o|1|2)\/.*(?=["']? ["']?(b|i|w|c|o|1|2)\/)|(b|i|w|c|o|1|2)\/.*$/g, Na = /^(a|b|i|w|c|o|1|2)\//, Fa = (e)=>{
    const t = e?.match(qa);
    return t?.map((e)=>e.replace(Na, "").replace(/("|')$/, ""));
}, Ua = /^\\?['"]|\\?['"]$/g, La = (e)=>{
    let t = $a(e, "-+").trim();
    return t = Ga(t), t.replace(Ua, "").replace(Na, "");
}, $a = (e, t)=>{
    if (e = Wa(e), !t && String.prototype.trimLeft) return e.trimLeft();
    const r = za(t);
    return e.replace(new RegExp(`^${r}+`), "");
}, ja = /\t.*|\d{4}-\d\d-\d\d\s\d\d:\d\d:\d\d(.\d+)?\s(\+|-)\d\d\d\d/, Ga = (e)=>{
    const t = ja.exec(e);
    return t && (e = e.substring(0, t.index).trim()), e;
}, za = (e)=>null == e ? "\\s" : e instanceof RegExp ? e.source : `[${Wa(e).replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")}]`, Wa = (e)=>`${e ?? ""}`, Ha = (0, T.h)("local-git-diff");
async function Ka(e, t, r = {}) {
    const n = await new Promise((n, s)=>{
        const o = (0, Aa.mv)("git", t, {
            cwd: e
        });
        let i = "", a = "";
        o.stdout.on("data", (e)=>{
            i += e.toString();
        }), o.stderr.on("data", (e)=>{
            a += e.toString();
        }), o.on("close", (e)=>{
            0 === e || !0 === r.ignoreErrors ? n(i) : s(new Error(`Git command failed with code ${e}: ${a}`));
        }), o.on("error", (e)=>{
            !0 === r.ignoreErrors ? n(i) : s(e);
        });
    });
    return !0 === r.shouldNotTrimOutput ? n : n.trim();
}
function Va(e) {
    const t = Da(e);
    return new Ba.o$({
        diffs: t.map((e)=>(function(e) {
                const t = new Ba.QP({
                    from: e.from,
                    to: e.to,
                    chunks: e.chunks.map((e)=>new Ba.Ei({
                            content: e.content,
                            lines: e.changes.map((e)=>e.content),
                            oldStart: e.oldStart,
                            oldLines: e.oldLines,
                            newStart: e.newStart,
                            newLines: e.newLines
                        }))
                });
                return t.added = e.additions, t.removed = e.deletions, t;
            })(e)),
        diffType: Ba.Wf.UNSPECIFIED
    });
}
const Ya = [
    "main",
    "master",
    "develop"
];
async function Qa(e, t, r) {
    const o = function(e) {
        switch(e){
            case Ba.ek.NAME_STATUS:
                return Ba.ek.NAME_STATUS;
            case Ba.ek.NAME_STATUS_AND_NUMSTAT:
                return Ba.ek.NAME_STATUS_AND_NUMSTAT;
            case Ba.ek.FILE_DIFFS:
                return Ba.ek.FILE_DIFFS;
            case Ba.ek.DIFFS_WITH_BEFORE_AND_AFTER:
                return Ba.ek.DIFFS_WITH_BEFORE_AND_AFTER;
            default:
                return Ba.ek.FILE_DIFFS;
        }
    }(r.outputFormat), i = await (async ()=>{
        let e = r.baseRef.length > 0 ? r.baseRef : await async function(e) {
            try {
                const t = await Ka(e, [
                    "symbolic-ref",
                    "--short",
                    "refs/remotes/origin/HEAD"
                ]);
                if (t) return t.trim();
            } catch  {}
            for (const t of Ya){
                const r = `origin/${t}`;
                try {
                    return await Ka(e, [
                        "rev-parse",
                        "--verify",
                        r
                    ]), r;
                } catch  {}
            }
            try {
                const t = (await Ka(e, [
                    "branch",
                    "-r"
                ])).split("\n").map((e)=>e.trim()).find((e)=>e.startsWith("origin/"));
                if (t) return t;
            } catch  {}
            try {
                const t = await Ka(e, [
                    "config",
                    "--get",
                    "init.defaultBranch"
                ]);
                if (t) return t.trim();
            } catch  {}
            throw new Error("Could not determine default branch");
        }(t);
        return r.mergeBase && (e = (await Ka(t, [
            "merge-base",
            e,
            r.ref.length > 0 ? r.ref : "HEAD"
        ])).trim()), e;
    })(), a = [
        "diff",
        "--no-color"
    ];
    r.includeSpaceChanges || a.push("--ignore-space-change"), void 0 !== r.unifiedContextLines && a.push(`-U${r.unifiedContextLines}`), a.push(i), r.ref.length > 0 && a.push(r.ref), r.targetPaths.length > 0 && (a.push("--"), a.push(...r.targetPaths));
    const c = await Ka(t, a, {
        shouldNotTrimOutput: !0
    }), l = Va(c);
    let u = [];
    if (r.maxUntrackedFiles > 0) {
        u = await async function(e, t) {
            let r = (await Ka(e, [
                "ls-files",
                "--others",
                "--exclude-standard"
            ])).split("\n").map((e)=>e.trim()).filter((e)=>e.length > 0);
            return r.length > t && (r = r.slice(0, t)), (await Promise.all(r.map(async (t)=>{
                try {
                    return {
                        contents: await n.readFile(s.join(e, t), "utf8"),
                        path: t
                    };
                } catch  {
                    return;
                }
            }))).filter((e)=>void 0 !== e);
        }(t, r.maxUntrackedFiles);
        for (const e of u){
            const r = await Ka(t, [
                "diff",
                "--no-color",
                "--no-index",
                "/dev/null",
                e.path
            ], {
                ignoreErrors: !0,
                shouldNotTrimOutput: !0
            });
            l.diffs.push(...Va(r).diffs);
        }
    }
    if (o !== Ba.ek.FILE_DIFFS) for (const e of l.diffs)e.chunks = [];
    if (o === Ba.ek.DIFFS_WITH_BEFORE_AND_AFTER) {
        const o = r.ref.length > 0 ? r.ref : "HEAD";
        await Promise.all(l.diffs.map(async (a)=>{
            try {
                if ("/dev/null" !== a.from) try {
                    a.beforeFileContents = await Ka(t, [
                        "show",
                        `${i}:${a.from}`
                    ], {
                        shouldNotTrimOutput: !0
                    });
                } catch  {
                    a.beforeFileContents = "";
                }
                else a.beforeFileContents = "";
                if ("/dev/null" !== a.to) if (r.ref.length > 0) try {
                    a.afterFileContents = await Ka(t, [
                        "show",
                        `${o}:${a.to}`
                    ], {
                        shouldNotTrimOutput: !0
                    });
                } catch  {
                    a.afterFileContents = "";
                }
                else try {
                    a.afterFileContents = await n.readFile(s.join(t, a.to), "utf8");
                } catch  {
                    try {
                        a.afterFileContents = await Ka(t, [
                            "show",
                            `${o}:${a.to}`
                        ], {
                            shouldNotTrimOutput: !0
                        });
                    } catch  {
                        a.afterFileContents = "";
                    }
                }
                else a.afterFileContents = "";
            } catch (t) {
                Ha.error(e, "Error fetching file contents for diff", t);
            }
        }));
    }
    const d = new Map;
    for (const e of l.diffs){
        const t = "/dev/null" !== e.to ? e.to : e.from;
        t && d.set(t, e);
    }
    const p = [
        ...d.keys()
    ], m = r.ref.length > 0 ? r.ref : "HEAD";
    try {
        const e = await Ra({
            repoRoot: t,
            filePaths: p,
            getContent: async (e)=>{
                const r = d.get(e);
                if (r) {
                    if (void 0 !== r.afterFileContents) return r.afterFileContents;
                    try {
                        if (r.to && "/dev/null" !== r.to) return await Ka(t, [
                            "show",
                            `${m}:${r.to}`
                        ], {
                            shouldNotTrimOutput: !0
                        });
                    } catch  {}
                }
            }
        });
        for (const [t, r] of e){
            const e = d.get(t);
            e && (e.isGenerated = r.isGenerated);
        }
    } catch (t) {
        Ha.warn(e, "Generated-file detection failed; continuing without it", {
            error: t instanceof Error ? t.message : String(t)
        });
    }
    const h = !0 === r.computePatchId ? await async function(e, t) {
        if (0 === t.length) return;
        return (await new Promise((r, n)=>{
            const s = (0, Aa.mv)("git", [
                "patch-id",
                "--stable"
            ], {
                cwd: e
            });
            let o = "", i = "";
            s.stdout.on("data", (e)=>{
                o += e.toString();
            }), s.stderr.on("data", (e)=>{
                i += e.toString();
            }), s.on("close", (e)=>{
                0 === e ? r(o) : n(new Error(`git patch-id failed with code ${e}: ${i}`));
            }), s.on("error", n), s.stdin.end(t);
        })).trim().split(/\s+/)[0] || void 0;
    }(t, function(...e) {
        const t = e.filter((e)=>e.length > 0);
        return 0 === t.length ? "" : `${t.join("\n")}\n`;
    }(c, function(e) {
        const t = [];
        for (const r of e){
            const e = r.contents.split("\n"), n = e.length;
            t.push(`diff --git a/${r.path} b/${r.path}`), t.push("--- /dev/null"), t.push(`+++ b/${r.path}`), t.push(`@@ -0,0 +1${1 === n ? "" : `,${n}`} @@`), t.push(...e.map((e)=>`+${e}`));
        }
        return t.join("\n");
    }(u))) : void 0, f = !0 === r.returnHeadSha ? (await Ka(t, [
        "rev-parse",
        "HEAD"
    ])).trim() : void 0, g = !0 === r.returnHeadSha ? (await Ka(t, [
        "status",
        "--porcelain=v1",
        "--untracked-files=all"
    ])).trim().length > 0 : void 0, y = new Ba.df({
        diff: l,
        submoduleDiffs: [],
        patchId: h,
        headSha: f,
        hasUncommittedChanges: g
    }), w = r.maxResponseBytes ?? 0;
    if (w > 0) {
        const e = y.toBinary().byteLength;
        if (e > w) throw new Error(`GetDiffResponseTooLarge: ${e} bytes exceeds the ${w} byte limit`);
    }
    return y;
}
class Xa {
    async execute(e, t) {
        return Qa(e, t.cwd, t);
    }
}
var Za = require("./module-88107.js");
class ec {
    constructor(e){
        this.permissionsService = e;
    }
    async execute(e, t) {
        const r = await this.permissionsService.isMcpFullyAllowlisted(e, {
            providerIdentifier: t.providerIdentifier,
            toolName: t.toolName,
            annotationsJson: t.annotationsJson
        });
        return new Za.M({
            allowlisted: r
        });
    }
}
var tc = require("./module-20941.js"), rc = require("./module-88623.js"), nc = require("./module-59158.js");
const sc = BigInt(0), oc = BigInt(8), ic = BigInt(16), ac = BigInt(65535);
function cc(e) {
    const t = e.trim().toLowerCase();
    return t.startsWith("[") && t.endsWith("]") ? t.slice(1, -1) : t;
}
function lc(e) {
    const t = e.trim();
    if (0 === t.length) return;
    const r = t.includes("://") ? t : `https://${t}`;
    try {
        return new URL(r);
    } catch  {
        return;
    }
}
function uc(e) {
    const t = e.split(".");
    if (4 !== t.length) return;
    let r = sc;
    for (const e of t){
        if (!/^\d{1,3}$/.test(e)) return;
        const t = Number(e);
        if (!Number.isInteger(t) || t < 0 || t > 255) return;
        r = r << oc | BigInt(t);
    }
    return {
        version: 4,
        value: r
    };
}
function dc(e) {
    if (0 === e.length) return [];
    const t = [], r = e.split(":");
    for(let e = 0; e < r.length; e++){
        const n = r[e];
        if (0 === n.length) return;
        if (n.includes(".")) {
            if (e !== r.length - 1) return;
            const s = uc(n);
            if (!s) return;
            t.push(Number(s.value >> ic & ac)), t.push(Number(s.value & ac));
            continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n)) return;
        t.push(Number.parseInt(n, 16));
    }
    return t;
}
function pc(e) {
    return uc(e) ?? function(e) {
        const t = cc(e);
        if (0 === t.length || t.includes(":::")) return;
        const r = t.indexOf("::");
        if (-1 === r) {
            const e = dc(t);
            if (!e || 8 !== e.length) return;
            return {
                version: 6,
                value: e.reduce((e, t)=>e << ic | BigInt(t), sc)
            };
        }
        if (-1 !== t.indexOf("::", r + 1)) return;
        const n = t.slice(0, r), s = t.slice(r + 2), o = dc(n), i = dc(s);
        if (!o || !i) return;
        const a = o.length + i.length;
        if (a > 7) return;
        return {
            version: 6,
            value: [
                ...o,
                ...new Array(8 - a).fill(0),
                ...i
            ].reduce((e, t)=>e << ic | BigInt(t), sc)
        };
    }(e);
}
function mc(e, t) {
    const r = cc(e), n = cc(t);
    if ("*" === n) return !0;
    if (n.includes("/")) return function(e, t) {
        const r = t.lastIndexOf("/");
        if (r <= 0 || r === t.length - 1) return !1;
        const n = pc(t.slice(0, r)), s = pc(e);
        if (!n || !s || n.version !== s.version) return !1;
        const o = Number(t.slice(r + 1)), i = 4 === n.version ? 32 : 128;
        if (!Number.isInteger(o) || o < 0 || o > i) return !1;
        const a = BigInt(i - o);
        return s.value >> a === n.value >> a;
    }(r, n);
    if (n.startsWith("*.")) {
        const e = n.slice(2);
        return r === e || r.endsWith(`.${e}`);
    }
    return r === n;
}
function hc(e, t) {
    const r = lc(e);
    return !!r && function(e, t) {
        return t.some((t)=>mc(e, t));
    }(r.hostname, t);
}
var fc = require("./module-50623.js");
const gc = new Set([
    "ash",
    "bash",
    "csh",
    "dash",
    "fish",
    "ksh",
    "powershell",
    "pwsh",
    "sh",
    "tcsh",
    "zsh",
    "cmd"
]);
function yc(e) {
    return e.trim().split(/\s+/).filter(Boolean);
}
function wc(e) {
    const t = function(e) {
        const t = e.trim(), r = t[0];
        if ('"' === r || "'" === r) {
            const e = t.indexOf(r, 1);
            if (-1 !== e) return t.slice(0, e + 1);
        }
        return yc(t)[0];
    }(e);
    if (!t) return !1;
    const r = t.replace(/^["']|["']$/g, "").replaceAll("\\", "/").split("/"), n = (r[r.length - 1] ?? "").replace(/\.exe$/i, "").toLowerCase();
    return gc.has(n);
}
function vc(e, t) {
    if (e.length > t.length) return !1;
    for(let r = 0; r < e.length; r++)if (e[r] !== t[r]) return !1;
    return !0;
}
function _c(e, t) {
    return e.commandName.localeCompare(t.commandName);
}
function bc(e) {
    const t = new Set, r = [];
    for (const n of e){
        const e = n.trim();
        if (!e || t.has(e)) continue;
        t.add(e);
        const s = yc(e), o = s[0] ?? e;
        r.push({
            id: e,
            label: e,
            value: e,
            commandName: o,
            tokenCount: s.length,
            indentLevel: 0,
            tokens: s,
            ancestorIds: [
                e
            ]
        });
    }
    r.sort(_c);
    for(let e = 0; e < r.length; e++){
        const t = r[e], n = new Set(t.tokens);
        let s, o = !1;
        for(let i = 0; i < e; i++){
            const e = r[i];
            if (e.commandName !== t.commandName) continue;
            if (e.tokenCount >= t.tokenCount) continue;
            let a = !0;
            for (const t of e.tokens)if (!n.has(t)) {
                a = !1;
                break;
            }
            if (!a) continue;
            const c = vc(e.tokens, t.tokens);
            void 0 !== s ? e.tokenCount > s.tokenCount ? (s = e, o = c) : e.tokenCount === s.tokenCount && c && !o && (s = e, o = !0) : (s = e, o = c);
        }
        void 0 !== s && (t.indentLevel = s.indentLevel + 1, t.ancestorIds = [
            ...s.ancestorIds,
            t.id
        ]);
    }
    const n = r.filter((e)=>!r.some((t)=>t.id !== e.id && t.tokenCount < e.tokenCount && vc(t.tokens, e.tokens))).map((e)=>e.id);
    return {
        options: r,
        defaultSelectedOptionIds: n
    };
}
function Sc(e) {
    return e.split(" ")[0] ?? e;
}
function kc(e, t) {
    return function(e, t) {
        const r = bc(e), n = [
            ...r.defaultSelectedOptionIds
        ];
        if (!t || 0 === t.length) return {
            defaultSelectedOptionIds: n,
            hasClassifierSuggestions: !1
        };
        const s = [], o = new Set;
        for (const e of t){
            const t = r.options.find((t)=>t.id === e);
            if (t) {
                s.push(t.id), o.add(Sc(t.id));
                continue;
            }
            const n = r.options.filter((t)=>t.id.startsWith(`${e} `) || t.id === e), i = r.options.filter((t)=>e.startsWith(`${t.id} `) || e === t.id);
            if (i.length > 0) {
                const e = i.reduce((e, t)=>e.id.length > t.id.length ? e : t);
                s.push(e.id), o.add(Sc(e.id));
            } else if (n.length > 0) {
                const e = n.reduce((e, t)=>e.id.length < t.id.length ? e : t);
                s.push(e.id), o.add(Sc(e.id));
            }
        }
        if (0 === s.length) return {
            defaultSelectedOptionIds: n,
            hasClassifierSuggestions: !1
        };
        const i = n.filter((e)=>!o.has(Sc(e)));
        return {
            defaultSelectedOptionIds: [
                ...new Set([
                    ...i,
                    ...s
                ])
            ],
            hasClassifierSuggestions: !0
        };
    }(e, t).defaultSelectedOptionIds;
}
var xc = require("./module-68503.js"), Ec = require("./module-44016.js");
const Ic = (0, s.join)((0, ge.homedir)(), ".cursor", "projects"), Tc = (0, s.join)((0, ge.homedir)(), ".cursor", "worktrees");
function Cc(e) {
    return (0, Ec.K9)(Ic, e) && e !== Ic;
}
function Pc(e) {
    return (0, Ec.K9)(Tc, e) && e !== Tc;
}
function Ac(e, t) {
    const r = function(e) {
        if (!(0, Ec.K9)(Ic, e)) return;
        if (e === Ic) return;
        const t = (0, s.relative)(Ic, e).split(s.sep).filter(Boolean);
        return t.length >= 2 ? t[1] : void 0;
    }(e);
    return void 0 !== r && t.includes(r);
}
function Rc(e, t, r) {
    return {
        resolvedPath: e,
        originalPath: t,
        resolution: r
    };
}
function Mc(e) {
    switch(e.code){
        case "ENOENT":
            return {
                status: "newFile"
            };
        case "EACCES":
        case "EPERM":
            return {
                status: "permissionDenied",
                errno: e.code
            };
        case "ELOOP":
            return {
                status: "symlinkLoop",
                errno: e.code
            };
        default:
            return {
                status: "unknownError",
                errno: e.code ?? "UNKNOWN",
                message: e.message
            };
    }
}
async function Jc(e, t) {
    const r = (0, O.o1)(e, t);
    try {
        return Rc(await (0, n.realpath)(r), r, {
            status: "resolved"
        });
    } catch (e) {
        const t = e;
        if ("ENOENT" !== t.code) return Rc(r, r, Mc(t));
        try {
            if ((await (0, n.lstat)(r)).isSymbolicLink()) {
                let e = null;
                try {
                    e = await (0, n.readlink)(r);
                } catch  {}
                return Rc(r, r, {
                    status: "danglingSymlink",
                    symlinkTarget: e
                });
            }
            return Rc(r, r, {
                status: "unknownError",
                errno: "ENOENT",
                message: "realpath returned ENOENT but lstat found a non-symlink entry"
            });
        } catch (e) {
            const t = e;
            return "ENOENT" === t.code ? async function(e) {
                let t = (0, s.dirname)(e);
                const r = [
                    (0, s.basename)(e)
                ];
                for(; (0, s.dirname)(t) !== t;){
                    try {
                        const o = await (0, n.realpath)(t);
                        return Rc((0, s.join)(o, ...r), e, {
                            status: "newFile"
                        });
                    } catch (t) {
                        const r = t;
                        if ("ENOENT" !== r.code) return Rc(e, e, Mc(r));
                    }
                    r.unshift((0, s.basename)(t)), t = (0, s.dirname)(t);
                }
                return Rc(e, e, {
                    status: "newFile"
                });
            }(r) : Rc(r, r, Mc(t));
        }
    }
}
function Oc(e) {
    return "resolved" === e.status || "newFile" === e.status;
}
function Bc(e, t) {
    switch(t.status){
        case "resolved":
        case "newFile":
            return "";
        case "danglingSymlink":
            return `Write blocked: \`${e}\` is a dangling symlink${t.symlinkTarget ? ` (target: ${t.symlinkTarget})` : ""}. Cannot verify it does not point to a protected file.`;
        case "permissionDenied":
            return `Write blocked: cannot verify \`${e}\` -- permission denied resolving symlinks (${t.errno}).`;
        case "symlinkLoop":
            return `Write blocked: \`${e}\` has a symlink loop (${t.errno}). Cannot verify target.`;
        case "unknownError":
            return `Write blocked: cannot verify \`${e}\` -- ${t.errno}: ${t.message}.`;
        default:
            return `Write blocked: unknown resolution status for \`${e}\`.`;
    }
}
function Dc({ requestedAbsolutePath: e, realAbsolutePath: t, setting: r, resolvedWorkspaceRoots: n, resolvedAllowFolders: s }) {
    return "workspace" === r.boundary && ![
        ...n,
        ...s
    ].some((e)=>(0, O.BJ)(t, e)) && !(Nc(t, r.allowPaths) || e !== t && Nc(e, r.allowPaths));
}
function qc(e) {
    return e.flatMap((e)=>{
        const t = (0, O.jl)(e.trim());
        return !t.includes("*") && (0, s.isAbsolute)(t) ? [
            (0, s.resolve)(t)
        ] : [];
    });
}
function Nc(e, t) {
    const r = "win32" === process.platform ? O.oL : (e)=>e, n = r(e);
    return t.some((e)=>{
        const t = (0, O.jl)(e.trim());
        return !(!t.includes("*") && (0, s.isAbsolute)(t)) && ce(r(t), n);
    });
}
var Fc = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Uc = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const Lc = (0, T.h)("permissions-service"), $c = (0, cn.Pu)("local_exec.permissions.mcp_allowlist_check.result", {
    description: "Result of MCP allowlist checks at user and team levels per tool call.",
    labelNames: [
        "allowlist_scope",
        "outcome"
    ]
});
function jc(e) {
    return Promise.all(e.map(async (e)=>{
        const t = await Jc(e);
        return Oc(t.resolution) ? t.resolvedPath : (0, O.o1)(e);
    }));
}
function Gc(e, t, r) {
    return `${e} blocked: cannot verify ${t} \`${r}\` while resolving symlinks. This can happen when access is denied or the path contains a symlink loop.`;
}
function zc(e) {
    return [
        ...new Set(e)
    ];
}
function Wc() {
    return {
        fdTargets: new Map([
            [
                0,
                "original-stdin"
            ],
            [
                1,
                "original-stdout"
            ],
            [
                2,
                "original-stderr"
            ]
        ])
    };
}
function Hc(e) {
    return "original-stdout" === e || "original-stderr" === e || "dev-null" === e || "workspace-file" === e || "tmp-file" === e;
}
function Kc({ basePath: e, targetPath: t, pathModule: r }) {
    const n = r.resolve(e), s = r.resolve(t), o = r.relative(n, s);
    return "" === o || ".." !== o && !o.startsWith(`..${r.sep}`) && !r.isAbsolute(o);
}
function Vc(e) {
    return ">" === e || ">>" === e || ">|" === e || "&>" === e || "&>>" === e;
}
function Yc(e) {
    return "<" !== e.operator && "<&" !== e.operator;
}
function Qc(e) {
    if (void 0 === e || e.trim() !== e) return;
    const t = Number(e);
    return Number.isInteger(t) && t >= 0 ? t : void 0;
}
function Xc(e) {
    return "<<" === e.operator && "heredoc_redirect" === e.targetNodeType && 1 === e.destinationFds.length && 0 === Number(e.destinationFds[0]) && void 0 !== e.targetText;
}
async function Zc({ targetText: e, workingDirectory: t, rootDirectories: r, allowTmpRedirects: n, resolvePathForPermissions: s, pathModule: o, tempPathOptions: i }) {
    if ("" !== o.parse(e).root && !o.isAbsolute(e)) return;
    const a = await s(e, t);
    if (Oc(a.resolution)) {
        for (const e of r){
            const t = await s(e);
            if (Oc(t.resolution) && Kc({
                basePath: t.resolvedPath,
                targetPath: a.resolvedPath,
                pathModule: o
            })) return "workspace-file";
        }
        return n && ll(a.resolvedPath, i) ? "tmp-file" : void 0;
    }
}
function el(e) {
    return zc(e.map((e)=>e.trim()).filter(Boolean));
}
function tl(e) {
    const t = e.name.trim();
    if (!t) return [];
    const r = e.arguments.map((e)=>e.trim()).filter(Boolean), n = r.length > 0 ? `${t} ${r.join(" ")}` : t, s = e.subcommandTokens.map((e)=>e.trim()).filter(Boolean);
    if (0 === s.length) return [
        n
    ];
    const o = `${t} ${s.join(" ")}`;
    return o === n ? [
        n
    ] : [
        n,
        o
    ];
}
function rl(e, t) {
    const r = t.trim();
    return !!r && e.some((e)=>e === r || e.startsWith(`${r} `));
}
function nl(e) {
    const t = e.name.trim(), r = e.arguments.map((e)=>e.trim()).filter(Boolean).map((e)=>new A.r6({
            type: "word",
            value: e
        }));
    return new A.Pv({
        name: t,
        args: r,
        fullText: [
            t,
            ...r.map((e)=>e.value)
        ].join(" ").trim()
    });
}
function sl(e, t = {}) {
    return {
        type: e,
        ...t
    };
}
function ol(e) {
    const t = [];
    for (const r of e){
        const e = r.match(/^\s*Read\s*\((.*)\)\s*$/);
        e && t.push((e[1] ?? "").trim());
    }
    return t;
}
function il(e, t) {
    if ("workspace" === e && void 0 !== t) return t;
}
const al = {
    workspace: 0,
    system: 1
};
function cl(e) {
    const t = e.match(/^\s*(Shell|Bash)\s*\((.*)\)\s*$/);
    if (!t) return null;
    const r = t[1], n = t[2]?.trim() ?? "", s = n.indexOf(":");
    return -1 !== s ? {
        shellType: r,
        fullPattern: n,
        commandPattern: n.slice(0, s).trim(),
        argsPattern: n.slice(s + 1).trim()
    } : {
        shellType: r,
        fullPattern: n,
        commandPattern: n,
        argsPattern: null
    };
}
function ll(e, { platform: t, env: r, pathModule: n, homeDirectory: s }) {
    if ("win32" === t) {
        const t = r.TEMP ?? r.TMP;
        if (t) {
            const r = n.normalize(t).toLowerCase(), s = n.normalize(e).toLowerCase(), o = r.endsWith(n.sep) ? r : r + n.sep;
            return s === r || s.startsWith(o);
        }
        return !1;
    }
    const o = (e)=>{
        const r = n.normalize(e);
        return "darwin" !== t ? r : "/tmp" === r || r.startsWith("/tmp/") || "/var" === r || r.startsWith("/var/") ? `/private${r}` : r;
    }, i = o(e);
    if (void 0 !== s && Kc({
        basePath: o(s),
        targetPath: i,
        pathModule: n
    })) return !1;
    if ("darwin" === t) {
        return [
            "/private/tmp/",
            "/private/var/folders/"
        ].some((e)=>i.startsWith(e));
    }
    return [
        "/tmp/",
        "/private/tmp/",
        "/var/folders/",
        "/private/var/folders/",
        "/var/tmp/"
    ].some((e)=>i.startsWith(e));
}
function ul(e, t) {
    if ("insecure_none" === t.type) return !0;
    if ("insecure_none" === e.type) return !1;
    const r = (0, R.$b)(e.networkPolicy), n = (0, R.$b)(t.networkPolicy);
    if (r && !n) return !1;
    const s = (0, R._B)(e.networkPolicy), o = (0, R._B)(t.networkPolicy);
    if (s && n && !o) return !1;
    if ("workspace_readonly" === e.type && "workspace_readwrite" === t.type) return !0;
    if ("workspace_readwrite" === e.type && "workspace_readonly" === t.type) return !1;
    const i = e.readBoundary ?? "system", a = t.readBoundary ?? "system";
    return !(al[i] > al[a]);
}
class dl {
    constructor(e, t, r, n){
        this.command = e, this.requestedPolicy = t;
        const s = void 0 !== r && ul(t, r);
        this.state = s ? "preapproved" : "approvable";
        const o = [
            e.fullText.trim()
        ].filter(Boolean);
        this.matchForms = n && n.length > 0 ? [
            ...n
        ] : o;
    }
    approveWithPolicy(e) {
        "approvable" !== this.state && "preapproved" !== this.state || !ul(this.requestedPolicy, e) || (this.state = "allowlisted");
    }
    deny() {
        this.state = "denied";
    }
    isRunnable() {
        return "preapproved" === this.state || "allowlisted" === this.state;
    }
}
function pl(e) {
    return e?.type ?? "undefined";
}
const ml = [
    "skills",
    "skills-cursor",
    "rules",
    "plugins"
];
class hl {
    constructor(e, t, r, n, o, i = !1, a){
        this.ignoreService = e, this.pendingDecisionStore = t, this.permissionsProvider = r, this.teamSettingsService = n, this.adminNetworkControlsEnabled = i, this.rootDirectories = Array.isArray(o) ? o : [
            o ?? process.cwd()
        ], this.perUserSandboxConfigPath = a?.perUserSandboxConfigPath ?? (0, s.join)((0, ge.homedir)(), ".cursor", "sandbox.json"), this.mcpAllowlistLog = a?.mcpAllowlistLog;
    }
    async shouldBlockRead(e, t = {}) {
        return this.shouldBlockReadInternal(e, t, !1);
    }
    async shouldBlockFileRead(e, t = {}) {
        return this.shouldBlockReadInternal(e, t, !0);
    }
    async getFileReadBoundaryBlocker() {
        const { perms: e, setting: t } = await this.readControlSetting();
        if ("workspace" !== t.boundary || "unrestricted" === e.approvalMode) return;
        const [r, n] = await Promise.all([
            this.resolveWorkspaceReadRoots(e.userSandboxDataFolderName),
            this.resolvedReadAllowFolders(t.allowPaths)
        ]);
        return async (e, s)=>Dc({
                requestedAbsolutePath: e,
                realAbsolutePath: s,
                setting: t,
                resolvedWorkspaceRoots: r,
                resolvedAllowFolders: n
            });
    }
    async readControlSetting() {
        const [e, t, r] = await Promise.all([
            this.teamSettingsService.isReadControlEnabled?.() ?? !0,
            this.teamSettingsService.getSandboxingControls(),
            this.getPermissions()
        ]);
        return {
            perms: r,
            setting: function(e) {
                if (!e.enabled) return {
                    boundary: "system",
                    allowPaths: [],
                    enforcedByAdmin: !1
                };
                const t = "workspace" === e.admin.boundary, r = t || "workspace" === e.local.boundary ? "workspace" : "system", n = t ? e.admin.allowPaths : [];
                return {
                    boundary: r,
                    allowPaths: t && !1 === e.admin.allowUserOverride ? [
                        ...n
                    ] : [
                        ...new Set([
                            ...n,
                            ...e.local.allowPaths
                        ])
                    ],
                    enforcedByAdmin: t
                };
            }({
                enabled: e,
                admin: {
                    boundary: t.readBoundary,
                    allowPaths: t.readAllowlistPaths ?? [],
                    allowUserOverride: t.allowUserOverrideReadAllowlist
                },
                local: {
                    boundary: r.readBoundary,
                    allowPaths: ol(r.allow)
                }
            })
        };
    }
    resolvedReadAllowFolders(e) {
        return jc([
            ...qc(e),
            ...(0, R.r5)()
        ]);
    }
    async resolveWorkspaceReadRoots(e) {
        const t = (0, s.join)((0, ge.homedir)(), void 0 !== e && e.length > 0 ? e : ".cursor"), r = [
            ...this.rootDirectories.map((e)=>(0, s.join)(t, "projects", (0, xc.r_)(e))),
            ...ml.map((e)=>(0, s.join)(t, e))
        ], n = this.rootDirectories.flatMap((e)=>(0, R.W1)(e) ?? []);
        return jc([
            ...this.rootDirectories,
            ...r,
            ...n
        ]);
    }
    async shouldBlockReadInternal(e, { cursorIgnoreChecked: t = !1 }, r) {
        const n = (0, O.o1)(e), s = await He(n);
        if (null === s) return {
            type: "unsafeResolution",
            message: Gc("Read", "path", n)
        };
        if (await this.ignoreService.isRepoBlocked(s)) return {
            type: "adminBlock",
            source: "Team repo blocklist"
        };
        if (await this.isPathExplicitlyDenied("Read", n)) return {
            type: "permissionsConfig"
        };
        if (!(Cc(s) || Pc(s)) && !t && await this.ignoreService.isCursorIgnored(s)) return {
            type: "cursorIgnore"
        };
        if (r) {
            const e = await this.shouldBlockReadForBoundary({
                realAbsolutePath: s,
                requestedAbsolutePath: n
            });
            if (e) return e;
        }
        return !1;
    }
    async shouldBlockReadForBoundary({ realAbsolutePath: e, requestedAbsolutePath: t }) {
        const { perms: r, setting: n } = await this.readControlSetting();
        if ("workspace" !== n.boundary || "unrestricted" === r.approvalMode) return !1;
        const [s, o] = await Promise.all([
            this.resolveWorkspaceReadRoots(r.userSandboxDataFolderName),
            this.resolvedReadAllowFolders(n.allowPaths)
        ]);
        return !!Dc({
            requestedAbsolutePath: t,
            realAbsolutePath: e,
            setting: n,
            resolvedWorkspaceRoots: s,
            resolvedAllowFolders: o
        }) && {
            type: "needsApproval",
            approvalReason: n.enforcedByAdmin ? "This reads a file outside your workspace and requires approval under your team's read policy." : "This reads a file outside your workspace.",
            approvalDetails: {
                type: "fileRead",
                path: e
            }
        };
    }
    async shouldBlockWrite(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Fc(n, (0, C.VI)(e.withName("InteractivePermissionsService.shouldBlockWrite")), !1).ctx;
            const i = await Jc(t);
            if (!Oc(i.resolution)) return {
                type: "unsafeResolution",
                message: Bc(i.originalPath, i.resolution)
            };
            const a = i.resolvedPath, c = a;
            if (await this.ignoreService.isRepoBlocked(c)) return {
                type: "adminBlock",
                source: "Team repo blocklist"
            };
            if (await this.isPathExplicitlyDenied("Write", a)) return {
                type: "permissionsConfig"
            };
            const l = i.originalPath.split(s.sep).pop()?.toLowerCase() ?? "", u = a.split(s.sep).pop()?.toLowerCase() ?? "";
            if (".cursorignore" === l || ".cursorignore" === u) return {
                type: "permissionsConfig"
            };
            const d = Cc(c), p = Pc(c), m = !d && !p && await this.ignoreService.isCursorIgnored(c);
            if (d || p) ;
            else if (m) return {
                type: "cursorIgnore"
            };
            if (await this.isPathExplicitlyAllowed("Write", a)) return !1;
            if (function(e) {
                const t = e.replace(/\\/g, "/");
                return /(^|\/)\.cursor\/debug(?:-[a-zA-Z0-9-]+)?\.log$/i.test(t);
            }(a)) return !1;
            const h = await this.getPermissions();
            if ("workspace_readonly" === h.userConfiguredPolicy.type) return {
                type: "permissionsConfig",
                isReadonly: !0
            };
            if ("unrestricted" === h.approvalMode) return !1;
            for (const e of this.rootDirectories){
                const t = await Jc(e);
                if (!Oc(t.resolution)) continue;
                const r = t.resolvedPath;
                if ((0, O.BJ)(a, r)) {
                    const e = (0, s.relative)(r, a).split(s.sep).map((e)=>"win32" === process.platform && e.includes(":") ? e.split(":")[0] : e), t = await this.checkCursorFileProtection(e);
                    if (t) return t;
                    break;
                }
            }
            const f = async ()=>{
                let e = !1, t = "";
                try {
                    t = await (0, xe.yR)(a), e = !1;
                } catch  {
                    e = !0;
                }
                let n = "";
                if (e) n = r;
                else {
                    const e = (e)=>e.endsWith("\n") ? e : `${e}\n`, { hunks: s } = (0, Pi.YB)("a", "b", e(t), e(r), "", "", {
                        context: 2
                    });
                    n = s.map((e)=>e.lines.map((e)=>e.length > 0 ? `${e[0]} ${e.slice(1)}` : e).join("\n")).join("\n...\n");
                }
                return {
                    isNewFile: e,
                    diffString: n
                };
            };
            let g, y = !1;
            for (const e of this.rootDirectories){
                const t = await Jc(e);
                if (!Oc(t.resolution)) continue;
                const r = t.resolvedPath;
                if ((0, O.BJ)(a, r)) {
                    y = !0, g = r;
                    break;
                }
            }
            const w = y ? void 0 : function(e) {
                if (!Pc(e)) return;
                const t = (0, s.relative)(Tc, e).split(s.sep).filter(Boolean);
                return 0 !== t.length ? (0, s.join)(Tc, t[0]) : void 0;
            }(a);
            if (!y && void 0 === w) {
                if (function(e) {
                    return ll(e, {
                        platform: process.platform,
                        env: process.env,
                        pathModule: o,
                        homeDirectory: (0, ge.homedir)()
                    });
                }(a)) return !1;
                if (Ac(a, [
                    "assets",
                    "agent-notes",
                    "agent-tools",
                    "swarm-agents"
                ])) return !1;
                const e = `${(0, ge.homedir)()}${s.sep}.cursor${s.sep}`;
                if (a.startsWith(e)) {
                    const e = a.split(s.sep).pop()?.toLowerCase() ?? "";
                    if (e.endsWith(".md") || e.endsWith(".mdc") || ".cursorrules" === e) return !1;
                }
                const { isNewFile: t, diffString: r } = await f();
                return {
                    type: "needsApproval",
                    approvalReason: "Out of workspace",
                    approvalDetails: {
                        type: "fileEdit",
                        isNewFile: t,
                        diffString: r,
                        blockReason: "outOfWorkspace"
                    }
                };
            }
            const v = g ?? w, _ = a;
            let b = (0, s.relative)(v, _).split(s.sep);
            if (b = b.map((e)=>"win32" === process.platform && e.includes(":") ? e.split(":")[0] : e), "win32" === process.platform && b.some((e)=>e.includes("~"))) {
                const { isNewFile: e, diffString: t } = await f();
                return {
                    type: "needsApproval",
                    approvalReason: `Protected config file: ${b[b.length - 1] ?? ""}`,
                    approvalDetails: {
                        type: "fileEdit",
                        isNewFile: e,
                        diffString: t,
                        blockReason: "protectedConfig"
                    }
                };
            }
            if (await (0, R.OK)(a, v)) {
                const e = b[b.length - 1]?.toLowerCase() ?? "", { isNewFile: t, diffString: r } = await f();
                return {
                    type: "needsApproval",
                    approvalReason: `Protected config file: ${e}`,
                    approvalDetails: {
                        type: "fileEdit",
                        isNewFile: t,
                        diffString: r,
                        blockReason: "protectedConfig"
                    }
                };
            }
            const S = await this.checkCursorFileProtection(b);
            if (S) return S;
            if (!0 === h.promptWorkspaceWrites) {
                const { isNewFile: e, diffString: t } = await f();
                return {
                    type: "needsApproval",
                    approvalReason: "Workspace write",
                    approvalDetails: {
                        type: "fileEdit",
                        isNewFile: e,
                        diffString: t,
                        blockReason: "workspaceWrite"
                    }
                };
            }
            return !1;
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Uc(n);
        }
    }
    async shouldEnforceShellInvariantBlocks(e, t, r) {
        const n = await this.getAdminCommandDenylistBlock(e, {
            command: t.command,
            parsingResult: t.parsingResult,
            toolCallId: t.toolCallId
        });
        if (void 0 !== n) return {
            kind: "block",
            reason: n
        };
        const s = await He(t.workingDirectory);
        if (null === s) {
            if (!0 !== t.skipUnsafeWorkingDirectoryBlock) return {
                kind: "block",
                reason: {
                    type: "unsafeResolution",
                    message: Gc("Command", "working directory", t.workingDirectory)
                }
            };
        } else if (await this.ignoreService.isRepoBlocked(s)) return {
            kind: "block",
            reason: {
                type: "adminBlock",
                source: "Team repo blocklist"
            }
        };
        const o = (await this.getPermissions()).userConfiguredPolicy, i = r ?? o;
        return "workspace_readonly" === o.type && "workspace_readonly" !== i.type ? {
            kind: "block",
            reason: {
                type: "permissionsConfig",
                isReadonly: !0
            }
        } : {
            kind: "allow"
        };
    }
    async shouldBlockShellCommand(e, t, r, n) {
        const s = "insecure_none" === n?.type, o = await this.shouldEnforceShellInvariantBlocks(e, {
            workingDirectory: r.workingDirectory,
            command: t,
            parsingResult: r.parsingResult,
            toolCallId: r.toolCallId
        }, n);
        if ("block" === o.kind) return o;
        const i = await this.getPermissions(), a = i.approvalMode, c = "unrestricted" === a, l = i.userConfiguredPolicy, u = !i.dashboardTerminalAllowlistOverriddenByPermissionsFile;
        if (Lc.info(e, "Shell permissions: evaluating shell command", {
            toolCallId: r.toolCallId,
            approvalMode: a,
            userConfiguredPolicyType: pl(l),
            requestedPolicyType: pl(n),
            effectiveRequestedPolicyType: pl(n ?? l),
            smartAllowlistEnabled: !0 === i.smartAllowlistEnabled,
            hasSmartModeApprovalReason: void 0 !== r.smartModeApprovalReason,
            hasSmartModeApprovalRequestId: void 0 !== r.smartModeApprovalRequestId,
            hookForcesPrompt: (0, m.zNu)(r.hookApprovalRequirement),
            classifierClassificationFailed: !0 === r.classifierResult?.classificationFailed,
            classifierCommandCount: r.classifierResult?.commands.length ?? 0,
            parserCommandCount: r.parsingResult.executableCommands.length,
            parsingFailed: r.parsingResult.parsingFailed,
            hasRedirects: r.parsingResult.hasRedirects,
            commandLength: t.length
        }), await this.shouldPromptForEmptyPlainShellAllowlist(t, i)) return Lc.info(e, "Shell permissions: prompting for empty allowlist", {
            toolCallId: r.toolCallId,
            approvalMode: a,
            userConfiguredPolicyType: pl(l),
            requestedPolicyType: pl(n),
            hasSmartModeApprovalReason: void 0 !== r.smartModeApprovalReason,
            hasSmartModeApprovalRequestId: void 0 !== r.smartModeApprovalRequestId
        }), await this.requestApprovalForEmptyShellAllowlist(t, r, n ?? l);
        const d = r.parsingResult.executableCommands, p = r.parsingResult.hasRedirects, h = !0 === r.parsingResult.allRedirectsAreDevNull, f = r.parsingResult.parsingFailed, g = r.classifierResult, y = r.smartModeApprovalReason, w = r.smartModeApprovalRequestId, v = void 0 !== g && !g.classificationFailed && g.commands.length > 0 ? g : void 0, _ = "allowlist" === a && i.smartAllowlistEnabled ? v?.commands : void 0, b = void 0 !== _, S = _ ? _.map(nl) : d, k = void 0 !== _ ? _.map(tl) : S.map((e)=>[
                e.fullText.trim()
            ].filter(Boolean)), x = void 0 !== v ? v.commands.map(tl) : k;
        if (n || (n = i.userConfiguredPolicy), "insecure_none" !== n.type && void 0 === n.skipStatsigDefaults && "insecure_none" !== l.type && (n = {
            ...n,
            skipStatsigDefaults: l.skipStatsigDefaults ?? !0
        }), "insecure_none" !== l.type && (0, R.$b)(l.networkPolicy) && "insecure_none" !== n.type && !(0, R._B)(n.networkPolicy)) {
            const e = l.networkPolicy, t = n.networkPolicy?.allow;
            if (void 0 !== t && t.length > 0 && e) {
                const r = [
                    ...new Set([
                        ...e.allow ?? [],
                        ...t
                    ])
                ];
                n = {
                    ...n,
                    networkPolicy: {
                        ...e,
                        allow: r
                    }
                };
            } else n = {
                ...n,
                networkPolicy: e
            };
        }
        n = function({ requestedPolicy: e, userConfiguredPolicy: t }) {
            if ("insecure_none" === e.type || "insecure_none" === t.type) return e;
            const r = (0, R.XX)(e.readBoundary, t.readBoundary), n = "workspace" === r ? (0, R.wG)(il(e.readBoundary, e.additionalReadPaths), il(t.readBoundary, t.additionalReadPaths)) : void 0;
            return {
                ...e,
                readBoundary: r,
                additionalReadPaths: n
            };
        }({
            requestedPolicy: n,
            userConfiguredPolicy: l
        }), g && Lc.info(e, "Smart allowlist: classifier result received", {
            classificationFailed: g.classificationFailed,
            suggestedSandboxMode: g.suggestedSandboxMode,
            commandCount: g.commands.length,
            suggestedAllowlistEntryCount: g.commands.filter((e)=>e.suggestedAllowlistEntry).length
        });
        let E = !1;
        const I = [], T = [];
        let C = [], P = [], A = [];
        const M = el(i.smartAllowlistDenylist ?? []);
        if (M.length > 0) {
            P = [];
            const t = x.map((e)=>e[0] ?? "");
            for(let e = 0; e < x.length; e++){
                const r = x[e];
                if (!r || 0 === r.length) continue;
                if (M.some((e)=>rl(r, e))) {
                    const r = t[e];
                    r && P.push(r);
                }
            }
            P.length > 0 && (Lc.info(e, "Command blocklist: commands require approval", {
                count: P.length
            }), I.push(`In blocklist: ${P.join(", ")}`));
        }
        if (b && g) {
            const t = k.map((e)=>e[0] ?? ""), r = i.allow.filter((e)=>this.isShellEntry(e));
            Lc.info(e, "Smart allowlist: checking commands against lists", {
                commandCount: t.length,
                allowlistCount: r.length,
                commandBlocklistCount: M.length
            });
            const n = k.map((e)=>r.some((t)=>e.some((e)=>this.matchesShell(t, e)))), s = n.every(Boolean), o = [];
            for(let e = 0; e < g.commands.length; e++){
                if (n[e]) continue;
                const t = g.commands[e];
                t && o.push(t);
            }
            if (C = el(o.flatMap((e)=>(function(e) {
                    const t = e.name.trim();
                    if (!t) return [];
                    if (wc(t)) return [];
                    const r = e.subcommandTokens.map((e)=>e.trim()).filter(Boolean), n = e.arguments.map((e)=>e.trim()).filter(Boolean), s = [
                        t
                    ], o = [
                        t
                    ];
                    for (const e of r)o.push(e), s.push(o.join(" "));
                    const i = [
                        t,
                        ...n
                    ].join(" ");
                    return s.includes(i) || s.push(i), el(s);
                })(e))), A = o.map((e)=>e.suggestedAllowlistEntry).filter((e)=>"string" == typeof e).filter((e)=>C.includes(e)), C.length > 0) {
                const e = kc(C, A), t = e.length > 0 ? e.join(", ") : C.join(", ");
                T.push(`Not in allowlist: ${t}`);
            }
            E = s && 0 === P.length, E && Lc.info(e, "Smart allowlist: all commands in allowlist, will check security", {
                commandCount: t.length
            });
        }
        const J = "ask-every-time" === a || "insecure_none" === n.type && "allowlist" === a ? void 0 : l, O = S.map((e, t)=>new dl(e, n, J, k[t]));
        if ((0 === S.length || f && !b) && !c) {
            Lc.info(e, "Shell permissions: prompting after parser miss", {
                toolCallId: r.toolCallId,
                approvalMode: a,
                requestedPolicyType: pl(n),
                userConfiguredPolicyType: pl(l),
                isSmartAllowlistActive: b,
                parsingFailed: f,
                parserCommandCount: S.length,
                hasSmartModeApprovalReason: void 0 !== y,
                hasSmartModeApprovalRequestId: void 0 !== w
            });
            const s = {
                type: ds.Shell,
                toolCallId: r.toolCallId,
                details: {
                    command: t,
                    workingDirectory: r.workingDirectory,
                    timeout: r.timeout,
                    reason: y ?? (f ? "Parser failed to parse command (possible bypass)" : "Parser found no commands (possible bypass)"),
                    isSandboxAvailable: !1,
                    isSandboxEnabled: !1,
                    canAllowlist: !1,
                    notAllowedCommands: [],
                    smartModeApprovalReason: y,
                    smartModeApprovalRequestId: w
                }
            }, o = await this.pendingDecisionStore.requestApproval(s);
            if (o.approved) {
                return {
                    kind: "allow",
                    policy: await this.applyServerAndAdminPolicies(n)
                };
            }
            return {
                kind: "block",
                reason: {
                    type: "userRejected",
                    reason: o.reason
                }
            };
        }
        if (await this.hasHardDeny(e, O)) return {
            kind: "block",
            reason: {
                type: "permissionsConfig",
                ..."workspace_readonly" === l.type ? {
                    isReadonly: !0
                } : {}
            }
        };
        const { allRedirectsAreWorkspaceFileSafe: B, redirectsAllowlistSafe: D } = await this.computeRedirectAllowlistSafety(r.parsingResult, r.workingDirectory, "insecure_none" === l.type || "workspace" !== l.readBoundary), q = await this.teamSettingsService.getAutoRunControls(), N = {
            type: "insecure_none"
        };
        for (const e of O){
            await this.cmdIsAllowedByAllowlist(e, {
                redirectsAllowlistSafe: D,
                autoRunControls: q,
                applyTeamAllowlist: u
            }) && e.approveWithPolicy(N);
        }
        for (const e of O)q && this.isInTeamBlocklist(q, e) && e.deny();
        const F = await this.teamSettingsService.getDeleteFileProtection();
        if (F) for (const e of O)"rm" === e.command.name && e.deny();
        const U = this.buildShellApprovalDecisionFacts({
            commands: O,
            autoRunControls: q,
            shouldApplyTeamShellAllowlist: u,
            deleteProtectionEnabled: F,
            softDenylistedCommands: P
        });
        if ("workspace_readonly" === l.type && "workspace_readonly" !== n.type) return Lc.info(e, "Shell permissions: blocked by readonly mode"), {
            kind: "block",
            reason: {
                type: "permissionsConfig",
                isReadonly: !0
            }
        };
        const L = (0, m.zNu)(r.hookApprovalRequirement), $ = r.hookApprovalRequirement?.reason;
        let j = L ? void 0 : this.getShellAutoApprovalPolicy({
            approvalMode: a,
            isUnrestricted: c,
            requestedPolicy: n,
            facts: U,
            preserveRequestedPolicyForAllowlistedCommands: b
        });
        const G = void 0 !== j && U.allCommandsAllowlisted && "insecure_none" === j.type && "allowlistEscalated" in j && !0 === j.allowlistEscalated;
        if ("insecure_none" === j?.type) {
            const { readBoundary: e } = await this.getAdminReadSandboxing();
            "workspace" === e && (s ? j = void 0 : "insecure_none" !== n.type && (j = n));
        }
        const z = void 0 !== j && G;
        if (j && (c || void 0 === y || z)) {
            b && U.allCommandsPreapproved && !U.allCommandsAllowlisted && Lc.info(e, "Shell permissions: all commands allowed by sandbox policy");
            const t = await this.applyServerAndAdminPolicies(j);
            return Lc.info(e, "Shell permissions: auto-approved shell command", {
                toolCallId: r.toolCallId,
                approvalMode: a,
                requestedPolicyType: pl(n),
                userConfiguredPolicyType: pl(l),
                autoApprovalPolicyType: pl(j),
                mergedPolicyType: pl(t),
                isSmartAllowlistActive: b,
                smartModeApprovalBypassedByAllowlist: z,
                allCommandsRunnable: U.allCommandsRunnable,
                allCommandsAllowlisted: U.allCommandsAllowlisted,
                allCommandsPreapproved: U.allCommandsPreapproved,
                hasSmartModeApprovalReason: void 0 !== y,
                commandCount: O.length
            }), {
                kind: "allow",
                policy: t
            };
        }
        let W = (b || (!p || h || B) && !f) && ("allowlist" === a || "ask-every-time" === a) && U.canAllowlistInPrompt;
        const H = [], K = void 0 !== y, V = U.notInTeamAllowlist.length > 0 && (U.hasSecurityDenies || U.hasSoftDenies || !U.allCommandsRunnable);
        if (void 0 !== y && H.push(y), L && (K || H.push($ ? `Hook requested approval: ${$}` : "Hook requested approval"), W = !1), I.length > 0 && (K || H.push(...I), W = !1), !K) {
            if (b && T.length > 0) H.push(...T);
            else if (U.unapprovedCommands.length > 0) {
                const e = kc(this.generateAllowlistPatterns(U.unapprovedCommands.map((e)=>e.command))), t = e.length > 0 ? e.join(", ") : U.unapprovedCommands.map((e)=>e.command.fullText).join(", ");
                H.push(`Not in allowlist: ${t}`);
            }
        }
        if (U.hasSecurityDenies && (K || (U.rmDeniedByDeleteProtection.length > 0 && H.push("Delete protection is enabled"), U.teamBlocklistedCommands.length > 0 && H.push(`In team blocklist: ${U.teamBlocklistedCommands.map((e)=>e.command.name).join(", ")}`)), W = !1), V) {
            const t = U.notInTeamAllowlist.map((e)=>e.command.fullText).join(", ");
            Lc.info(e, "Shell permissions: commands not in team allowlist", {
                commandCount: U.notInTeamAllowlist.length
            }), K || H.push(`Not in team allowlist: ${t}`), W = !1;
        }
        const Y = H.join(" • "), Q = [];
        if (W) {
            const e = void 0 !== y ? O.filter((e)=>"allowlisted" !== e.state) : U.unapprovedCommands;
            Q.push(...this.generateAllowlistPatterns(e.map((e)=>e.command)));
        }
        const X = b && T.length > 0, Z = X ? C : Q, ee = X && A.length > 0 ? A : void 0, te = "insecure_none" !== n.type && "insecure_none" !== l.type, re = "insecure_none" !== n.type, ne = [
            void 0 !== y ? "smart_mode_approval" : void 0,
            L ? "hook_forces_prompt" : void 0,
            I.length > 0 ? "command_blocklist" : void 0,
            b && T.length > 0 ? "smart_allowlist_miss" : void 0,
            U.unapprovedCommands.length > 0 ? "unapproved_commands" : void 0,
            U.hasSecurityDenies ? "security_denies" : void 0,
            V ? "team_allowlist_miss" : void 0
        ].filter((e)=>void 0 !== e);
        Lc.info(e, "Shell permissions: requesting shell approval", {
            toolCallId: r.toolCallId,
            approvalMode: a,
            requestedPolicyType: pl(n),
            userConfiguredPolicyType: pl(l),
            isSandboxAvailable: te,
            isSandboxEnabled: re,
            canAllowlist: W,
            isSmartAllowlistActive: b,
            hasSmartModeApprovalReason: void 0 !== y,
            hasSmartModeApprovalRequestId: void 0 !== w,
            hookForcesPrompt: L,
            approvalReasonTypes: ne,
            commandCount: O.length,
            unapprovedCommandCount: U.unapprovedCommands.length,
            deniedCommandCount: U.deniedCommands.length,
            notInTeamAllowlistCount: U.notInTeamAllowlist.length,
            notAllowedCommandCount: Z.length,
            suggestedAllowlistEntryCount: ee?.length ?? 0,
            allCommandsRunnable: U.allCommandsRunnable,
            allCommandsAllowlisted: U.allCommandsAllowlisted,
            allCommandsPreapproved: U.allCommandsPreapproved,
            hasSecurityDenies: U.hasSecurityDenies,
            hasSoftDenies: U.hasSoftDenies
        });
        const se = {
            type: ds.Shell,
            toolCallId: r.toolCallId,
            details: {
                command: t,
                workingDirectory: r.workingDirectory,
                timeout: r.timeout,
                reason: Y,
                isSandboxAvailable: "allowlist" === a && te,
                isSandboxEnabled: "allowlist" === a && re,
                canAllowlist: W,
                notAllowedCommands: Z,
                suggestedAllowlistEntries: ee,
                smartModeApprovalReason: y,
                smartModeApprovalRequestId: w
            }
        }, oe = await this.pendingDecisionStore.requestApproval(se);
        if (oe.approved) {
            const e = "unrestricted" === a ? {
                type: "insecure_none"
            } : n;
            return {
                kind: "allow",
                policy: await this.applyServerAndAdminPolicies(e)
            };
        }
        return {
            kind: "block",
            reason: {
                type: "userRejected",
                reason: oe.reason
            }
        };
    }
    async isShellCommandFullyAllowlisted(e, t, r) {
        const n = e.withName("InteractivePermissionsService.isShellCommandFullyAllowlisted"), s = await this.getPermissions(), o = !s.dashboardTerminalAllowlistOverriddenByPermissionsFile;
        if ("allowlist" !== s.approvalMode) return !1;
        if ("workspace_readonly" === s.userConfiguredPolicy.type) return !1;
        const { redirectsAllowlistSafe: i } = await this.computeRedirectAllowlistSafety(r.parsingResult, r.workingDirectory, "insecure_none" === s.userConfiguredPolicy.type || "workspace" !== s.userConfiguredPolicy.readBoundary);
        if (!i) return !1;
        const a = r.classifierResult, c = void 0 !== a && !a.classificationFailed && a.commands.length > 0 ? a : void 0, l = (s.smartAllowlistEnabled ?? !1) && void 0 !== c;
        if (r.parsingResult.parsingFailed && !l) return !1;
        const u = r.parsingResult.executableCommands, d = l ? c.commands.map(nl) : u;
        if (0 === d.length) return !1;
        const p = l ? c.commands.map(tl) : d.map((e)=>[
                e.fullText.trim()
            ].filter(Boolean)), m = void 0 !== c ? c.commands.map(tl) : p, h = {
            type: "insecure_none"
        }, f = d.map((e, t)=>new dl(e, h, void 0, p[t]));
        if (await this.hasHardDeny(n, f)) return !1;
        const g = el(s.smartAllowlistDenylist ?? []);
        if (g.length > 0) {
            for (const e of m)if (e && 0 !== e.length && g.some((t)=>rl(e, t))) return !1;
        }
        if (await this.teamSettingsService.getDeleteFileProtection() && f.some((e)=>"rm" === e.command.name)) return !1;
        const y = await this.teamSettingsService.getAutoRunControls();
        if (void 0 !== y && f.some((e)=>this.isInTeamBlocklist(y, e))) return !1;
        for (const e of f){
            if (!await this.cmdIsAllowedByAllowlist(e, {
                redirectsAllowlistSafe: i,
                autoRunControls: y,
                applyTeamAllowlist: o
            })) return !1;
        }
        return !0;
    }
    async applyServerAndAdminPolicies(e) {
        if ("insecure_none" === e.type) return e;
        const { userSandboxDataFolderName: t } = await this.getPermissions(), r = void 0 !== t && t.length > 0 ? (0, s.join)((0, ge.homedir)(), t, "sandbox.json") : this.perUserSandboxConfigPath, n = await this.foldPerUserFilePolicy(e, r), o = n.skipStatsigDefaults ? n : await this.applyStatsigDefaults(n), i = await this.loadPerRepoFilePolicy(o.type), a = await this.buildTeamAdminPolicy(o.type), c = (0, R._B)(e.networkPolicy), { policy: l } = await (0, R.resolveSandboxPolicyForWorkspace)(this.rootDirectories[0], {
            perUser: o,
            perRepo: i,
            teamAdmin: a
        });
        return c ? {
            ...l,
            networkPolicy: (0, R.T6)()
        } : l;
    }
    async foldPerUserFilePolicy(e, t = this.perUserSandboxConfigPath) {
        const r = await (0, R.tv)(t, (0, ge.homedir)());
        if (!r || "insecure_none" === r.type) return e;
        let n = (0, R.fZ)(r.networkPolicy, e.networkPolicy);
        n && void 0 !== e.networkPolicy?.default && (n = {
            ...n,
            default: e.networkPolicy.default
        });
        const s = (0, R.s9)(r.additionalReadonlyPaths, e.additionalReadonlyPaths), o = {
            ...e,
            networkPolicy: n,
            additionalReadonlyPaths: s.length > 0 ? s : void 0,
            readBoundary: r.readBoundary ?? e.readBoundary,
            additionalReadPaths: void 0 !== r.additionalReadPaths ? r.additionalReadPaths : e.additionalReadPaths
        };
        if ("workspace_readwrite" === e.type && "workspace_readwrite" === r.type) {
            const t = (0, R.s9)(r.additionalReadwritePaths, e.additionalReadwritePaths);
            return {
                ...o,
                additionalReadwritePaths: t.length > 0 ? t : void 0
            };
        }
        return o;
    }
    async applyStatsigDefaults(e) {
        const t = await this.teamSettingsService.getDefaultNetworkAllowlist();
        if (!t.available || 0 === t.allowlist.length) return e;
        if ((0, R._B)(e.networkPolicy)) return e;
        const r = {
            default: "deny",
            allow: zc(t.allowlist)
        };
        return {
            ...e,
            networkPolicy: (0, R.fZ)(e.networkPolicy, r)
        };
    }
    async loadPerRepoFilePolicy(e) {
        const t = this.rootDirectories[0];
        if (!t) return;
        const r = await (0, R.tv)((0, s.join)(t, ".cursor", "sandbox.json"), t);
        return r && "insecure_none" !== r.type ? r.type !== e ? sl(e, {
            networkPolicy: r.networkPolicy,
            additionalReadonlyPaths: r.additionalReadonlyPaths,
            ..."additionalReadwritePaths" in r ? {
                additionalReadwritePaths: r.additionalReadwritePaths
            } : {},
            disableTmpWrite: r.disableTmpWrite,
            networkPolicyStrict: r.networkPolicyStrict,
            readBoundary: r.readBoundary,
            additionalReadPaths: r.additionalReadPaths
        }) : r : void 0;
    }
    async buildTeamAdminPolicy(e) {
        const t = await this.buildTeamAdminNetworkPolicy(e), { readBoundary: r, readAllowlistPaths: n, allowUserOverrideReadAllowlist: s } = await this.getAdminReadSandboxing();
        return void 0 === r ? t : {
            ...t ?? sl(e),
            readBoundary: r,
            additionalReadPaths: n,
            allowUserOverrideReadPaths: s
        };
    }
    async getAdminReadSandboxing() {
        const [e, t] = await Promise.all([
            this.teamSettingsService.isReadControlEnabled?.() ?? !0,
            this.teamSettingsService.getSandboxingControls()
        ]);
        return e ? {
            readBoundary: "workspace" === t.readBoundary ? "workspace" : void 0,
            readAllowlistPaths: t.readAllowlistPaths ?? [],
            allowUserOverrideReadAllowlist: t.allowUserOverrideReadAllowlist
        } : {
            readBoundary: void 0,
            readAllowlistPaths: []
        };
    }
    async buildTeamAdminNetworkPolicy(e) {
        if (!this.adminNetworkControlsEnabled) return;
        const t = await this.teamSettingsService.getNetworkAccessControls();
        if (!t.available) return sl(e, {
            networkPolicy: (0, R.Po)()
        });
        if (0 === t.allowlist.length && 0 === t.denylist.length) return;
        const r = {};
        return t.allowlist.length > 0 && (r.default = "deny", r.allow = zc(t.allowlist)), t.denylist.length > 0 && (r.deny = zc(t.denylist)), sl(e, {
            networkPolicy: r
        });
    }
    async isInShellAllowlist(e) {
        return (await this.getPermissions()).allow.some((t)=>this.isShellEntry(t) && e.matchForms.some((e)=>this.matchesShell(t, e)));
    }
    isInTeamBlocklist(e, t) {
        return e.blocked.some((e)=>this.matchesAutoRunCommand(t.command.fullText, e));
    }
    isInTeamAllowlist(e, t) {
        return e.allowed.some((e)=>this.matchesAutoRunCommand(t.command.fullText, e));
    }
    async computeRedirectAllowlistSafety(e, t, r) {
        const n = e.hasRedirects, s = e.parsingFailed, i = !0 === e.allRedirectsAreDevNull, a = !(!n || i || s) && await async function({ parsingResult: e, workingDirectory: t, rootDirectories: r, allowTmpRedirects: n = !0, resolvePathForPermissions: s = Jc, pathModule: i = o, tempPathOptions: a = {
            platform: process.platform,
            env: process.env,
            pathModule: i,
            homeDirectory: (0, ge.homedir)()
        } }) {
            if (!e.hasRedirects) return !0;
            const c = e.redirects;
            if (0 === c.length) return !1;
            const l = e.executableCommands.length > 1, u = Wc();
            for (const e of c){
                if (Xc(e)) continue;
                const o = l ? Wc() : u, { operator: c, targetText: d } = e, p = e.destinationFds.map((e)=>Number(e));
                if (">&" === c) {
                    const e = Qc(d), t = void 0 === e ? void 0 : o.fdTargets.get(e);
                    if (!Hc(t)) {
                        for (const e of p)o.fdTargets.set(e, "unsafe");
                        return !1;
                    }
                    for (const e of p)o.fdTargets.set(e, t);
                    continue;
                }
                if ("<&" === c) {
                    const e = Qc(d), t = void 0 === e ? void 0 : o.fdTargets.get(e);
                    if ("dev-null" !== t) {
                        for (const e of p)o.fdTargets.set(e, "unsafe");
                        return !1;
                    }
                    for (const e of p)o.fdTargets.set(e, t);
                    continue;
                }
                if ("/dev/null" === d) {
                    for (const e of p)o.fdTargets.set(e, "dev-null");
                    continue;
                }
                if (!Vc(c) || void 0 === d) {
                    for (const e of p)o.fdTargets.set(e, "unsafe");
                    return !1;
                }
                const m = await Zc({
                    targetText: d,
                    workingDirectory: t,
                    rootDirectories: r,
                    allowTmpRedirects: n,
                    resolvePathForPermissions: s,
                    pathModule: i,
                    tempPathOptions: a
                });
                if (!m) {
                    for (const e of p)o.fdTargets.set(e, "unsafe");
                    return !1;
                }
                for (const e of p)o.fdTargets.set(e, m);
            }
            return !0;
        }({
            parsingResult: e,
            workingDirectory: t,
            rootDirectories: this.rootDirectories,
            allowTmpRedirects: r
        }), c = !function({ parsingResult: e, hasRedirects: t, parsingFailed: r, allRedirectsAreAllowlistSafe: n, allRedirectsAreWorkspaceFileSafe: s }) {
            return !(!t || r || n || s) && (0 === e.redirects.length || e.redirects.some(Yc));
        }({
            parsingResult: e,
            hasRedirects: n,
            parsingFailed: s,
            allRedirectsAreAllowlistSafe: i,
            allRedirectsAreWorkspaceFileSafe: a
        });
        return {
            allRedirectsAreAllowlistSafe: i,
            allRedirectsAreWorkspaceFileSafe: a,
            redirectsAllowlistSafe: c
        };
    }
    async cmdIsAllowedByAllowlist(e, t) {
        return !!t.redirectsAllowlistSafe && (!!await this.isInShellAllowlist(e) || t.applyTeamAllowlist && void 0 !== t.autoRunControls && this.isInTeamAllowlist(t.autoRunControls, e));
    }
    buildShellApprovalDecisionFacts({ commands: e, softDenylistedCommands: t, autoRunControls: r, shouldApplyTeamShellAllowlist: n, deleteProtectionEnabled: s }) {
        const o = e.filter((e)=>"denied" === e.state), i = e.filter((e)=>"approvable" === e.state), a = n && r?.enabled ? e.filter((e)=>!this.isInTeamAllowlist(r, e)) : [], c = o.filter((e)=>void 0 !== r && this.isInTeamBlocklist(r, e)), l = s ? o.filter((e)=>"rm" === e.command.name) : [];
        return {
            hasSecurityDenies: o.length > 0,
            hasSoftDenies: t.length > 0,
            hasTeamAllowlistMisses: a.length > 0,
            allCommandsRunnable: e.every((e)=>e.isRunnable()),
            allCommandsAllowlisted: e.every((e)=>"allowlisted" === e.state),
            allCommandsPreapproved: e.every((e)=>"preapproved" === e.state),
            canAllowlistInPrompt: 0 === o.length && 0 === a.length,
            unapprovedCommands: i,
            deniedCommands: o,
            notInTeamAllowlist: a,
            teamBlocklistedCommands: c,
            rmDeniedByDeleteProtection: l
        };
    }
    getShellAutoApprovalPolicy({ approvalMode: e, isUnrestricted: t, requestedPolicy: r, facts: n, preserveRequestedPolicyForAllowlistedCommands: s }) {
        if (!n.hasSecurityDenies && !n.hasSoftDenies && n.allCommandsRunnable) {
            if (t) return "workspace_readonly" === r.type ? r : {
                type: "insecure_none"
            };
            if ("allowlist" === e) return n.allCommandsAllowlisted && !s ? {
                type: "insecure_none",
                allowlistEscalated: !0
            } : r;
        }
    }
    async getPermissions() {
        return await this.permissionsProvider.getPermissions();
    }
    hasLocalShellControls(e) {
        return e.allow.some((e)=>this.isShellEntry(e)) || e.deny.some((e)=>this.isShellEntry(e)) || (e.smartAllowlistDenylist?.length ?? 0) > 0;
    }
    hasTeamShellControls(e, t = !0) {
        return void 0 !== e && (t && (e.enabled || e.allowed.length > 0) || e.blocked.length > 0);
    }
    async shouldPromptForEmptyPlainShellAllowlist(e, t) {
        if ("allowlist" !== t.approvalMode || "insecure_none" !== t.userConfiguredPolicy.type || 0 === e.trim().length || this.hasLocalShellControls(t)) return !1;
        const [r, n] = await Promise.all([
            this.teamSettingsService.getAutoRunControls(),
            this.teamSettingsService.getDeleteFileProtection()
        ]);
        return !this.hasTeamShellControls(r, !t.dashboardTerminalAllowlistOverriddenByPermissionsFile) && !n;
    }
    async requestApprovalForEmptyShellAllowlist(e, t, r) {
        const n = this.getEmptyShellAllowlistCandidates(t), s = await this.pendingDecisionStore.requestApproval({
            type: ds.Shell,
            toolCallId: t.toolCallId,
            details: {
                command: e,
                workingDirectory: t.workingDirectory,
                timeout: t.timeout,
                reason: t.smartModeApprovalReason ?? "Shell allowlist is empty",
                isSandboxAvailable: !1,
                isSandboxEnabled: !1,
                canAllowlist: n.length > 0,
                notAllowedCommands: n,
                smartModeApprovalReason: t.smartModeApprovalReason,
                smartModeApprovalRequestId: t.smartModeApprovalRequestId
            }
        });
        if (!s.approved) return {
            kind: "block",
            reason: {
                type: "userRejected",
                reason: s.reason
            }
        };
        return {
            kind: "allow",
            policy: await this.applyServerAndAdminPolicies(r)
        };
    }
    getEmptyShellAllowlistCandidates(e) {
        const t = e.parsingResult;
        return t.parsingFailed || 0 === t.executableCommands.length || t.hasRedirects && !0 !== t.allRedirectsAreDevNull ? [] : this.generateAllowlistPatterns(t.executableCommands);
    }
    async getAdminCommandDenylistBlock(e, t) {
        const r = (await this.teamSettingsService.getAdminCommandDenylist()).rules;
        if (0 === r.length) return;
        const n = me({
            matchForms: t.parsingResult ? le({
                command: t.command,
                parsingResult: t.parsingResult
            }) : [
                t.command
            ],
            blockedCommands: r
        });
        return void 0 !== n ? (Lc.info(e, "Admin command denylist hard-blocked shell at execution time", {
            toolCallId: t.toolCallId,
            parsingFailed: t.parsingResult?.parsingFailed ?? !0,
            parserCommandCount: t.parsingResult?.executableCommands.length ?? 0
        }), {
            type: "adminCommandDenylist",
            pattern: n
        }) : void 0;
    }
    async hasHardDeny(e, t) {
        const r = await this.getPermissions();
        return t.some((e)=>r.deny.some((t)=>this.isShellEntry(t) && e.matchForms.some((e)=>this.matchesShell(t, e))));
    }
    isShellEntry(e) {
        return null !== cl(e);
    }
    isPathEntry(e, t) {
        return new RegExp(`^\\s*${e}\\s*\\(`).test(t);
    }
    matchesShell(e, t) {
        const r = cl(e);
        if (!r) return !1;
        const n = t.trim(), s = this.extractBaseCommand(n);
        if (null !== r.argsPattern) {
            const e = n.includes(" ") ? n.slice(n.indexOf(" ") + 1).trim() : "", t = this.matchGlob(r.commandPattern, s) || this.matchGlob(r.commandPattern, n), o = this.matchGlob(r.argsPattern, e);
            if (t && o) return !0;
        }
        return !!this.matchGlob(r.fullPattern, n) || !!n.startsWith(`${r.fullPattern} `) || !!this.matchGlob(r.fullPattern, s) || s === r.fullPattern;
    }
    async checkCursorFileProtection(e) {
        const t = await this.teamSettingsService.getDotCursorProtection();
        if (e.some((e)=>".cursor" === e.toLowerCase() || ".vscode" === e.toLowerCase()) && t) {
            const t = e[e.length - 1]?.toLowerCase() ?? "";
            return t.endsWith(".md") || t.endsWith(".mdc") || ".cursorrules" === t ? null : {
                type: "permissionsConfig"
            };
        }
        return null;
    }
    extractBaseCommand(e) {
        const t = e.trim(), r = t.indexOf(" ");
        return -1 === r ? t : t.substring(0, r);
    }
    generateAllowlistPatterns(e) {
        const t = [], r = [
            "git",
            "npm",
            "yarn",
            "pnpm",
            "docker",
            "pip",
            "systemctl",
            "uv",
            "cargo",
            "bun",
            "npx"
        ];
        for (const n of e)wc(n.name) || (r.includes(n.name) && n.args.length > 0 && "word" === n.args[0].type ? t.push(`${n.name} ${n.args[0].value}`) : t.push(n.name));
        return [
            ...new Set(t)
        ];
    }
    matchesPathEntry(e, t, r) {
        const n = new RegExp(`^\\s*${e}\\s*\\((.*)\\)\\s*$`), s = t.match(n);
        if (!s) return !1;
        const o = (s[1] ?? "").trim();
        return this.matchGlob((0, O.jl)(o), r);
    }
    async isPathExplicitlyDenied(e, t) {
        return (await this.getPermissions()).deny.some((r)=>this.isPathEntry(e, r) && this.matchesPathEntry(e, r, t));
    }
    async isPathExplicitlyAllowed(e, t) {
        return (await this.getPermissions()).allow.some((r)=>this.isPathEntry(e, r) && this.matchesPathEntry(e, r, t));
    }
    matchGlob(e, t) {
        return ce(e, t);
    }
    async addToAllowList(e, t, r) {
        const n = `${t}(${r})`;
        await this.permissionsProvider.updatePermissions((e)=>{
            const t = e.allow.includes(n) ? e.allow : [
                ...e.allow,
                n
            ];
            return {
                ...e,
                allow: t
            };
        });
    }
    async addToDenyList(e, t, r) {
        const n = `${t}(${r})`;
        await this.permissionsProvider.updatePermissions((e)=>{
            const t = e.deny.includes(n) ? e.deny : [
                ...e.deny,
                n
            ];
            return {
                ...e,
                deny: t
            };
        });
    }
    async shouldBlockMcp(e, t, r) {
        const n = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Fc(n, (0, C.VI)(e.withName("InteractivePermissionsService.shouldBlockMcp")), !1);
            const { name: s, toolName: o, providerIdentifier: i, args: a } = t, c = function(e, t) {
                if (void 0 !== t) return t;
                const r = e;
                return void 0 !== r.annotations ? r.annotations : (0, Fs.yC)(r.annotationsJson);
            }(t, r), l = (e)=>{
                this.mcpAllowlistLog?.(e);
            };
            l(`[permissions-service] shouldBlockMcp: toolName="${o}", providerIdentifier="${i}"`);
            const u = await this.getPermissions(), d = await this.teamSettingsService.getMcpToolControls(), p = !0 === d?.enabled;
            if (await this.isMcpExplicitlyDenied(e, i, o)) return l(`[permissions-service] shouldBlockMcp: BLOCKED (explicitly denied) toolName="${o}", providerIdentifier="${i}"`), {
                type: "permissionsConfig"
            };
            const m = t.smartModeApproval?.reason;
            if (void 0 !== m) {
                if ("workspace_readonly" === u.userConfiguredPolicy.type && "unrestricted" !== u.approvalMode) return l(`[permissions-service] shouldBlockMcp: BLOCKED (readonly mode, Smart Mode forced approval) toolName="${o}", providerIdentifier="${i}"`), {
                    type: "permissionsConfig",
                    isReadonly: !0
                };
                l(`[permissions-service] shouldBlockMcp: needsApproval (Smart Mode) toolName="${o}", providerIdentifier="${i}"`);
                return !(p ? this.isMcpInTeamAllowlist(d, {
                    providerIdentifier: i,
                    toolName: o,
                    annotations: c
                }) : await this.isMcpExplicitlyAllowed(e, i, o)) && !("unrestricted" === u.approvalMode && !await this.teamSettingsService.getShouldBlockMcp()) && {
                    type: "needsApproval",
                    approvalReason: m,
                    approvalDetails: {
                        type: "mcp",
                        name: s,
                        toolName: o,
                        providerIdentifier: i,
                        args: a,
                        reason: "smartMode",
                        canAllowlist: !1,
                        smartModeApprovalReason: m,
                        smartModeApprovalRequestId: t.smartModeApproval?.requestId
                    }
                };
            }
            if (p) {
                const t = this.isMcpInTeamAllowlist(d, {
                    providerIdentifier: i,
                    toolName: o,
                    annotations: c
                });
                if (this.recordMcpAllowlistCheckResult(e, {
                    allowlistScope: "team",
                    outcome: t ? "pass" : "fail"
                }), t) return l(`[permissions-service] shouldBlockMcp: ALLOWED (in admin MCP allowlist) toolName="${o}", providerIdentifier="${i}"`), !1;
            } else {
                const t = await this.isMcpExplicitlyAllowed(e, i, o);
                if (this.recordMcpAllowlistCheckResult(e, {
                    allowlistScope: "user",
                    outcome: t ? "pass" : "fail"
                }), t) return l(`[permissions-service] shouldBlockMcp: ALLOWED (explicitly in allowlist) toolName="${o}", providerIdentifier="${i}"`), !1;
            }
            if ("workspace_readonly" === u.userConfiguredPolicy.type && "unrestricted" !== u.approvalMode) return l(`[permissions-service] shouldBlockMcp: BLOCKED (readonly mode) toolName="${o}", providerIdentifier="${i}"`), {
                type: "permissionsConfig",
                isReadonly: !0
            };
            if ("unrestricted" === u.approvalMode) {
                if (!await this.teamSettingsService.getShouldBlockMcp()) return l(`[permissions-service] shouldBlockMcp: ALLOWED (auto-run, no team block) toolName="${o}", providerIdentifier="${i}"`), !1;
                l(`[permissions-service] shouldBlockMcp: needsApproval (auto-run but team blocks MCP) toolName="${o}", providerIdentifier="${i}"`);
            }
            return l(`[permissions-service] shouldBlockMcp: needsApproval (not in allowlist) toolName="${o}", providerIdentifier="${i}", approvalMode="${u.approvalMode}"`), {
                type: "needsApproval",
                approvalReason: `MCP tool: ${o}`,
                approvalDetails: {
                    type: "mcp",
                    name: s,
                    toolName: o,
                    providerIdentifier: i,
                    args: a,
                    canAllowlist: !0
                }
            };
        } catch (e) {
            n.error = e, n.hasError = !0;
        } finally{
            Uc(n);
        }
    }
    async isMcpFullyAllowlisted(e, t) {
        const r = e.withName("InteractivePermissionsService.isMcpFullyAllowlisted"), { providerIdentifier: n, toolName: s } = t, o = t.annotations ?? (0, Fs.yC)(t.annotationsJson);
        if (await this.isMcpExplicitlyDenied(r, n, s)) return !1;
        const i = await this.teamSettingsService.getMcpToolControls();
        return !0 === i?.enabled ? !!this.isMcpInTeamAllowlist(i, {
            providerIdentifier: n,
            toolName: s,
            annotations: o
        }) : await this.isMcpExplicitlyAllowed(r, n, s);
    }
    async isWebFetchFullyAllowlisted(e, t) {
        const r = await this.getPermissions();
        if ("allowlist" !== r.approvalMode) return !1;
        let n;
        try {
            n = new URL(t.url);
        } catch  {
            return !1;
        }
        const s = n.hostname;
        return !r.deny.some((e)=>this.matchesWebFetchEntry(e, s)) && r.allow.some((e)=>this.matchesWebFetchEntry(e, s));
    }
    matchesAutoRunCommand(e, t) {
        const r = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp(`^${r}(\\s|$)`).test(e.trim());
    }
    matchesMcpPattern({ pattern: e, providerIdentifier: t, toolName: r, logLabel: n }) {
        const s = e.indexOf(":");
        if (-1 === s) return !1;
        const o = e.slice(0, s).trim().toLowerCase(), i = e.slice(s + 1).trim().toLowerCase(), a = t.lastIndexOf("::mcpScope:"), c = (-1 === a ? t : t.slice(0, a)).toLowerCase().trim(), l = r.toLowerCase().trim(), u = "*" === o || this.matchGlob(o, c), d = "*" === i || this.matchGlob(i, l), p = u && d, m = `[permissions-service] ${n}: serverPattern="${o}", toolPattern="${i}", normalizedProviderIdentifier="${c}", normalizedToolName="${l}", serverMatches=${u}, toolMatches=${d}, result=${p}`;
        return this.mcpAllowlistLog?.(m), p;
    }
    recordMcpAllowlistCheckResult(e, { allowlistScope: t, outcome: r }) {
        $c.increment(e, 1, {
            allowlist_scope: t,
            outcome: r
        });
    }
    matchesMcpEntry(e, t, r) {
        const n = e.match(/^\s*Mcp\s*\((.*)\)\s*$/);
        if (!n) return !1;
        const s = n[1]?.trim() ?? "";
        return this.matchesMcpPattern({
            pattern: s,
            providerIdentifier: t,
            toolName: r,
            logLabel: "matchesMcpEntry"
        });
    }
    matchesWebFetchEntry(e, t) {
        const r = e.match(/^\s*WebFetch\s*\((.*)\)\s*$/);
        if (!r) return !1;
        return mc(t, r[1]?.trim() ?? "");
    }
    matchesMcpEntryBare({ pattern: e, providerIdentifier: t, toolName: r }) {
        return this.matchesMcpPattern({
            pattern: e,
            providerIdentifier: t,
            toolName: r,
            logLabel: "matchesMcpEntryBare"
        });
    }
    isMcpInTeamAllowlist(e, { providerIdentifier: t, toolName: r, annotations: n }) {
        if (e.mcpToolAllowlist.some((e)=>this.matchesMcpEntryBare({
                pattern: e,
                providerIdentifier: t,
                toolName: r
            }))) return !0;
        const s = this.findTeamMcpServerPolicy(e, t);
        return void 0 !== s && "reads" === s.mode && (0, fc.rh)(s, {
            name: r,
            annotations: n
        });
    }
    findTeamMcpServerPolicy(e, t) {
        for (const r of e.serverPolicies ?? [])if (this.matchesMcpEntryBare({
            pattern: `${r.name}:*`,
            providerIdentifier: t,
            toolName: ""
        })) return r.policy;
    }
    async isMcpExplicitlyDenied(e, t, r) {
        return (await this.getPermissions()).deny.some((e)=>this.matchesMcpEntry(e, t, r));
    }
    async isMcpExplicitlyAllowed(e, t, r) {
        return (await this.getPermissions()).allow.some((e)=>this.matchesMcpEntry(e, t, r));
    }
}
var fl = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, gl = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const yl = (0, T.h)("LocalReadExecutor"), wl = async (e, t, r, n)=>{
    const s = setTimeout(()=>{
        yl.warn(e, `[watchdog, LocalReadExecutor] ${t} still not completed after ${r}ms`);
    }, r);
    try {
        return await n();
    } finally{
        clearTimeout(s);
    }
};
function vl(e) {
    return e >= 32 && e <= 126 || 9 === e || 10 === e || 13 === e;
}
const _l = Buffer.from("\n---\n");
function bl(e) {
    const t = function(e) {
        if (e.length < 5 || 45 !== e[0] || 45 !== e[1] || 45 !== e[2] || 10 !== e[3]) return 0;
        const t = Buffer.from("\n---\n"), r = e.indexOf(t, 4);
        return -1 === r ? 0 : r + t.length;
    }(e), r = t > 0 ? e.subarray(0, t).toString("utf-8") : "", n = function(e, t) {
        const r = e.length;
        if (r < 2 * _l.length) return r;
        if (10 !== e[r - 1] || 45 !== e[r - 2] || 45 !== e[r - 3] || 45 !== e[r - 4] || 10 !== e[r - 5]) return r;
        const n = Math.max(t, r - 4096), s = e.lastIndexOf(_l, r - _l.length - 1);
        return -1 === s || s < n ? r : function(e) {
            for(let t = 0; t < e.length; t++){
                const r = e.charCodeAt(t);
                if (10 !== r && (r < 32 || r > 126)) return !1;
            }
            const t = e.split("\n").filter((e)=>e.length > 0);
            if (t.length < 2 || t.length > 3) return !1;
            const r = t[0], n = t[t.length - 1];
            return !(!/^(exit_code: (?:-?\d+|unknown)|error: .+)$/.test(r) || !n.startsWith("ended_at: ") || 3 === t.length && !/^elapsed_ms: \d+$/.test(t[1]));
        }(e.subarray(s + _l.length, r - 4).toString("utf-8")) ? s : r;
    }(e, t), s = n < e.length ? e.subarray(n).toString("utf-8") : "", o = e.subarray(t, n), i = function(e) {
        if (e.length >= 2) {
            if (255 === e[0] && 254 === e[1]) return "utf-16le";
            if (254 === e[0] && 255 === e[1]) return "utf-16be";
        }
        const t = Math.min(4096, e.length);
        if (t < 16) return "utf-8";
        let r = 0, n = 0;
        for(let s = 0; s + 1 < t; s += 2){
            const t = e[s], o = e[s + 1];
            0 === o && vl(t) && r++, 0 === t && vl(o) && n++;
        }
        return r >= 8 && r >= 4 * Math.max(1, n) ? "utf-16le" : n >= 8 && n >= 4 * Math.max(1, r) ? "utf-16be" : "utf-8";
    }(o);
    let a;
    if ("utf-16le" === i) a = o.toString("utf16le");
    else if ("utf-16be" === i) {
        const e = o.length - o.length % 2, t = Buffer.from(o.subarray(0, e));
        t.swap16(), a = t.toString("utf16le");
    } else a = o.toString("utf-8");
    return 65279 === a.charCodeAt(0) && (a = a.slice(1)), r + a + s;
}
const Sl = [
    Buffer.from("%PDF-", "ascii"),
    Buffer.from([
        208,
        207,
        17,
        224,
        161,
        177,
        26,
        225
    ]),
    Buffer.from([
        80,
        75,
        3,
        4
    ]),
    Buffer.from([
        80,
        75,
        5,
        6
    ]),
    Buffer.from([
        80,
        75,
        7,
        8
    ]),
    Buffer.from([
        127,
        69,
        76,
        70
    ]),
    Buffer.from([
        254,
        237,
        250,
        206
    ]),
    Buffer.from([
        254,
        237,
        250,
        207
    ]),
    Buffer.from([
        206,
        250,
        237,
        254
    ]),
    Buffer.from([
        207,
        250,
        237,
        254
    ]),
    Buffer.from([
        77,
        90,
        144
    ]),
    Buffer.from([
        0,
        97,
        115,
        109
    ]),
    Buffer.from([
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10
    ]),
    Buffer.from([
        255,
        216,
        255
    ]),
    Buffer.from("GIF87a", "ascii"),
    Buffer.from("GIF89a", "ascii"),
    Buffer.from("SQLite format 3\0", "ascii"),
    Buffer.from([
        31,
        139
    ]),
    Buffer.from("BZh", "ascii"),
    Buffer.from([
        253,
        55,
        122,
        88,
        90,
        0
    ]),
    Buffer.from([
        40,
        181,
        47,
        253
    ]),
    Buffer.from([
        55,
        122,
        188,
        175,
        39,
        28
    ]),
    Buffer.from([
        82,
        97,
        114,
        33,
        26,
        7,
        0
    ]),
    Buffer.from([
        82,
        97,
        114,
        33,
        26,
        7,
        1,
        0
    ])
];
function kl(e) {
    const t = (0, s.extname)(e).toLowerCase(), r = "" === t ? "Binary files without an extension are not supported by the read executor" : `Binary files of type ${t} are not supported by the read executor`;
    return new rc.sV({
        result: {
            case: "invalidFile",
            value: new rc.cW({
                path: e,
                reason: r
            })
        }
    });
}
function xl(e, t, r) {
    if (void 0 === r.offset && void 0 === r.limit) return {
        content: e,
        rangeApplied: !1
    };
    if ("" === e) return {
        content: e,
        rangeApplied: !1
    };
    const n = r.offset ?? 1, s = r.limit ?? (n < 0 ? Math.abs(n) : t), o = n < 0 ? Math.max(0, t + n) : Math.max(0, n - 1);
    if (o >= t) return {
        content: e,
        rangeApplied: !1
    };
    const i = Math.min(t, o + s);
    return {
        content: e.split("\n").slice(o, i).join("\n"),
        rangeApplied: !0
    };
}
function El(e, t, r = tc.p) {
    if (0 === t.length) return e;
    const n = r - e.text.length;
    return n <= 0 ? {
        text: e.text,
        truncated: !0
    } : t.length > n ? {
        text: e.text + t.slice(0, n),
        truncated: !0
    } : {
        text: e.text + t,
        truncated: e.truncated
    };
}
function Il(e, t) {
    const r = El(e, t);
    return {
        text: r.text,
        truncated: r.truncated
    };
}
function Tl(e, t, r) {
    let n = e;
    return t.forEach((e, t)=>{
        const s = function(e, t) {
            const { line: r, hasNewline: n } = e;
            return t && n && r.text.endsWith("\r") ? {
                ...r,
                text: r.text.slice(0, -1)
            } : r;
        }(e, r);
        t > 0 && (n = El(n, "\n")), n = El(n, s.text), s.truncated && (n = {
            text: n.text,
            truncated: !0
        });
    }), n;
}
function Cl(e) {
    const t = e.toLowerCase();
    return "utf-8" === t ? "utf8" : "utf-8-bom" === t || "utf-8 bom" === t ? "utf8bom" : "latin-1" === t ? "latin1" : t;
}
class Pl extends Error {
    constructor(){
        super("Invalid UTF-8 while streaming read"), this.name = "InvalidUtf8Error";
    }
}
function Al(e, t, r) {
    const n = function(e, t, r) {
        return Cl(r ?? xe.Yd.get(e) ?? t.encoding);
    }(e, t, r), s = function(e) {
        const t = Cl(e);
        return "utf8bom" === t ? "utf8" : t;
    }(n);
    return "utf8" === s ? {
        kind: "strictUtf8",
        cacheEncoding: "utf8"
    } : nc.encodingExists(s) ? {
        kind: "iconv",
        decoderEncoding: s,
        cacheEncoding: n
    } : {
        kind: "strictUtf8",
        cacheEncoding: "utf8"
    };
}
async function Rl(e, t, r, n) {
    const s = void 0 !== r.offset || void 0 !== r.limit, o = (r.offset ?? 1) < 0, i = r.offset ?? 1, a = Math.max(0, i - 1), c = void 0 === r.limit ? void 0 : a + r.limit, l = o ? Math.abs(i) : 0, u = [];
    let d = 0, p = !1;
    const m = [];
    let h = 0, f = !1;
    const g = [];
    let y = 0, w = !1, v = {
        text: "",
        truncated: !1
    }, _ = 0, b = 0, S = 0, k = !1, x = !1;
    const E = (e)=>{
        let t = e;
        return !k && t.length > 0 && (k = !0, 65279 === t.charCodeAt(0) && (x = !0, t = t.slice(1))), t;
    }, T = (e, t)=>{
        const r = _;
        if (t && (e.text.endsWith("\r") ? b++ : S++), ((e, t)=>{
            if (p && d >= tc.p) return;
            const r = u.length > 0 ? 1 : 0;
            let n = tc.p - d;
            if (r > 0) {
                if (n <= 0) return void (p = !0);
                n--;
            }
            const s = e.text.length > n ? {
                line: {
                    text: e.text.slice(0, n),
                    truncated: !0
                },
                hasNewline: t
            } : {
                line: e,
                hasNewline: t
            };
            u.push(s), d += r + s.line.text.length, (e.truncated || s.line.truncated) && (p = !0);
        })(e, t), o) {
            if (l > 0) {
                for(g.push({
                    line: e,
                    hasNewline: t
                }), y += e.text.length + 1; g.length > l;){
                    const e = g.shift();
                    void 0 !== e && (y -= e.line.text.length + 1);
                }
                for(; g.length > 1 && y > tc.p;){
                    const e = g.shift();
                    void 0 !== e && (y -= e.line.text.length + 1, w = !0);
                }
            }
        } else {
            s && r >= a && (void 0 === c || r < c) && ((e, t)=>{
                if (f && h >= tc.p) return;
                const r = m.length > 0 ? 1 : 0;
                let n = tc.p - h;
                if (r > 0) {
                    if (n <= 0) return void (f = !0);
                    n--;
                }
                const s = e.text.length > n ? {
                    line: {
                        text: e.text.slice(0, n),
                        truncated: !0
                    },
                    hasNewline: t
                } : {
                    line: e,
                    hasNewline: t
                };
                m.push(s), h += r + s.line.text.length, e.truncated && (f = !0), s.line.truncated && (f = !0);
            })(e, t);
        }
        _++;
    };
    for await (const r of async function*(e, t, r) {
        if ("strictUtf8" === r.kind) {
            const r = new Mt.TextDecoder("utf-8", {
                fatal: !0,
                ignoreBOM: !0
            }), n = (0, I.createReadStream)(t, {
                highWaterMark: 65536,
                signal: e.signal
            });
            try {
                for await (const e of n){
                    const t = r.decode(e, {
                        stream: !0
                    });
                    t.length > 0 && (yield t);
                }
                const e = r.decode();
                e.length > 0 && (yield e);
            } catch (e) {
                if (e instanceof TypeError) throw new Pl;
                throw e;
            }
            return;
        }
        const n = (0, I.createReadStream)(t, {
            highWaterMark: 65536,
            signal: e.signal
        }).pipe(nc.decodeStream(r.decoderEncoding));
        for await (const e of n)yield "string" == typeof e ? e : String(e);
    }(e, t, n)){
        const e = E(r);
        let t = 0, n = e.indexOf("\n", t);
        for(; -1 !== n;)v = Il(v, e.slice(t, n)), T(v, !0), v = {
            text: "",
            truncated: !1
        }, t = n + 1, n = e.indexOf("\n", t);
        t < e.length && (v = Il(v, e.slice(t)));
    }
    T(v, !1);
    const C = b + S, P = C > 0 && b / C * 100 >= 5;
    !function(e, t) {
        if (xe.Yd.has(e) && xe.Yd.delete(e), xe.Yd.set(e, t), xe.Yd.size <= 100) return;
        const r = xe.Yd.keys().next().value;
        void 0 !== r && xe.Yd.delete(r);
    }(t, "utf8" === n.cacheEncoding && x ? "utf8bom" : n.cacheEncoding);
    let A = {
        text: "",
        truncated: p
    };
    if (A = Tl(A, u, P), !s) return {
        content: A.text,
        totalLines: _,
        truncated: A.truncated,
        rangeApplied: !1
    };
    if ("" === A.text) return {
        content: "",
        totalLines: _,
        truncated: !1,
        rangeApplied: !1
    };
    if (o) {
        const e = r.limit ?? l;
        let t = {
            text: "",
            truncated: w
        };
        return t = Tl(t, g.slice(0, e), P), {
            content: t.text,
            totalLines: _,
            truncated: t.truncated,
            rangeApplied: !0
        };
    }
    if (a >= _) return {
        content: A.text,
        totalLines: _,
        truncated: A.truncated,
        rangeApplied: !1
    };
    let R = {
        text: "",
        truncated: f
    };
    return R = Tl(R, m, P), {
        content: R.text,
        totalLines: _,
        truncated: R.truncated,
        rangeApplied: !0
    };
}
class Ml {
    constructor(e, t, r){
        this.permissionsService = e, this.workspacePath = t, this.mcpStateAccessor = r?.mcpStateAccessor, this.useStreamingRead = r?.useStreamingRead, this.pendingDecisionProvider = r?.pendingDecisionProvider;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            fl(r, (0, C.VI)(e.withName("LocalReadExecutor.execute")), !1);
            const o = t.path, i = (0, O.o1)(o, this.workspacePath), a = await wl(e, "permissionsService.shouldBlockFileRead", 3e3, ()=>(async function(e, t, r) {
                    return e.shouldBlockFileRead?.(t, r) ?? e.shouldBlockRead(t, r);
                })(this.permissionsService, i));
            if (a) {
                const r = await wl(e, "resolveFileReadBlock", 3e3, ()=>(async function(e, t) {
                        return await Xe(e, {
                            onNeedsApproval: async (e, r)=>{
                                const n = t.pendingDecisionProvider?.requestReadApproval?.bind(t.pendingDecisionProvider);
                                if ("fileRead" !== r.type || !n) return {
                                    kind: "denied",
                                    message: "Blocked by permissions configuration"
                                };
                                const s = await n({
                                    type: ds.Read,
                                    details: {
                                        path: r.path,
                                        reason: e
                                    },
                                    toolCallId: t.toolCallId
                                });
                                return s.approved ? null : {
                                    kind: "rejected",
                                    reason: s.reason
                                };
                            },
                            onUserRejected: (e)=>({
                                    kind: "rejected",
                                    reason: e
                                }),
                            onPermissionDenied: (e)=>({
                                    kind: "denied",
                                    message: e
                                })
                        }) ?? {
                            kind: "proceed"
                        };
                    })(a, {
                        pendingDecisionProvider: this.pendingDecisionProvider,
                        toolCallId: t.toolCallId
                    }));
                if ("rejected" === r.kind) return new rc.sV({
                    result: {
                        case: "rejected",
                        value: new rc.f4({
                            path: i,
                            reason: r.reason ?? ""
                        })
                    }
                });
                if ("denied" === r.kind) return new rc.sV({
                    result: {
                        case: "permissionDenied",
                        value: new rc.lW({
                            path: i
                        })
                    }
                });
            }
            void 0 !== this.mcpStateAccessor && No(e, this.mcpStateAccessor, i);
            try {
                const r = await wl(e, "stat", 3e3, ()=>(0, n.stat)(i));
                if (r.isDirectory()) return new rc.sV({
                    result: {
                        case: "invalidFile",
                        value: new rc.cW({
                            path: i,
                            reason: "Path is a directory, not a file"
                        })
                    }
                });
                if (!r.isFile()) return new rc.sV({
                    result: {
                        case: "invalidFile",
                        value: new rc.cW({
                            path: i,
                            reason: "Path is neither a file nor a directory"
                        })
                    }
                });
                const o = (0, ti.CM)(i), a = (0, ti.JD)(i);
                if (o || a) return await this.readTerminalFile(e, i, r, t, a && !o);
                const c = await wl(e, "getFormatForFile", 3e3, ()=>(0, xe.zV)(i)), l = c.isImageFile, u = function(e) {
                    return ".pdf" === (0, s.extname)(e).toLowerCase();
                }(i), d = (0, xe.d8)(i);
                if (l) {
                    const t = await wl(e, "resizeImageIfNeeded", 3e3, async ()=>{
                        const e = await (0, n.readFile)(i);
                        return (0, Ns.O5)(e);
                    });
                    return new rc.sV({
                        result: {
                            case: "success",
                            value: new rc.mE({
                                path: i,
                                output: {
                                    case: "data",
                                    value: t.data
                                },
                                totalLines: 0,
                                fileSize: BigInt(r.size),
                                truncated: !1
                            })
                        }
                    });
                }
                if (u) {
                    const t = await wl(e, "readPdfBinary", 3e3, ()=>(0, n.readFile)(i));
                    return new rc.sV({
                        result: {
                            case: "success",
                            value: new rc.mE({
                                path: i,
                                output: {
                                    case: "data",
                                    value: t
                                },
                                totalLines: 0,
                                fileSize: BigInt(r.size),
                                truncated: !1
                            })
                        }
                    });
                }
                if (c.isBinaryFile && d) {
                    const t = await wl(e, "readBinaryFile", 3e3, ()=>(0, n.readFile)(i));
                    return new rc.sV({
                        result: {
                            case: "success",
                            value: new rc.mE({
                                path: i,
                                output: {
                                    case: "data",
                                    value: t
                                },
                                totalLines: 0,
                                fileSize: BigInt(r.size),
                                truncated: !1
                            })
                        }
                    });
                }
                if (c.isBinaryFile) return kl(i);
                {
                    const n = this.useStreamingRead;
                    if (!n || await wl(e, "useStreamingRead", 3e3, ()=>n())) {
                        const n = await wl(e, "readTextStreaming", 7e3, ()=>(async function(e, t, r, n) {
                                const s = Al(t, r, n.encodingHint);
                                try {
                                    return await Rl(e, t, n, s);
                                } catch (r) {
                                    if (r instanceof Pl) return await Rl(e, t, n, {
                                        kind: "iconv",
                                        decoderEncoding: "latin1",
                                        cacheEncoding: "latin1"
                                    });
                                    throw r;
                                }
                            })(e, i, c, t));
                        return new rc.sV({
                            result: {
                                case: "success",
                                value: new rc.mE({
                                    path: i,
                                    output: {
                                        case: "content",
                                        value: n.content
                                    },
                                    totalLines: n.totalLines,
                                    fileSize: BigInt(r.size),
                                    truncated: n.truncated,
                                    rangeApplied: n.rangeApplied
                                })
                            }
                        });
                    }
                    const s = await wl(e, "readText", 3e3, ()=>(0, xe.yR)(i, t.encodingHint)), o = await wl(e, "countLines", 3e3, ()=>(0, xe.lt)(s)), a = xl(s, o, t);
                    let l = a.content, u = !1;
                    return l.length > tc.p && (l = l.substring(0, tc.p), u = !0), new rc.sV({
                        result: {
                            case: "success",
                            value: new rc.mE({
                                path: i,
                                output: {
                                    case: "content",
                                    value: l
                                },
                                totalLines: o,
                                fileSize: BigInt(r.size),
                                truncated: u,
                                rangeApplied: a.rangeApplied
                            })
                        }
                    });
                }
            } catch (e) {
                const t = e;
                return "ENOENT" === t.code ? new rc.sV({
                    result: {
                        case: "fileNotFound",
                        value: new rc.Ko({
                            path: i
                        })
                    }
                }) : "EACCES" === t.code || "EPERM" === t.code ? new rc.sV({
                    result: {
                        case: "permissionDenied",
                        value: new rc.lW({
                            path: i
                        })
                    }
                }) : new rc.sV({
                    result: {
                        case: "error",
                        value: new rc.F_({
                            path: i,
                            error: t instanceof Error ? t.message : "Unknown error occurred"
                        })
                    }
                });
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            gl(r);
        }
    }
    async readTerminalFile(e, t, r, s, o) {
        const i = await wl(e, "readTerminalFile", 3e3, ()=>(0, n.readFile)(t));
        if (o && (a = i, Sl.some((e)=>(function(e, t) {
                return e.length >= t.length && e.subarray(0, t.length).equals(t);
            })(a, e)))) return kl(t);
        var a;
        let c = bl(i).replaceAll("\r\n", "\n");
        const l = (0, xe.lt)(c), u = xl(c, l, s);
        c = u.content;
        let d = !1;
        return c.length > tc.p && (c = c.substring(0, tc.p), d = !0), new rc.sV({
            result: {
                case: "success",
                value: new rc.mE({
                    path: t,
                    output: {
                        case: "content",
                        value: c
                    },
                    totalLines: l,
                    fileSize: BigInt(r.size),
                    truncated: d,
                    rangeApplied: u.rangeApplied
                })
            }
        });
    }
}
var Jl = require("./module-11531.js"), Ol = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Bl = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function Dl(e) {
    return null !== e.exitCode || null !== e.signalCode || e.killed;
}
function ql(e, t) {
    return "object" == typeof e && null !== e && "code" in e && e.code === t;
}
function Nl(e) {
    return e instanceof Error ? e.message : String(e);
}
function Fl(e, t, r, n) {
    const s = [], o = function(e, t) {
        const r = e.ffmpegExitCode ?? e.childProcess.exitCode, n = e.ffmpegExitSignal ?? e.childProcess.signalCode;
        if (!e.ffmpegDiedEarly && null === e.ffmpegDiedTime && null === r && null === n) return;
        return `ffmpeg exited code=${r} signal=${n}${null !== e.ffmpegDiedTime ? ` ${Math.max(0, Math.round((t - e.ffmpegDiedTime) / 1e3))}s before SAVE` : ""}`;
    }(t, n);
    return void 0 !== o && s.push(o), void 0 !== r && s.push(`stop failed: ${Nl(r)}`), s.length > 0 ? `${e} (${s.join("; ")})` : e;
}
const Ul = (0, Mt.promisify)(un.execFile);
class Ll {
    constructor(e){
        if (this.activeRecording = null, this.inFlightSaves = [], this.onRecordingStartedCallback = null, this.onRecordingStoppedCallback = null, this.recordingStoppedCallbackInvoked = !1, this.artifactsDir = e.artifactsDir, this.stagingDir = e.stagingDir ?? "/opt/cursor/recording-staging/", this.display = e.display, this.disablePolishedRendering = e.disablePolishedRendering ?? !1, this.polishedRenderer = e.polishedRenderer, !this.disablePolishedRendering) {
            if (!this.polishedRenderer) throw new Error("record_screen requires a polished recording renderer when polished rendering is enabled. This tool should run via exec-daemon where that dependency is bundled.");
            this.polishedRenderer.assertAvailable();
        }
    }
    setOnRecordingStarted(e) {
        this.onRecordingStartedCallback = e;
    }
    setOnRecordingStopped(e) {
        this.onRecordingStoppedCallback = e;
    }
    invokeStoppedCallbackOnce() {
        !this.recordingStoppedCallbackInvoked && this.onRecordingStoppedCallback && (this.recordingStoppedCallbackInvoked = !0, this.onRecordingStoppedCallback());
    }
    async cleanupRecording(e) {
        try {
            await e.inputEventLogger.stop();
        } catch  {}
        if (!Dl(e.childProcess) && e.childProcess.pid) try {
            await this.stopFfmpegRecording(e);
        } catch  {
            try {
                process.kill(e.childProcess.pid, "SIGKILL");
            } catch  {}
        }
    }
    getActiveInputEventLogger() {
        return this.activeRecording?.inputEventLogger ?? null;
    }
    async dispose() {
        const e = this.inFlightSaves.map((e)=>e.promise);
        if (e.length > 0) try {
            await (0, ke.wj)(Promise.all(e), Ll.IN_FLIGHT_SAVE_DISPOSE_TIMEOUT_MS, "Timed out waiting for in-flight recording save");
        } catch  {}
        if (this.activeRecording) {
            await this.cleanupRecording(this.activeRecording), this.invokeStoppedCallbackOnce();
            try {
                await n.rm(this.activeRecording.sessionDir, {
                    force: !0,
                    recursive: !0
                });
            } catch  {}
            this.activeRecording = null;
        }
    }
    findInFlightSave(e) {
        return this.inFlightSaves.find((t)=>t.state === e);
    }
    clearActiveRecordingIfCurrent(e) {
        this.activeRecording === e && (this.activeRecording = null);
    }
    invokeStoppedCallbackIfCurrent(e) {
        this.activeRecording === e && this.invokeStoppedCallbackOnce();
    }
    sanitizeToolCallId(e) {
        return e.replace(/[^a-zA-Z0-9_-]/g, "_");
    }
    async ensureRecordingDirectoryExists() {
        await n.mkdir(this.stagingDir, {
            recursive: !0
        }), await n.mkdir(this.artifactsDir, {
            recursive: !0
        });
    }
    buildSessionDir(e) {
        const t = this.sanitizeToolCallId(e), r = `session-${(new Date).toISOString().replace(/[:.]/g, "-")}-${t}`;
        return s.join(this.stagingDir, r);
    }
    validateAndNormalizeSaveAsFilename(e) {
        let t = e.trim();
        return t.startsWith(this.artifactsDir) && (t = t.slice(this.artifactsDir.length), t.startsWith("/") && (t = t.slice(1))), t = t.trim(), 0 === t.length ? {
            success: !1,
            reason: Jl.y.UNSPECIFIED
        } : t.includes("/") || t.includes("\\") ? {
            success: !1,
            reason: Jl.y.SLASHES_NOT_ALLOWED
        } : (t = t.replace(/[^a-zA-Z0-9 ._-]/g, "_"), t = t.trim(), 0 === t.length ? {
            success: !1,
            reason: Jl.y.UNSPECIFIED
        } : (t.length > 128 && (t = t.slice(0, 128).trim()), t.toLowerCase().endsWith(".mp4") || (t = `${t}.mp4`), {
            success: !0,
            filename: t
        }));
    }
    async movePolishedVideo(e, t) {
        try {
            return void await n.rename(e, t);
        } catch (e) {
            if (!ql(e, "EXDEV")) throw e;
        }
        try {
            await n.copyFile(e, t);
        } catch (e) {
            throw await n.rm(t, {
                force: !0
            }).catch(()=>{}), e;
        }
        try {
            await n.unlink(e);
        } catch (e) {
            throw await n.rm(t, {
                force: !0
            }).catch(()=>{}), e;
        }
    }
    async getUniqueArtifactVideoPath(e) {
        const t = s.parse(e), r = t.name || "recording", o = t.ext || ".mp4";
        let i = `${r}${o}`, a = 2;
        for(;;){
            const e = s.join(this.artifactsDir, i);
            try {
                const t = await n.open(e, "wx");
                return await t.close(), e;
            } catch (e) {
                if (!ql(e, "EEXIST")) throw e;
                i = `${r}-${a}${o}`, a++;
            }
        }
    }
    async resolveArtifactVideoPath(e) {
        const { saveAsFilename: t, stagingSessionDir: r } = e;
        let n, o;
        if (t) {
            const e = this.validateAndNormalizeSaveAsFilename(t);
            e.success ? o = e.filename : (n = e.reason, o = `${s.basename(r)}.mp4`);
        } else o = `${s.basename(r)}.mp4`;
        return {
            finalVideoPath: await this.getUniqueArtifactVideoPath(o),
            requestedFilePathRejectedReason: n
        };
    }
    async getVideoDurationMs(e) {
        const { stdout: t } = await (0, dn.D9)(Ul, "ffprobe", [
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            e
        ], {
            encoding: "utf8"
        }), r = parseFloat(t.trim());
        if (!Number.isFinite(r) || r < 0) throw new Error(`Invalid video duration from ffprobe: ${t.trim()}`);
        return Math.floor(1e3 * r);
    }
    async getVideoDimensions(e) {
        const { stdout: t } = await (0, dn.D9)(Ul, "ffprobe", [
            "-v",
            "error",
            "-select_streams",
            "v:0",
            "-show_entries",
            "stream=width,height",
            "-of",
            "csv=p=0:s=x",
            e
        ], {
            encoding: "utf8"
        }), [r, n] = t.trim().split("x"), s = Number.parseInt(r, 10), o = Number.parseInt(n, 10);
        if (!Number.isFinite(s) || !Number.isFinite(o)) throw new Error(`Invalid video dimensions from ffprobe: ${t.trim()}`);
        if (s <= 0 || o <= 0) throw new Error(`Invalid non-positive video dimensions from ffprobe: ${t.trim()}`);
        return {
            width: s,
            height: o
        };
    }
    async renderPolished(e) {
        const t = s.join(e, "recording"), r = s.join(t, "recording_full.mp4");
        return await this.polishedRenderer.renderRecordingSession({
            stagingSessionDir: e,
            outputVideoPath: r,
            fps: Ll.PROXY_TARGET_FPS,
            includeBrandTag: !0
        }), await n.access(r, n.constants.R_OK), r;
    }
    async getVideoFramerate(e) {
        try {
            const { stdout: t } = await (0, dn.D9)(Ul, "ffprobe", [
                "-v",
                "error",
                "-select_streams",
                "v:0",
                "-show_entries",
                "stream=r_frame_rate",
                "-of",
                "default=noprint_wrappers=1:nokey=1",
                e
            ], {
                encoding: "utf8"
            }), r = t.trim();
            if (r.includes("/")) {
                const [e, t] = r.split("/"), n = Number.parseFloat(e), s = Number.parseFloat(t);
                if (Number.isFinite(n) && Number.isFinite(s) && 0 !== s) {
                    const e = n / s;
                    if (e > 0 && e < 500) return Math.round(e);
                }
            } else {
                const e = Number.parseFloat(r);
                if (Number.isFinite(e) && e > 0 && e < 500) return Math.round(e);
            }
            console.warn(`[record-screen] Unexpected ffprobe r_frame_rate output "${r}", defaulting to ${Ll.PROXY_TARGET_FPS}fps`);
        } catch (e) {
            console.warn(`[record-screen] Failed to read video framerate: ${e instanceof Error ? e.message : String(e)}, defaulting to ${Ll.PROXY_TARGET_FPS}fps`);
        }
        return Ll.PROXY_TARGET_FPS;
    }
    async startFfmpegRecording(e, t) {
        const r = s.join(t, "recording");
        await n.mkdir(r, {
            recursive: !0
        });
        const o = s.join(r, "recording_render_proxy_1080p.mp4");
        let i;
        try {
            i = (await gn(this.display)).display.refreshRate;
        } catch (e) {
            console.warn(`[record-screen] Failed to detect refresh rate: ${e instanceof Error ? e.message : String(e)}, using default ${Ll.DEFAULT_REFRESH_RATE}Hz`), i = Ll.DEFAULT_REFRESH_RATE;
        }
        const a = [
            "-video_size",
            e,
            "-framerate",
            String(i),
            "-draw_mouse",
            "0",
            "-f",
            "x11grab",
            "-i",
            this.display,
            "-vf",
            `scale=${Ll.PROXY_TARGET_WIDTH}:-2:flags=lanczos,fps=${Ll.PROXY_TARGET_FPS}`,
            "-c:v",
            "libx264",
            "-preset",
            Ll.PROXY_PRESET,
            "-crf",
            String(Ll.PROXY_CRF),
            "-pix_fmt",
            "yuv420p",
            "-profile:v",
            "high",
            "-x264-params",
            "keyint=1:min-keyint=1:scenecut=0:bframes=0",
            "-movflags",
            "+faststart",
            "-tune",
            "fastdecode",
            "-y",
            o
        ], c = (0, dn.D9)(un.spawn, "ffmpeg", a, {
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            detached: !0
        }), l = new Promise((e, t)=>{
            let r = "", n = !1;
            c.stderr?.on("data", (t)=>{
                r += t.toString(), !n && r.includes("frame=") && (n = !0, e(Date.now()));
            });
            const s = setTimeout(()=>{
                n || t(new Error("ffmpeg did not start encoding within 5 seconds"));
            }, 5e3);
            c.once("exit", (e, r)=>{
                clearTimeout(s), n || t(new Error(`ffmpeg exited before starting: code=${e} signal=${r}`));
            }), c.once("error", (e)=>{
                clearTimeout(s), n || t(new Error(`ffmpeg failed to start: ${e.message}`));
            });
        });
        return await new Promise((e, t)=>{
            const r = setTimeout(e, 300);
            c.once("error", (e)=>{
                clearTimeout(r), t(new Error(`Failed to start ffmpeg: ${e.message}`));
            }), c.once("exit", (e, n)=>{
                clearTimeout(r), t(null !== e && 0 !== e ? new Error(`ffmpeg exited with code ${e}`) : null !== n ? new Error(`ffmpeg killed by signal ${n}`) : new Error("ffmpeg exited unexpectedly during startup"));
            });
        }), {
            process: c,
            videoStartedPromise: l
        };
    }
    async runFfmpegCommand(e, t) {
        return await new Promise((r, n)=>{
            const s = (0, dn.D9)(un.spawn, "ffmpeg", t, {
                stdio: [
                    "ignore",
                    "ignore",
                    "pipe"
                ]
            });
            let o = "";
            s.stderr?.on("data", (e)=>{
                o.length < 2e4 && (o += e.toString());
            }), s.once("error", (t)=>{
                n(new Error(`ffmpeg ${e} failed to start: ${t instanceof Error ? t.message : String(t)}`));
            }), s.once("close", (t)=>{
                0 === t ? r() : n(new Error(`ffmpeg ${e} exited with code ${t}: ${o.trim()}`));
            });
        });
    }
    async saveRecordingDataPackage(e) {
        const { sessionDir: t, durationMs: r, recordingStartEpochMs: o, ffmpegStartedEpochMs: i, inputEvents: a, resolution: c, renderProxies: l } = e, u = s.join(t, "recording"), d = s.join(u, "recording-data.json"), p = i - o, m = a.map((e)=>({
                executionTimestampMs: e.executionTimestampMs,
                commandDurationMs: e.commandDurationMs,
                positionBefore: e.positionBefore,
                positionAfter: e.positionAfter,
                cursorTypeAfter: e.cursorTypeAfter,
                action: {
                    action: this.serializeAction(e.action)
                }
            })), h = {
            version: 3,
            durationMs: r,
            recordingStartEpochMs: o,
            ffmpegStartedEpochMs: i,
            eventToVideoOffsetMs: p,
            displayWidth: c.display.width,
            displayHeight: c.display.height,
            apiWidth: c.api.width,
            apiHeight: c.api.height,
            inputEvents: m,
            renderProxies: l ?? null
        };
        await n.writeFile(d, JSON.stringify(h, null, 2));
    }
    serializeAction(e) {
        const { action: t } = e, r = {
            case: t.case
        };
        switch(t.case){
            case "click":
                r.value = {
                    coordinate: t.value.coordinate ? {
                        x: t.value.coordinate.x,
                        y: t.value.coordinate.y
                    } : null,
                    button: t.value.button,
                    count: t.value.count,
                    modifierKeys: t.value.modifierKeys
                };
                break;
            case "mouseMove":
                r.value = {
                    coordinate: t.value.coordinate ? {
                        x: t.value.coordinate.x,
                        y: t.value.coordinate.y
                    } : null
                };
                break;
            case "type":
                r.value = {
                    text: t.value.text
                };
                break;
            case "key":
                r.value = {
                    key: t.value.key,
                    holdDurationMs: t.value.holdDurationMs
                };
                break;
            case "scroll":
                r.value = {
                    coordinate: t.value.coordinate ? {
                        x: t.value.coordinate.x,
                        y: t.value.coordinate.y
                    } : null,
                    direction: t.value.direction,
                    amount: t.value.amount,
                    modifierKeys: t.value.modifierKeys
                };
                break;
            case "drag":
                r.value = {
                    path: t.value.path.map((e)=>({
                            x: e.x,
                            y: e.y
                        })),
                    button: t.value.button
                };
                break;
            case "wait":
                r.value = {
                    durationMs: t.value.durationMs
                };
                break;
            case "screenshot":
            case "cursorPosition":
            case "mouseDown":
            case "mouseUp":
                r.value = t.value;
                break;
            default:
                r.value = {};
        }
        return r;
    }
    async stopFfmpegRecording(e) {
        const { childProcess: t } = e;
        if (Dl(t) || !t.pid) return;
        const r = t.pid;
        return new Promise((e, n)=>{
            const s = setTimeout(()=>{
                try {
                    try {
                        process.kill(-r, "SIGKILL");
                    } catch  {
                        process.kill(r, "SIGKILL");
                    }
                } catch  {}
                n(new Error("Timeout waiting for ffmpeg to stop"));
            }, 2e4);
            t.once("exit", ()=>{
                clearTimeout(s), e();
            }), t.once("error", (e)=>{
                clearTimeout(s), n(new Error(`Error stopping ffmpeg: ${e.message}`));
            });
            try {
                try {
                    process.kill(-r, "SIGTERM");
                } catch  {
                    process.kill(r, "SIGTERM");
                }
            } catch (t) {
                if (clearTimeout(s), ql(t, "ESRCH")) return void e();
                n(new Error(`Failed to send SIGTERM: ${t instanceof Error ? t.message : String(t)}`));
            }
        });
    }
    async performSave(e, t) {
        const r = Date.now();
        try {
            const o = await t.inputEventLogger.stop(), i = t.inputEventLogger.getRecordingStartTime();
            let a;
            this.invokeStoppedCallbackIfCurrent(t);
            try {
                !Dl(t.childProcess) && t.childProcess.pid && await this.stopFfmpegRecording(t);
            } catch (e) {
                a = e, console.warn(`[record-screen] Failed to stop ffmpeg: ${Nl(e)}`);
            }
            const c = t.ffmpegStartedEpochMs ?? i, l = t.sessionDir, u = s.join(l, "recording"), d = s.join(u, "recording_render_proxy_1080p.mp4");
            let p, m, h;
            try {
                await n.access(d, n.constants.R_OK);
            } catch (e) {
                await this.cleanupRecording(t), this.clearActiveRecordingIfCurrent(t);
                const n = ql(e, "ENOENT") ? `Recording proxy not found at ${d}` : `Recording proxy at ${d} could not be validated: ${Nl(e)}`;
                return new Jl.Tj({
                    result: {
                        case: "failure",
                        value: new Jl.yH({
                            error: Fl(n, t, a, r)
                        })
                    }
                });
            }
            try {
                if ([p, m, h] = await Promise.all([
                    this.getVideoDurationMs(d),
                    this.getVideoDimensions(d),
                    this.getVideoFramerate(d)
                ]), p <= 0) throw new Error(`Recording proxy has zero duration at ${d}`);
            } catch (e) {
                await this.cleanupRecording(t);
                const n = Nl(e), s = n.includes(d) ? n : `Recording proxy at ${d} could not be validated: ${n}`;
                return new Jl.Tj({
                    result: {
                        case: "failure",
                        value: new Jl.yH({
                            error: Fl(s, t, a, r)
                        })
                    }
                });
            }
            const f = {
                profileVersion: Ll.PROXY_PROFILE_VERSION,
                generatedAtEpochMs: Date.now(),
                source: {
                    width: m.width,
                    height: m.height,
                    durationMs: p,
                    fps: h
                },
                artifacts: [
                    {
                        name: "render_proxy_1080p",
                        path: "recording_render_proxy_1080p.mp4",
                        width: m.width,
                        height: m.height,
                        fps: Ll.PROXY_TARGET_FPS,
                        codec: "h264",
                        profile: Ll.PROXY_PROFILE_VERSION,
                        keyint: 1,
                        status: "success",
                        elapsedMs: 0
                    }
                ]
            };
            await this.saveRecordingDataPackage({
                sessionDir: l,
                durationMs: p,
                recordingStartEpochMs: i,
                ffmpegStartedEpochMs: c,
                inputEvents: o,
                resolution: t.resolution,
                renderProxies: f
            });
            const { finalVideoPath: g, requestedFilePathRejectedReason: y } = await this.resolveArtifactVideoPath({
                saveAsFilename: e.saveAsFilename,
                stagingSessionDir: l
            });
            try {
                if (this.disablePolishedRendering) await n.copyFile(d, g);
                else {
                    const e = await this.renderPolished(l);
                    await this.movePolishedVideo(e, g);
                }
            } catch (e) {
                throw await n.rm(g, {
                    force: !0
                }).catch(()=>{}), e;
            }
            try {
                await n.rm(l, {
                    force: !0,
                    recursive: !0
                });
            } catch (e) {
                console.warn(`[record-screen] Failed to remove staging session ${l}: ${Nl(e)}`);
            }
            return this.clearActiveRecordingIfCurrent(t), new Jl.Tj({
                result: {
                    case: "saveSuccess",
                    value: new Jl.ol({
                        path: g,
                        recordingDurationMs: bn.protoInt64.parse(p.toString()),
                        requestedFilePathRejectedReason: y
                    })
                }
            });
        } catch (e) {
            return await this.cleanupRecording(t), this.invokeStoppedCallbackIfCurrent(t), new Jl.Tj({
                result: {
                    case: "failure",
                    value: new Jl.yH({
                        error: Nl(e)
                    })
                }
            });
        }
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Ol(r, (0, C.VI)(e.withName("LocalRecordScreenExecutor.execute")), !1);
            try {
                await this.ensureRecordingDirectoryExists();
            } catch (e) {
                return new Jl.Tj({
                    result: {
                        case: "failure",
                        value: new Jl.yH({
                            error: `Failed to create recording directory: ${e instanceof Error ? e.message : String(e)}. Ensure the parent directory exists and has write permissions, or run: sudo mkdir -p ${this.stagingDir} ${this.artifactsDir} && sudo chmod 777 ${this.stagingDir} ${this.artifactsDir}`
                        })
                    }
                });
            }
            if (t.mode === Jl.$u.UNSPECIFIED) return new Jl.Tj({
                result: {
                    case: "failure",
                    value: new Jl.yH({
                        error: "Mode must be one of START_RECORDING, SAVE_RECORDING, DISCARD_RECORDING"
                    })
                }
            });
            switch(t.mode){
                case Jl.$u.START_RECORDING:
                    {
                        this.recordingStoppedCallbackInvoked = !1;
                        let e = !1;
                        if (this.activeRecording) {
                            const t = this.activeRecording;
                            if (!this.inFlightSaves.some((e)=>e.state === t)) {
                                e = !0;
                                try {
                                    await this.cleanupRecording(t), await n.rm(t.sessionDir, {
                                        force: !0,
                                        recursive: !0
                                    }).catch(()=>{});
                                } catch  {}
                            }
                            this.activeRecording = null;
                        }
                        let r = null, s = null, o = null;
                        try {
                            o = this.buildSessionDir(t.toolCallId || "recording"), await n.mkdir(o, {
                                recursive: !0
                            });
                            const { resolutionString: i, resolution: a } = await gn(this.display), { process: c, videoStartedPromise: l } = await this.startFfmpegRecording(i, o);
                            r = c;
                            const u = function(e) {
                                const t = e.lastIndexOf(":");
                                if (-1 === t) throw new Error(`Invalid X11 display string: ${e} (missing ':')`);
                                const r = e.slice(t + 1).split(".")[0], n = parseInt(r, 10);
                                if (!Number.isFinite(n) || n < 0) throw new Error(`Invalid X11 display number in: ${e} (parsed: ${r})`);
                                return n;
                            }(this.display);
                            s = new Tn({
                                displayNum: u,
                                resolution: a
                            }), await s.start();
                            const d = s.getRecordingStartTime();
                            let p;
                            try {
                                p = await l;
                            } catch (e) {
                                throw new Error(`ffmpeg failed to start encoding: ${e instanceof Error ? e.message : String(e)}`);
                            }
                            const m = {
                                childProcess: r,
                                sessionDir: o,
                                startTime: d,
                                inputEventLogger: s,
                                resolution: a,
                                ffmpegStartedEpochMs: p,
                                ffmpegDiedEarly: !1,
                                ffmpegDiedTime: null,
                                ffmpegExitCode: null,
                                ffmpegExitSignal: null
                            };
                            this.activeRecording = m, this.onRecordingStartedCallback && this.onRecordingStartedCallback(s), r.once("exit", (e, t)=>{
                                m.ffmpegDiedEarly = !0, m.ffmpegDiedTime = Date.now(), m.ffmpegExitCode = e, m.ffmpegExitSignal = t;
                            });
                            const h = !!t.saveAsFilename;
                            return new Jl.Tj({
                                result: {
                                    case: "startSuccess",
                                    value: new Jl.T4({
                                        wasPriorRecordingCancelled: e,
                                        wasSaveAsFilenameIgnored: h
                                    })
                                }
                            });
                        } catch (e) {
                            if (s) try {
                                await s.stop();
                            } catch  {}
                            if (r && !r.killed && r.pid) try {
                                process.kill(r.pid, "SIGKILL");
                            } catch  {}
                            return o && await n.rm(o, {
                                force: !0,
                                recursive: !0
                            }).catch(()=>{}), this.activeRecording = null, new Jl.Tj({
                                result: {
                                    case: "failure",
                                    value: new Jl.yH({
                                        error: e instanceof Error ? e.message : String(e)
                                    })
                                }
                            });
                        }
                    }
                case Jl.$u.SAVE_RECORDING:
                    {
                        if (!this.activeRecording) return 1 === this.inFlightSaves.length ? await this.inFlightSaves[0].promise : new Jl.Tj({
                            result: {
                                case: "failure",
                                value: new Jl.yH({
                                    error: "No active recording to save"
                                })
                            }
                        });
                        const e = this.activeRecording, r = this.findInFlightSave(e);
                        if (r) return await r.promise;
                        const n = Promise.resolve().then(()=>this.performSave(t, e)), s = {
                            state: e,
                            promise: n
                        };
                        this.inFlightSaves.push(s);
                        try {
                            return await n;
                        } finally{
                            this.inFlightSaves = this.inFlightSaves.filter((e)=>e !== s);
                        }
                    }
                case Jl.$u.DISCARD_RECORDING:
                    {
                        if (!this.activeRecording) return new Jl.Tj({
                            result: {
                                case: "failure",
                                value: new Jl.yH({
                                    error: "No active recording to discard"
                                })
                            }
                        });
                        const e = this.activeRecording;
                        if (this.findInFlightSave(e)) return new Jl.Tj({
                            result: {
                                case: "failure",
                                value: new Jl.yH({
                                    error: "Save in progress for this recording; wait for it or start a new recording"
                                })
                            }
                        });
                        try {
                            return await e.inputEventLogger.stop(), this.invokeStoppedCallbackOnce(), !Dl(e.childProcess) && e.childProcess.pid && await this.stopFfmpegRecording(e), await n.rm(e.sessionDir, {
                                force: !0,
                                recursive: !0
                            }), this.activeRecording = null, new Jl.Tj({
                                result: {
                                    case: "discardSuccess",
                                    value: new Jl.N8
                                }
                            });
                        } catch (t) {
                            await this.cleanupRecording(e), this.invokeStoppedCallbackOnce();
                            const r = e.sessionDir;
                            let s = !1;
                            try {
                                await n.rm(r, {
                                    force: !0,
                                    recursive: !0
                                }), s = !0;
                            } catch  {}
                            this.activeRecording = null;
                            const o = t instanceof Error ? t.message : String(t), i = s ? "" : `. Session may remain at: ${r}`;
                            return new Jl.Tj({
                                result: {
                                    case: "failure",
                                    value: new Jl.yH({
                                        error: `Failed to discard recording: ${o}${i}`
                                    })
                                }
                            });
                        }
                    }
                default:
                    {
                        const e = t.mode;
                        return new Jl.Tj({
                            result: {
                                case: "failure",
                                value: new Jl.yH({
                                    error: `Unhandled recording mode: ${e}`
                                })
                            }
                        });
                    }
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Bl(r);
        }
    }
}
Ll.IN_FLIGHT_SAVE_DISPOSE_TIMEOUT_MS = 3e4, Ll.PROXY_TARGET_WIDTH = 1920, Ll.PROXY_TARGET_FPS = 60, Ll.PROXY_CRF = 17, Ll.PROXY_PRESET = "veryfast", Ll.PROXY_PROFILE_VERSION = "render-proxy-h264-all-i-v1", Ll.DEFAULT_REFRESH_RATE = 60;
var $l = require("./module-89396.js");
async function jl(e) {
    const t = await (0, n.readdir)(e, {
        withFileTypes: !0
    }).catch(()=>[]), r = [];
    for (const n of t){
        const t = s.join(e, n.name), o = {
            name: n.name,
            path: t,
            isDirectory: n.isDirectory()
        };
        n.isDirectory() && (o.children = await jl(t)), r.push(o);
    }
    return r.sort((e, t)=>e.isDirectory && !t.isDirectory ? -1 : !e.isDirectory && t.isDirectory ? 1 : e.name.localeCompare(t.name));
}
function Gl(e, t = "", r = !0) {
    const n = [
        `${t}${r ? "└── " : "├── "}${e.isDirectory ? `${e.name}/` : e.name}`
    ], s = e.children;
    if (s?.length) {
        const e = t + (r ? "    " : "│   ");
        s.forEach((t, r)=>{
            const o = r === s.length - 1;
            n.push(...Gl(t, e, o));
        });
    }
    return n;
}
async function zl(e) {
    if (!await (0, n.access)(e, n.constants.R_OK).then(()=>!0, ()=>!1)) return "(No notes directory yet - will be created when you write your first note)";
    const t = await jl(e);
    return 0 === t.length ? "(Notes directory is empty)" : t.flatMap((e, r)=>Gl(e, "", r === t.length - 1)).join("\n");
}
async function Wl(e, t) {
    return zl(s.join(e, "agent-notes", t));
}
async function Hl(e) {
    return zl(s.join(e, "agent-notes", "shared"));
}
var Kl = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Vl = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const Yl = (0, T.h)("local-exec:request-context");
async function Ql(e, t, r, n) {
    const s = {
        stack: [],
        error: void 0,
        hasError: !1
    };
    try {
        Kl(s, (0, C.VI)(e.withName("LocalRequestContextExecutor.getGitStatusForRepoPath")), !1);
        try {
            return (await t.exec(e, r, [
                "--no-optional-locks",
                "status",
                "--short",
                "--branch"
            ], {
                timeout: n,
                caller: "getGitStatusForRepoPath"
            })).stdout;
        } catch  {
            return;
        }
    } catch (e) {
        s.error = e, s.hasError = !0;
    } finally{
        Vl(s);
    }
}
async function Xl(e, t, r, n) {
    try {
        const s = (await t.exec(e, r, [
            "rev-parse",
            "--abbrev-ref",
            "HEAD"
        ], {
            timeout: n,
            caller: "getGitBranchForRepoPath"
        })).stdout.trim();
        if ("HEAD" === s || 0 === s.length) return;
        return s;
    } catch  {
        return;
    }
}
async function Zl(e, t, r) {
    const [n, s] = await Promise.all([
        e.getDefaultNetworkAllowlist(),
        e.getNetworkAccessControls()
    ]), o = [
        ...s.allowlist
    ], i = `${t}/.cursor/sandbox.json`, a = await (0, R.tv)(i, t);
    if (a && "insecure_none" !== a.type && a.networkPolicy?.allow && o.push(...a.networkPolicy.allow), r) {
        const e = `${r}/.cursor/sandbox.json`, t = await (0, R.tv)(e, r);
        t && "insecure_none" !== t.type && t.networkPolicy?.allow && o.push(...t.networkPolicy.allow);
    }
    const c = [
        ...new Set(o)
    ];
    return {
        hasDefaults: n.available && n.allowlist.length > 0,
        explicitEntries: c
    };
}
async function eu(e, t) {
    const r = [], n = `${e}/.cursor/sandbox.json`, s = await (0, R.tv)(n, e);
    if (s && "insecure_none" !== s.type && s.networkPolicy?.allow && r.push(...s.networkPolicy.allow), t) {
        const e = `${t}/.cursor/sandbox.json`, n = await (0, R.tv)(e, t);
        n && "insecure_none" !== n.type && n.networkPolicy?.allow && r.push(...n.networkPolicy.allow);
    }
    return [
        ...new Set(r)
    ];
}
async function tu(e, t, r = {}) {
    const { projectDir: n, notesSessionId: s, metaAgentNotesEnabled: o, getSmartModeClassifierAutoModeEnabled: i, devForceNextSmartModeClassifierBlockToken: a, isWorkingDirHomeDir: c, getSandboxEnabled: l, getSandboxSupported: u, getNetworkAllowlistInfo: d, userTerminalHint: p, artifactsFolder: m, secretRedactionEnabled: h, getComputerUseSupported: f, getMockPromptTime: g } = r, y = `${ge.platform()} ${ge.release()}`, w = (0, R.G6)(p), v = g?.(), _ = (()=>{
        try {
            return (new Intl.DateTimeFormat).resolvedOptions().timeZone ?? void 0;
        } catch  {
            return;
        }
    })(), b = n, S = n ? `${n}/terminals` : void 0, k = n && !0 !== o ? `${n}/agent-notes/shared` : void 0, x = n && s ? `${n}/agent-notes/${s}` : void 0, E = n ? `${n}/agent-transcripts` : void 0, I = !!l && l(), T = u?.(), C = i?.();
    let P;
    if (d) try {
        P = await d();
    } catch  {
        P = void 0;
    }
    return new $l.GE({
        osVersion: y,
        workspacePaths: t,
        shell: w,
        sandboxEnabled: I,
        projectFolder: b,
        terminalsFolder: S,
        agentSharedNotesFolder: k,
        agentConversationNotesFolder: x,
        agentTranscriptsFolder: E,
        timeZone: _,
        processWorkingDirectory: process.cwd(),
        artifactsFolder: m,
        ...void 0 !== C && {
            smartModeClassifierAutoModeEnabled: C
        },
        ...void 0 !== a && {
            devForceNextSmartModeClassifierBlockToken: a
        },
        ...void 0 !== v && {
            devMockPromptTime: bn.Timestamp.fromDate(v)
        },
        ...void 0 !== h && {
            secretRedactionEnabled: h
        },
        ...void 0 !== T && {
            sandboxSupported: T
        },
        ...void 0 !== P?.hasDefaults && {
            sandboxNetworkHasDefaults: P.hasDefaults
        },
        ...P?.explicitEntries && P.explicitEntries.length > 0 && {
            sandboxNetworkExplicitAllowlist: P.explicitEntries
        },
        ...void 0 !== f && {
            computerUseSupported: f()
        },
        ...void 0 !== c && {
            isWorkingDirHomeDir: c
        }
    });
}
const ru = {
    type: "object",
    properties: {},
    additionalProperties: !1
};
function nu(e, t) {
    return {
        tools: (!0 === t?.internalBrowserProvidersOnly ? e.servers.filter((e)=>m.rFE.has(e.serverIdentifier)) : e.servers).flatMap((e)=>e.tools).map((e)=>new fs.gd({
                name: e.name,
                providerIdentifier: e.providerIdentifier,
                toolName: e.toolName,
                description: e.description,
                ...!0 === t?.inputSchemaJson ? {
                    inputSchemaJson: void 0 === e.inputSchema ? void 0 : JSON.stringify(e.inputSchema)
                } : {
                    inputSchema: e.inputSchema ? bn.Value.fromJson(e.inputSchema) : void 0
                }
            })),
        mcpInstructions: e.servers.flatMap((e)=>e.instructions)
    };
}
function su(e, t) {
    const r = !0 === t?.slimDescriptors, n = e.servers.map((e)=>{
        const n = e.instructions.map((e)=>e.instructions).filter(Boolean).join("\n"), s = e.tools.map((e)=>new fs.E$({
                toolName: e.toolName,
                ...(0, Fs.hT)(e.annotations),
                ...r ? {} : {
                    description: e.description,
                    ...!0 === t?.inputSchemaJson ? {
                        inputSchemaJson: void 0 === e.inputSchema ? void 0 : JSON.stringify(e.inputSchema)
                    } : {
                        inputSchema: void 0 !== e.inputSchema ? bn.Value.fromJson(e.inputSchema) : void 0
                    }
                }
            }));
        return !(0, m.N1y)(e.serverIdentifier) || !0 !== t?.alwaysExposeVirtualMcpAuthTool && "needsAuth" !== e.status || s.some((e)=>e.toolName === ro) || s.push(new fs.E$({
            toolName: ro,
            ...r ? {} : {
                description: no,
                ...!0 === t?.inputSchemaJson ? {
                    inputSchemaJson: JSON.stringify(ru)
                } : {
                    inputSchema: bn.Value.fromJson(ru)
                }
            }
        })), new fs.UC({
            serverIdentifier: e.serverIdentifier,
            serverName: e.serverName,
            plugin: e.plugin,
            marketplace: e.marketplace,
            pluginDbId: e.pluginId,
            marketplaceId: e.marketplaceId,
            serverUseInstructions: n || void 0,
            tools: s
        });
    });
    return new fs.U_({
        enabled: !0,
        mcpDescriptors: n
    });
}
function ou(e) {
    const t = e?.trim();
    return t || void 0;
}
function iu(e, t) {
    const r = function(e) {
        return ou(e.serverIdentifier);
    }(e);
    if (r) return r;
    const n = ou(e.serverName);
    return n ? t.get(n) ?? n : void 0;
}
function au(e, t, r) {
    const n = new Map;
    for (const t of e)n.has(t.providerIdentifier) || n.set(t.providerIdentifier, t.clientKey);
    const s = t.map((e)=>iu(e, n)).filter((e)=>Boolean(e));
    return {
        servers: [
            ...new Set([
                ...e.map((e)=>e.clientKey),
                ...s,
                ...Array.from(r?.entries() ?? []).filter(([, e])=>"connected" !== e.status).map(([e])=>e)
            ])
        ].map((s)=>{
            const o = e.filter((e)=>e.clientKey === s);
            return {
                serverName: o[0]?.providerIdentifier ?? s,
                serverIdentifier: s,
                plugin: o[0]?.plugin,
                marketplace: o[0]?.marketplace,
                tools: o,
                instructions: t.filter((e)=>iu(e, n) === s),
                status: r?.get(s)?.status,
                errorMessage: r?.get(s)?.errorMessage
            };
        })
    };
}
async function cu(e, t) {
    const r = await t.getClients(e).catch((t)=>(Yl.warn(e, "Error fetching MCP clients", {
            error: t
        }), {})), n = await Promise.all(Object.entries(r).map(async ([t, r])=>{
        const n = await r.getState(e).catch(()=>({
                kind: "error",
                message: "Failed to fetch MCP client state"
            }));
        return [
            t,
            {
                status: (0, m.Lxn)(n),
                errorMessage: "error" === n.kind && void 0 !== n.message ? n.message : void 0
            }
        ];
    }));
    return new Map(n);
}
class lu {
    constructor(e){
        this.mcpLease = e;
    }
    async getState(e) {
        const [t, r] = await Promise.all([
            this.mcpLease.getTools(e).catch((t)=>(Yl.warn(e, "Error fetching MCP tools", {
                    error: t
                }), [])),
            this.mcpLease.getInstructions(e).catch((t)=>(Yl.warn(e, "Error fetching MCP instructions", {
                    error: t
                }), []))
        ]);
        return au(t, r, await cu(e, this.mcpLease));
    }
}
class uu {
    constructor(e){
        this.mcpLease = e, this.pendingRefreshRequested = !1, this.nextRefreshId = 0, this.disposed = !1, this.listeners = new Set;
        const t = this.mcpLease.onDidChange((e)=>{
            this.onLeaseChanged(e);
        });
        this.disposeSubscription = ()=>t.dispose(), this.onLeaseChanged(void 0);
    }
    startRefresh(e) {
        const t = {
            id: ++this.nextRefreshId,
            promise: this.computeState(e)
        };
        return this.currentRefresh = t, t.promise.then((e)=>{
            this.disposed || this.currentRefresh?.id !== t.id || (this.cachedState = e, this.currentRefresh = void 0, this.emitChange(), this.pendingRefreshRequested && (this.pendingRefreshRequested = !1, this.startRefresh((0, ye.q6)())));
        }, (e)=>{
            this.currentRefresh?.id === t.id && (this.currentRefresh = void 0, !this.disposed && this.pendingRefreshRequested && (this.pendingRefreshRequested = !1, this.startRefresh((0, ye.q6)())));
        }), t.promise;
    }
    onDidChange(e) {
        return this.listeners.add(e), {
            dispose: ()=>{
                this.listeners.delete(e);
            }
        };
    }
    emitChange() {
        for (const e of this.listeners)try {
            e();
        } catch (e) {
            console.error("Error in MCP state change listener:", e);
        }
    }
    onLeaseChanged(e) {
        const t = (0, ye.q6)();
        void 0 === this.currentRefresh ? this.startRefresh(t) : this.pendingRefreshRequested = !0;
    }
    async awaitRefreshResultBounded(e) {
        try {
            return await Promise.race([
                e,
                new Promise((e)=>setTimeout(()=>e(void 0), 150))
            ]);
        } catch  {
            return;
        }
    }
    async refreshNow(e) {
        const t = this.demandRefresh;
        if (void 0 !== t) {
            try {
                await t;
            } catch  {}
            return;
        }
        const r = this.runDemandRefresh(e);
        this.demandRefresh = r;
        try {
            await r;
        } finally{
            this.demandRefresh === r && (this.demandRefresh = void 0);
        }
    }
    async runDemandRefresh(e) {
        const t = this.currentRefresh;
        if (void 0 !== t) try {
            await t.promise;
        } catch  {}
        if (this.disposed) return;
        const r = this.currentRefresh;
        if (void 0 === r || r.id === t?.id) {
            this.pendingRefreshRequested = !1;
            try {
                await this.startRefresh(e);
            } catch  {}
        } else try {
            await r.promise;
        } catch  {}
    }
    async getState(e) {
        if (this.disposed) throw new Error("ObservableMcpStateAccessor has been disposed");
        if (void 0 !== this.cachedState) return this.cachedState;
        const t = this.currentRefresh;
        if (t) {
            const e = await this.awaitRefreshResultBounded(t.promise);
            if (void 0 !== e) return e;
            if (void 0 !== this.cachedState) return this.cachedState;
            if (this.currentRefresh?.id === t.id) return {
                servers: []
            };
        }
        const r = this.startRefresh(e), n = await this.awaitRefreshResultBounded(r);
        return void 0 !== n ? n : void 0 !== this.cachedState ? this.cachedState : {
            servers: []
        };
    }
    async computeState(e) {
        const [t, r] = await Promise.all([
            this.mcpLease.getTools(e).catch((e)=>(console.error("Error fetching MCP tools:", e), [])),
            this.mcpLease.getInstructions(e).catch((e)=>(console.error("Error fetching MCP instructions:", e), []))
        ]);
        return au(t, r, await cu(e, this.mcpLease));
    }
    dispose() {
        this.disposed || (this.disposed = !0, this.disposeSubscription(), this.listeners.clear(), this.cachedState = void 0, this.currentRefresh = void 0);
    }
}
function du(e) {
    return new Ds._W({
        result: {
            case: "success",
            value: new Ds.pv({
                servers: e.servers.map((e)=>new Ds.XE({
                        serverName: e.serverName,
                        serverIdentifier: e.serverIdentifier,
                        plugin: e.plugin,
                        marketplace: e.marketplace,
                        tools: e.tools.map((e)=>new fs.gd({
                                name: e.name,
                                providerIdentifier: e.providerIdentifier,
                                toolName: e.toolName,
                                description: e.description,
                                inputSchema: e.inputSchema ? bn.Value.fromJson(e.inputSchema) : void 0,
                                metaJson: (0, m.Qw5)(e._meta),
                                ...(0, Fs.hT)(e.annotations)
                            })),
                        instructions: e.instructions,
                        status: e.status,
                        errorMessage: e.errorMessage
                    }))
            })
        }
    });
}
class pu {
    constructor(e, t, r){
        this.mcpStateAccessor = e, this.ensureMcpServersLoaded = t, this.options = r;
    }
    async execute(e, t) {
        try {
            await this.ensureMcpServersLoaded?.(e, t.serverIdentifiers, {
                wait: !t.kickOnly
            });
        } catch  {}
        t.refreshPolicy !== Ds.ew.FORCE_IF_MISSING && t.refreshPolicy !== Ds.ew.FORCE || await this.mcpStateAccessor.refreshNow?.(e);
        const r = await this.mcpStateAccessor.getState(e);
        if (!0 === this.options?.filterToRequestedServers && t.serverIdentifiers.length > 0) {
            const e = new Set(t.serverIdentifiers), n = r.servers.filter((t)=>e.has(t.serverIdentifier));
            if (n.length > 0) return du({
                ...r,
                servers: n
            });
        }
        return du(r);
    }
}
class mu {
    constructor(e, t, r, n, s, o, i, a, c = {}){
        this.cursorRulesService = e, this.cloudRulesService = t, this.subagentsService = r, this.repositoryProvider = n, this.grepProvider = s, this.mcpStateAccessor = o, this.gitExecutor = i, this.workspacePaths = a, this.cachedWorkspaces = new Map, this.inFlightWorkspaceWarms = new Map;
        const { projectDir: l, getSmartModeClassifierAutoModeEnabled: u, getAdminCommandDenylist: d, devForceNextSmartModeClassifierBlockToken: p, isWorkingDirHomeDir: m, createFileWatcher: h, getSandboxEnabled: f, getSandboxSupported: g, getNetworkAllowlistInfo: y, userTerminalHint: w, getMcpFileSystemOptions: v, mcpMetaToolEnabled: _, mcpMetaToolSlimDescriptors: b, mcpInputSchemaJson: S, alwaysExposeVirtualMcpAuthTool: k, getArtifactsFolder: x, secretRedactionEnabled: E, attributionConfigProvider: I, isAttributionDisabledByAdmin: T, getAgentSkills: C, additionalRules: P, getComputerUseSupported: A, getMockPromptTime: R } = c;
        this.projectDir = l, this.isWorkingDirHomeDir = m, this.getSandboxEnabled = f, this.getSandboxSupported = g, this.getNetworkAllowlistInfo = y, this.getSmartModeClassifierAutoModeEnabled = u, this.getAdminCommandDenylist = d, this.devForceNextSmartModeClassifierBlockToken = p, this.getMockPromptTime = R, this.userTerminalHint = w, this.getMcpFileSystemOptions = v, this.mcpMetaToolEnabled = _ ?? !1, this.mcpMetaToolSlimDescriptors = b ?? !1, this.mcpInputSchemaJson = S ?? !1, this.alwaysExposeVirtualMcpAuthTool = k ?? !1, this.getArtifactsFolder = x, this.secretRedactionEnabled = E, this.attributionConfigProvider = I, this.isAttributionDisabledByAdmin = T, this.getAgentSkills = C, this.additionalRules = P ?? [], this.getComputerUseSupported = A, this.reduceContextHotPath = c.reduceContextHotPath ?? !1, this.warmWorkspaceCaches(), this.rebuildGlobalCache(), void 0 !== h && (this.fileWatcher = h(), this.fileWatcher.onDidChange((e)=>{
            this.onWorkspacePathChanged(e);
        }), this.fileWatcher.onDidCreate((e)=>{
            this.onWorkspacePathChanged(e);
        }), this.fileWatcher.onDidDelete((e)=>{
            this.onWorkspacePathChanged(e);
        }));
    }
    onWorkspacePathChanged(e) {
        this.rebuildAllCaches();
    }
    getWorkspaceCache(e) {
        return this.cachedWorkspaces.get(e);
    }
    warmWorkspaceCaches() {
        const e = (0, ye.q6)();
        Promise.all(this.workspacePaths.map((t)=>this.ensureWorkspaceCacheWarm(e, t)));
    }
    ensureWorkspaceCacheWarm(e, t) {
        if (this.cachedWorkspaces.has(t)) return Promise.resolve();
        const r = this.inFlightWorkspaceWarms.get(t);
        if (void 0 !== r) return r;
        const n = this.warmWorkspaceCache(e, t).finally(()=>{
            this.inFlightWorkspaceWarms.delete(t);
        });
        return this.inFlightWorkspaceWarms.set(t, n), n;
    }
    async warmWorkspaceCache(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = Kl(r, (0, C.VI)(e.withName("LocalRequestContextExecutor.warmWorkspaceCache")), !1), s = await async function(e, t, r) {
                try {
                    return (await t.exec(e, r, [
                        "rev-parse",
                        "--show-toplevel"
                    ], {
                        caller: "getGitRepoPathForWorkspacePath"
                    })).stdout.trim();
                } catch  {
                    return null;
                }
            }(n.ctx, this.gitExecutor, t), o = s ? await Ue(n.ctx, this.gitExecutor, s) : void 0, i = {
                repoPath: s ?? void 0,
                remoteUrl: void 0 !== o ? Le(o) : void 0
            };
            this.cachedWorkspaces.set(t, i);
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Vl(r);
        }
    }
    rebuildAllCaches() {
        this.cacheDebounceTimeout && clearTimeout(this.cacheDebounceTimeout), this.cacheDebounceTimeout = setTimeout(()=>{
            this.cacheDebounceTimeout = void 0, this.rebuildGlobalCache();
        }, 5e3);
    }
    invalidateGlobalCache() {
        this.globalCache = void 0, this.lastGoodGlobalCache = void 0, this.globalCacheTraceId = void 0;
    }
    rebuildGlobalCache() {
        const e = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const t = (0, ye.q6)(), r = Kl(e, (0, C.VI)(t.withName("LocalRequestContextExecutor.rebuildGlobalCache")), !1);
            this.globalCacheTraceId = r.span.spanContext().traceId;
            const n = this.computeGlobalCache(r.ctx);
            return this.globalCache = n, this.reduceContextHotPath && n.then((e)=>{
                this.globalCache === n && (this.lastGoodGlobalCache = e);
            }, ()=>{
                this.globalCache === n && (this.globalCache = void 0);
            }), n;
        } catch (t) {
            e.error = t, e.hasError = !0;
        } finally{
            Vl(e);
        }
    }
    async computeGlobalCache(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = Kl(t, (0, C.VI)(e.withName("LocalRequestContextExecutor.computeGlobalCache")), !1), n = AbortSignal.timeout(1e3), s = performance.now(), o = {}, i = (e, t)=>{
                const r = performance.now();
                return t.finally(()=>{
                    o[e] = Math.round(performance.now() - r);
                });
            }, [a, c, l, u] = await Promise.all([
                i("cursorRules", this.cursorRulesService.getAllCursorRules(r.ctx)),
                i("cloudRule", this.cloudRulesService ? this.cloudRulesService.getCloudRule(r.ctx) : Promise.resolve(null)),
                i("codebaseRef", this.repositoryProvider.getCodebaseReference(r.ctx, n).catch(()=>{})),
                i("subagents", this.subagentsService ? this.subagentsService.getAllSubagents().catch(()=>[]) : Promise.resolve([]))
            ]), d = Math.round(performance.now() - s);
            d > 1e3 && Yl.warn(r.ctx, "computeGlobalCache: slow", {
                totalMs: d,
                ...o,
                ruleCount: a.length
            });
            return {
                rules: [
                    ...this.additionalRules,
                    ...a
                ],
                cloudRule: c,
                codebaseReference: l,
                customSubagents: u
            };
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            Vl(t);
        }
    }
    dispose() {
        this.cacheDebounceTimeout && (clearTimeout(this.cacheDebounceTimeout), this.cacheDebounceTimeout = void 0), this.fileWatcher && (this.fileWatcher.dispose(), this.fileWatcher = void 0), this.globalCache = void 0, this.lastGoodGlobalCache = void 0;
    }
    async collectWorkspaceCaches(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = Kl(r, (0, C.VI)(e.withName("LocalRequestContextExecutor.collectWorkspaceCaches")), !1);
            let s;
            if (this.grepProvider.getTrackedState) try {
                s = await this.grepProvider.getTrackedState(this.workspacePaths);
            } catch  {
                s = void 0;
            }
            let o = !0;
            const i = (await Promise.all(this.workspacePaths.map(async (e)=>{
                let r = this.getWorkspaceCache(e);
                if (void 0 === r) {
                    if (!t.waitForWorkspaceCache) return o = !1, void this.ensureWorkspaceCacheWarm(n.ctx, e);
                    if (await this.ensureWorkspaceCacheWarm(n.ctx, e), r = this.getWorkspaceCache(e), void 0 === r) return void (o = !1);
                }
                const i = s?.[e];
                if (void 0 !== i) return new $l.DS({
                    path: r.repoPath,
                    status: i.gitStatus,
                    branchName: i.gitBranchName,
                    remoteUrl: r.remoteUrl,
                    isOriginBacked: (0, Ne.a8)(r.remoteUrl)
                });
                if (void 0 === r.repoPath) return;
                const { status: a, branchName: c } = await async function(e, t, r, n) {
                    const s = (e)=>{
                        let t;
                        const r = new Promise((e)=>{
                            t = setTimeout(()=>{
                                e(void 0);
                            }, n);
                        });
                        return Promise.race([
                            e.catch(()=>{}),
                            r
                        ]).finally(()=>{
                            void 0 !== t && clearTimeout(t);
                        });
                    }, [o, i] = await Promise.all([
                        s(Ql(e, t, r, n)),
                        s(Xl(e, t, r, n))
                    ]);
                    return {
                        status: o,
                        branchName: i
                    };
                }(n.ctx, this.gitExecutor, r.repoPath, 3e3);
                return new $l.DS({
                    path: r.repoPath,
                    status: a,
                    branchName: c,
                    remoteUrl: r.remoteUrl,
                    isOriginBacked: (0, Ne.a8)(r.remoteUrl)
                });
            }))).filter((e)=>void 0 !== e);
            return {
                gitRepos: i,
                gitRepoInfoComplete: o
            };
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Vl(r);
        }
    }
    async computeCachedRequestContext(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = Kl(r, (0, C.VI)(e.withName("LocalRequestContextExecutor.computeCachedRequestContext")), !1), s = this.projectDir, o = async ()=>{
                const e = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    const t = Kl(e, (0, C.VI)(n.ctx.withName("LocalRequestContextExecutor.computeCachedRequestContext.getGlobalData")), !1);
                    if (this.globalCacheTraceId && t.span.setAttribute("cacheTraceId", this.globalCacheTraceId), !this.reduceContextHotPath) {
                        if (void 0 === this.globalCache) {
                            const e = this.computeGlobalCache(n.ctx);
                            this.globalCache = e, e.catch(()=>{
                                this.globalCache === e && (this.globalCache = void 0);
                            });
                        }
                        return this.globalCache;
                    }
                    return void 0 !== this.lastGoodGlobalCache ? this.lastGoodGlobalCache : this.globalCache ?? this.rebuildGlobalCache();
                } catch (t) {
                    e.error = t, e.hasError = !0;
                } finally{
                    Vl(e);
                }
            }, i = performance.now(), a = {}, c = (e, t)=>{
                const r = performance.now();
                return t.finally(()=>{
                    a[e] = Math.round(performance.now() - r);
                });
            }, [l, u, d, { gitRepos: p, gitRepoInfoComplete: m }, h, f, g, y, w, v] = await Promise.all([
                c("globalCache", o()),
                c("mcpState", this.mcpStateAccessor.getState(n.ctx)),
                c("env", tu(n.ctx, this.workspacePaths, {
                    projectDir: s,
                    notesSessionId: t.notesSessionId,
                    metaAgentNotesEnabled: !1,
                    getSmartModeClassifierAutoModeEnabled: this.getSmartModeClassifierAutoModeEnabled,
                    devForceNextSmartModeClassifierBlockToken: this.devForceNextSmartModeClassifierBlockToken,
                    getMockPromptTime: this.getMockPromptTime,
                    isWorkingDirHomeDir: this.isWorkingDirHomeDir,
                    getSandboxEnabled: this.getSandboxEnabled,
                    getSandboxSupported: this.getSandboxSupported,
                    getNetworkAllowlistInfo: this.getNetworkAllowlistInfo,
                    userTerminalHint: this.userTerminalHint,
                    artifactsFolder: this.getArtifactsFolder?.(n.ctx),
                    secretRedactionEnabled: this.secretRedactionEnabled,
                    getComputerUseSupported: this.getComputerUseSupported
                })),
                c("git", this.collectWorkspaceCaches(n.ctx, {
                    waitForWorkspaceCache: !0 === t.waitForWorkspaceCache
                })),
                c("conversationNotes", s && t.notesSessionId ? Wl(s, t.notesSessionId) : Promise.resolve(void 0)),
                c("sharedNotes", s ? Hl(s) : Promise.resolve(void 0)),
                c("mcpFileSystemOptions", this.getMcpFileSystemOptions ? this.getMcpFileSystemOptions(n.ctx, {
                    timeoutMs: 3e3
                }) : Promise.resolve(void 0)),
                c("attribution", this.isAttributionDisabledByAdmin ? this.isAttributionDisabledByAdmin().catch(()=>!0) : Promise.resolve(!1)),
                c("agentSkills", this.getAgentSkills ? this.getAgentSkills(n.ctx) : Promise.resolve([])),
                c("adminCommandDenylist", this.getAdminCommandDenylist ? this.getAdminCommandDenylist() : Promise.resolve(void 0))
            ]), _ = performance.now() - i;
            for (const [e, t] of Object.entries(a))n.span.setAttribute(`requestContext.timing.${e}Ms`, t);
            n.span.setAttribute("requestContext.timing.totalMs", Math.round(_)), _ > 1e3 && Yl.warn(n.ctx, "computeCachedRequestContext: slow parallel data collection", {
                durationMs: Math.round(_),
                ...a
            });
            const b = this.mcpMetaToolEnabled ? su(u, {
                alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool,
                slimDescriptors: this.mcpMetaToolSlimDescriptors,
                inputSchemaJson: this.mcpInputSchemaJson
            }) : void 0, S = this.attributionConfigProvider?.get(), k = !y && (S?.attribution?.attributeCommitsToAgent ?? !0), x = !y && (S?.attribution?.attributePRsToAgent ?? !0), E = new $l.bb({
                rules: l.rules,
                env: d,
                gitRepos: p,
                gitRepoInfoComplete: m,
                repositoryInfo: l.codebaseReference ? [
                    {
                        relativeWorkspacePath: l.codebaseReference.relativeWorkspacePath,
                        repoName: l.codebaseReference.repoName,
                        repoOwner: l.codebaseReference.repoOwner,
                        isTracked: l.codebaseReference.isTracked,
                        isLocal: l.codebaseReference.isLocal,
                        orthogonalTransformSeed: l.codebaseReference.orthogonalTransformSeed,
                        pathEncryptionKey: l.codebaseReference.pathEncryptionKey
                    }
                ] : [],
                ...nu(u, {
                    internalBrowserProvidersOnly: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors,
                    inputSchemaJson: this.mcpInputSchemaJson
                }),
                conversationNotesListing: h,
                sharedNotesListing: f,
                customSubagents: l.customSubagents,
                mcpFileSystemOptions: g,
                mcpMetaToolOptions: b,
                supportsMcpAuth: !0,
                commitAttributionMessage: k ? "enabled" : void 0,
                prAttributionMessage: x ? "enabled" : void 0,
                agentSkills: w,
                adminCommandDenylist: v?.rules ?? []
            });
            return null !== l.cloudRule && void 0 !== l.cloudRule && (E.cloudRule = l.cloudRule), E;
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Vl(r);
        }
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = Kl(r, (0, C.VI)(e.withName("LocalRequestContextExecutor.execute")), !1);
            n.span.setAttribute("enableCaching", void 0 !== this.fileWatcher), n.span.setAttribute("hasGlobalCache", !!this.globalCache);
            try {
                const e = await this.computeCachedRequestContext(n.ctx, t);
                return new $l._G({
                    result: {
                        case: "success",
                        value: new $l.yW({
                            requestContext: e
                        })
                    }
                });
            } catch (e) {
                return n.span.recordException(e), new $l._G({
                    result: {
                        case: "error",
                        value: new $l.nf({
                            error: e instanceof Error ? e.message : String(e)
                        })
                    }
                });
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Vl(r);
        }
    }
}
function hu(e) {
    return 0 !== e.timeout ? e.timeout : e.isBackground || e.timeoutBehavior === A._d.BACKGROUND || void 0 !== e.hardTimeout && e.hardTimeout > 0 ? 0 : 3e4;
}
var fu = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, gu = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
class yu {
    constructor(e, t, r, n){
        this.permissionsService = e, this.coreExecutor = t, this.ignoreService = r;
    }
    buildResultFromExit(e) {
        return 0 === (e.exitCode ?? -1) ? new A.W4({
            result: {
                case: "success",
                value: new A.QR({
                    ...e,
                    stdout: e.outputLocation ? "" : e.stdout,
                    stderr: e.outputLocation ? "" : e.stderr
                })
            },
            sandboxPolicy: ne(e.sandboxPolicy)
        }) : new A.W4({
            result: {
                case: "failure",
                value: new A.xC({
                    ...e,
                    aborted: void 0 !== e.abortReason,
                    stdout: e.outputLocation ? "" : e.stdout,
                    stderr: e.outputLocation ? "" : e.stderr
                })
            },
            sandboxPolicy: ne(e.sandboxPolicy)
        });
    }
    async executeWithPolicy(e, t, r, n, s) {
        const o = Date.now(), i = new AbortController, a = e.signal ? AbortSignal.any([
            e.signal,
            i.signal
        ]) : i.signal, c = setTimeout(()=>{
            i.abort();
        }, n);
        try {
            let n, l, u, d = "", p = "", m = null;
            const h = s ? {
                perRepo: s
            } : void 0;
            for await (const s of this.coreExecutor.execute(e, {
                command: t.command,
                workingDirectory: r,
                signal: a,
                toolCallId: t.toolCallId,
                conversationId: t.conversationId,
                requestId: t.requestId,
                secretScopeId: t.secretScopeId,
                sandboxPolicy: h,
                fileOutputThresholdBytes: t.fileOutputThresholdBytes,
                pipeStdin: !1
            }))"stdout" === s.type ? d += s.data : "stderr" === s.type ? p += s.data : "exit" === s.type && (m = null != s.code ? 0 | s.code : null, l = s.outputLocation, n = s.aborted ? a.aborted ? i.signal.aborted && a.reason === i.signal.reason ? A.Lv.TIMEOUT : A.Lv.USER_ABORT : A.Lv.UNSPECIFIED : void 0, u = xs(s.localExecutionTimeMs));
            clearTimeout(c);
            const f = Date.now() - o, g = {
                command: t.command,
                workingDirectory: r,
                exitCode: void 0 !== n ? -1 : m ?? -1,
                signal: void 0 !== n ? "SIGTERM" : "",
                abortReason: n,
                stdout: d,
                stderr: p,
                executionTime: f,
                localExecutionTimeMs: u,
                sandboxPolicy: s,
                outputLocation: l
            };
            return this.buildResultFromExit(g);
        } catch (o) {
            return clearTimeout(c), i.signal.aborted && !e.signal.aborted ? new A.W4({
                result: {
                    case: "timeout",
                    value: new A.eG({
                        command: t.command,
                        workingDirectory: r,
                        timeoutMs: n
                    })
                },
                sandboxPolicy: ne(s)
            }) : e.signal.aborted ? new A.W4({
                result: {
                    case: "rejected",
                    value: new A.pZ({
                        command: t.command,
                        workingDirectory: r,
                        reason: "Command aborted"
                    })
                },
                sandboxPolicy: ne(s)
            }) : new A.W4({
                result: {
                    case: "spawnError",
                    value: new A.mJ({
                        command: t.command,
                        workingDirectory: r,
                        error: o instanceof Error ? o.message : "Unknown error"
                    })
                },
                sandboxPolicy: ne(s)
            });
        }
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const n = fu(r, (0, C.VI)(e.withName("LocalShellExecutor.execute")), !1).ctx;
            (0, C.HF)(n, "LocalShellExecutor.execute");
            const s = t.command, o = t.requestedSandboxPolicy ? re(t.requestedSandboxPolicy) : void 0, i = t.workingDirectory || await this.coreExecutor.getCwd(t.conversationId), a = hu(t), c = (0, O.o1)(i);
            if (!t.parsingResult) return new A.W4({
                result: {
                    case: "spawnError",
                    value: new A.mJ({
                        command: s,
                        workingDirectory: c,
                        error: "Parsing result is required"
                    })
                }
            });
            let l;
            if (t.skipApproval) {
                const e = await this.permissionsService.shouldEnforceShellInvariantBlocks(n, {
                    workingDirectory: c,
                    skipUnsafeWorkingDirectoryBlock: !0,
                    command: s,
                    parsingResult: t.parsingResult,
                    toolCallId: t.toolCallId
                }, o);
                if ("block" === e.kind) return new A.W4({
                    result: et(s, c, e.reason)
                });
                l = o;
            } else {
                const e = await this.permissionsService.shouldBlockShellCommand(n, s, {
                    workingDirectory: c,
                    timeout: a,
                    parsingResult: t.parsingResult,
                    toolCallId: t.toolCallId,
                    smartModeApprovalReason: t.smartModeApproval?.reason,
                    smartModeApprovalRequestId: t.smartModeApproval?.requestId,
                    hookApprovalRequirement: (0, m.oGr)(t)
                }, o);
                if ("block" === e.kind) return new A.W4({
                    result: et(s, c, e.reason)
                });
                l = e.policy;
            }
            if (G() && (l = Y(s, t.parsingResult)), l && "insecure_none" !== l.type) {
                const e = await Ke(this.ignoreService);
                l = {
                    ...l,
                    ignoreMapping: e
                };
            }
            return this.executeWithPolicy(n, t, i, a, l);
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            gu(r);
        }
    }
}
var wu = require("./module-82589.js");
class vu {
    constructor(e){
        this.permissionsService = e;
    }
    async execute(e, t) {
        const r = t.parsingResult ?? new A.HO, n = await this.permissionsService.isShellCommandFullyAllowlisted(e, t.command, {
            workingDirectory: t.workingDirectory,
            parsingResult: r,
            classifierResult: t.classifierResult,
            toolCallId: t.toolCallId
        });
        return new wu.e({
            allowlisted: n
        });
    }
}
class _u {
    constructor(e){
        this.shellStreamExecutor = e;
    }
    async execute(e, t, r) {
        return "" === t.toolCallId.trim() ? new A.jK({
            status: A.iA.NOT_FOUND
        }) : this.shellStreamExecutor.forceBackgroundByToolCallId(t.toolCallId);
    }
}
var bu = require("./module-87199.js"), Su = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, ku = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const xu = (0, T.h)("local-exec:shell-core"), Eu = "win32" === process.platform, Iu = [
    "CURSOR_CONVERSATION_ID",
    "CURSOR_REQUEST_ID",
    "CURSOR_AGENT_STORE_FILES_DIR",
    "CURSOR_AGENT_STORE_SHARED_PATHS"
];
function Tu(e) {
    return `'${e.replace(/'/g, "'\\''")}'`;
}
const Cu = [
    "eval-cursorbench",
    "cursorbench",
    "sand-eval",
    "eval-harness"
];
function Pu(e) {
    return Cu.some((t)=>e.includes(t)) ? (0, qt.createHash)("sha256").update(e).digest("hex") : e;
}
function Au(e, t) {
    return e[t] ?? process.env[t];
}
const Ru = /^[A-Za-z_][A-Za-z0-9_]*$/, Mu = /CURSOR_SANDBOX/i;
function Ju(e) {
    return Ru.test(e) && !Mu.test(e);
}
function Ou(e, t) {
    const r = void 0 === e ? [] : [
        ...e
    ];
    return r.includes(t) || r.push(t), r;
}
function Bu(e, t) {
    const r = Au(t, "CURSOR_AGENT_STORE_FILES_DIR"), n = function(e) {
        if (void 0 === e) return [];
        try {
            const t = JSON.parse(e);
            if ("object" != typeof t || null === t) return [];
            const r = [];
            for (const e of Object.values(t))"object" == typeof e && null !== e && "path" in e && "readOnly" in e && "string" == typeof e.path && "boolean" == typeof e.readOnly && r.push({
                path: e.path,
                readOnly: e.readOnly
            });
            return r;
        } catch  {
            return [];
        }
    }(Au(t, "CURSOR_AGENT_STORE_SHARED_PATHS"));
    if (void 0 === r && 0 === n.length) return e;
    const s = e?.perUser, o = e?.perRepo ?? e?.perUser ?? e?.teamAdmin;
    if ("workspace_readwrite" !== o?.type && "workspace_readonly" !== o?.type) return e;
    const i = s?.type === o.type ? {
        ...s
    } : {
        type: o.type
    };
    var a;
    void 0 !== r && (a = r, "workspace_readwrite" !== i.type ? i.additionalReadonlyPaths = Ou(i.additionalReadonlyPaths, a) : i.additionalReadwritePaths = Ou(i.additionalReadwritePaths, a));
    for (const e of n)e.readOnly || "workspace_readwrite" !== i.type ? i.additionalReadonlyPaths = Ou(i.additionalReadonlyPaths, e.path) : i.additionalReadwritePaths = Ou(i.additionalReadwritePaths, e.path);
    return {
        ...e,
        perUser: i
    };
}
class Du {
    constructor(e, t, r, n, s, o){
        this.executor = e, this.workspacePath = t, this.projectDir = r, this.shellOutputBackpressureOptions = n, this.extraEnvProvider = s, this.powershellUtf8Console = o, this.conversationExecutors = new Map;
    }
    executorFor(e) {
        if (!e) return this.executor;
        let t = this.conversationExecutors.get(e);
        return void 0 === t && (t = this.executor.clone(this.workspacePath), this.conversationExecutors.set(e, t)), t;
    }
    async *execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Su(r, (0, C.VI)(e.withName("ShellCoreExecutor.execute")), !1);
            const o = performance.now(), i = this.executorFor(t.conversationId), a = t.workingDirectory || await i.getCwd(), c = (0, O.o1)(a, this.workspacePath);
            if (!(0, bu.$f)(c) && !await async function(e) {
                try {
                    return (await (0, n.stat)(e)).isDirectory();
                } catch (e) {
                    const t = e.code;
                    if ("ENOENT" === t || "ENOTDIR" === t) return !1;
                    throw e;
                }
            }(c)) {
                if (c !== (0, O.o1)(await i.getCwd(), this.workspacePath)) throw new Error(`working directory does not exist: ${c}; the command did not run`);
                return yield {
                    type: "stderr",
                    data: `The shell's working directory no longer exists: ${c}. The command did not run. Re-run it with working_directory set to an existing directory.\n`
                }, void (yield {
                    type: "exit",
                    code: 1,
                    aborted: !1,
                    localExecutionTimeMs: Math.round(performance.now() - o)
                });
            }
            let l, u = 0, d = 0, p = !1, m = !1, h = !1;
            t.fileOutputThresholdBytes && this.projectDir && (l = {
                buffer: "",
                lineCount: 0,
                size: 0,
                threshold: Number(t.fileOutputThresholdBytes)
            });
            const f = t.signal, g = {
                CURSOR_AGENT: "1"
            };
            t.conversationId && (g.CURSOR_CONVERSATION_ID = (0, xc.sh)(t.conversationId)), t.requestId && (g.CURSOR_REQUEST_ID = t.requestId), this.projectDir && (g.AGENT_TRANSCRIPTS = s.join(this.projectDir, xc.O2));
            const y = this.extraEnvProvider?.(e, t);
            void 0 !== y && Object.assign(g, y);
            const w = t.requestScopedEnv ?? {};
            for (const [e, t] of Object.entries(w))void 0 !== t && Ju(e) && (g[e] = t);
            const v = g.CURSOR_REQUEST_ID;
            void 0 !== v && (g.CURSOR_REQUEST_ID = Pu(v)), function(e, t) {
                const r = Object.keys(t).filter((e)=>Ju(e) && !Iu.includes(e)), n = `builtin unset ${[
                    ...Iu,
                    ...r
                ].join(" ")} 2>/dev/null || true`, s = [];
                for (const t of Iu){
                    const r = Au(e, t);
                    void 0 !== r && s.push(`builtin export ${t}=${Tu(r)}`);
                }
                for (const e of r){
                    const r = t[e];
                    void 0 !== r && s.push(`builtin export ${e}=${Tu(r)}`);
                }
                const o = e.__CURSOR_SANDBOX_ENV_RESTORE?.trim(), i = process.env.__CURSOR_SANDBOX_ENV_RESTORE?.trim();
                e.__CURSOR_SANDBOX_ENV_RESTORE = [
                    n,
                    i,
                    o,
                    ...s
                ].filter((e)=>void 0 !== e && "" !== e).join("; ");
            }(g, w), void 0 !== g.__CURSOR_SANDBOX_ENV_RESTORE && (g.__CURSOR_SANDBOX_ENV_RESTORE = function(e, t) {
                let r = e;
                for (const e of t){
                    if (null == e || 0 === e.length) continue;
                    const t = Pu(e);
                    t !== e && (r = r.split(e).join(t));
                }
                return r;
            }(g.__CURSOR_SANDBOX_ENV_RESTORE, [
                t.requestId,
                v,
                w.CURSOR_REQUEST_ID,
                process.env.CURSOR_REQUEST_ID
            ]));
            const _ = Bu(t.sandboxPolicy, g), b = (0, R.CG)(_ ?? R.BM);
            _ && (yield {
                type: "start",
                sandboxed: "workspace_readonly" === b || "workspace_readwrite" === b
            }), t.askpassConfig && !Eu && (g.SUDO_ASKPASS = t.askpassConfig.helperPath, g.CURSOR_ASKPASS_SOCKET = t.askpassConfig.socketPath, g.CURSOR_ASKPASS_SECRET = t.askpassConfig.secret);
            let S = 0, k = "";
            for await (const r of i.execute(e, t.command, {
                signal: f,
                workingDirectory: c,
                env: g,
                sandboxPolicy: _,
                sandboxWorkspaceRoot: this.workspacePath,
                pipeStdin: t.pipeStdin ?? !1,
                bufferOutputEvents: this.shellOutputBackpressureOptions?.bufferOutputEvents,
                outputLimiterOptions: this.shellOutputBackpressureOptions?.outputLimiterOptions,
                powershellUtf8Console: this.powershellUtf8Console
            })){
                if (S = 0, k = "", ("stdout" === r.type || "stderr" === r.type) && (k = r.data.toString(), S = r.data.length, l)) {
                    if (l.size += S, l.lineCount += k.split("\n").length - 1, l.size > Os.Ol) ;
                    else if (l.file) l.file.write(k);
                    else if (l.buffer += k, l.size > l.threshold) {
                        const e = s.join(this.projectDir, Os.YW);
                        l.path = s.join(e, `${(0, qt.randomUUID)()}.txt`), await (0, n.mkdir)(s.dirname(l.path), {
                            recursive: !0
                        }), l.file = (0, I.createWriteStream)(l.path), l.file.write(l.buffer), l.buffer = "";
                    }
                }
                switch(r.type){
                    case "stdout":
                        p || (u + S > ls ? (p = !0, yield {
                            type: "stdout_trimmed"
                        }) : (u += S, yield {
                            type: "stdout",
                            data: k
                        }));
                        break;
                    case "suppressed_output":
                        h || (h = !0, yield {
                            type: "stdout",
                            data: R.Ls
                        });
                        break;
                    case "stderr":
                        m || (d + S > ls ? (m = !0, yield {
                            type: "stderr_trimmed"
                        }) : (d += S, yield {
                            type: "stderr",
                            data: k
                        }));
                        break;
                    case "exit":
                        {
                            const e = Math.max(0, Math.round(performance.now() - o));
                            let t;
                            l?.file && (await new Promise((e)=>l.file.end(e)), t = new qs.pV({
                                filePath: l.path,
                                sizeBytes: BigInt(l.size),
                                lineCount: BigInt(l.lineCount)
                            })), yield {
                                type: "exit",
                                code: r.code,
                                aborted: r.aborted,
                                outputLocation: t,
                                localExecutionTimeMs: e
                            };
                            break;
                        }
                    case "stdin_ready":
                        yield {
                            type: "stdin_ready",
                            stdin: r.stdin,
                            pid: r.pid
                        };
                        break;
                    case "sandbox_denies":
                        yield {
                            type: "sandbox_denies",
                            events: r.events
                        };
                }
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            ku(r);
        }
    }
    async getCwd(e) {
        return this.executorFor(e).getCwd();
    }
    getWorkspacePath() {
        if (!this.workspacePath) throw new Error("Workspace path is not configured");
        return this.workspacePath;
    }
}
class qu {
    constructor(e, t){
        this.innerExecutor = e, this.shellManager = t;
    }
    async *execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            Su(r, (0, C.VI)(e.withName("ManagedShellCoreExecutor.execute")), !1);
            xu.info(e, "Executing shell command", {
                command: t.command,
                workingDirectory: t.workingDirectory,
                toolCallId: t.toolCallId
            });
            let n = null;
            t.toolCallId && (n = this.shellManager.getOrCreateShellEmitter(t.toolCallId));
            for await (const r of this.innerExecutor.execute(e, t)){
                if (n) switch(r.type){
                    case "stdin_ready":
                        n.emit({
                            type: "stdin_ready",
                            stdin: r.stdin,
                            pid: r.pid
                        });
                        break;
                    case "start":
                        n.emit({
                            type: "start",
                            sandboxed: r.sandboxed
                        });
                        break;
                    case "stdout":
                        n.emit({
                            type: "stdout",
                            data: r.data
                        });
                        break;
                    case "stderr":
                        n.emit({
                            type: "stderr",
                            data: r.data
                        });
                        break;
                    case "exit":
                        n.emit({
                            type: "exit",
                            code: r.code ?? -1,
                            aborted: r.aborted
                        });
                }
                yield r;
            }
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            ku(r);
        }
    }
    async getCwd(e) {
        return this.innerExecutor.getCwd(e);
    }
    getWorkspacePath() {
        return this.innerExecutor.getWorkspacePath();
    }
}
class Nu {
    constructor(e, t){
        this.innerExecutor = e, this.askpassConfig = t;
    }
    async *execute(e, t) {
        const r = {
            ...t,
            askpassConfig: t.askpassConfig ?? this.askpassConfig
        };
        yield* this.innerExecutor.execute(e, r);
    }
    async getCwd(e) {
        return this.innerExecutor.getCwd(e);
    }
    getWorkspacePath() {
        return this.innerExecutor.getWorkspacePath();
    }
}
var Fu = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Uu = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const Lu = (0, T.h)("local-exec:shell-stream");
class $u {
    constructor(e, t){
        this.iterator = e, this.timeoutMs = t, this.pendingPromise = null, this.stopPromise = new Promise((e)=>{
            this.stopResolve = e;
        });
    }
    stop(e) {
        return void 0 === this.stopReason && (this.stopReason = e, this.stopResolve?.(), !0);
    }
    get timedOut() {
        return "background" === this.stopReason?.kind && this.stopReason.reason === A.Jg.TIMEOUT;
    }
    get backgroundRequested() {
        return "background" === this.stopReason?.kind;
    }
    get backgroundReasonValue() {
        return "background" === this.stopReason?.kind ? this.stopReason.reason : void 0;
    }
    get stopReasonValue() {
        return this.stopReason;
    }
    async *iterate() {
        this.timer = setTimeout(()=>{
            this.stop({
                kind: "background",
                reason: A.Jg.TIMEOUT
            });
        }, this.timeoutMs);
        try {
            for(;;){
                this.pendingPromise = this.iterator.next();
                const e = await Promise.race([
                    this.pendingPromise.then((e)=>({
                            kind: "result",
                            result: e
                        })),
                    this.stopPromise.then(()=>({
                            kind: "stopped"
                        }))
                ]);
                if ("stopped" === e.kind) return;
                if (this.pendingPromise = null, e.result.done) return;
                yield e.result.value;
            }
        } finally{
            clearTimeout(this.timer);
        }
    }
    requestBackground() {
        return this.stop({
            kind: "background",
            reason: A.Jg.USER_REQUEST
        });
    }
    abort() {
        this.stop({
            kind: "abort"
        });
    }
    getHandoffIterator() {
        if (this.pendingPromise) {
            const e = this.pendingPromise;
            this.pendingPromise = null;
            let t = !1;
            return {
                next: async ()=>t ? this.iterator.next() : (t = !0, e)
            };
        }
        return this.iterator;
    }
}
class ju {
    constructor(e, t, r, n){
        this.permissionsService = e, this.coreExecutor = t, this.ignoreService = r, this.backgroundShellManager = n, this.activeForegroundExecutions = new Map;
    }
    async forceBackgroundByToolCallId(e) {
        const t = this.activeForegroundExecutions.get(e), r = t?.requestBackground();
        return r ? new A.jK({
            status: A.iA.ACCEPTED,
            shellResult: r
        }) : new A.jK({
            status: A.iA.NOT_FOUND
        });
    }
    async *execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            e.signal?.throwIfAborted();
            Fu(r, (0, C.VI)(e.withName("LocalShellStreamExecutor.execute")), !1);
            const n = t.command;
            let s = t.requestedSandboxPolicy ? re(t.requestedSandboxPolicy) : void 0;
            const o = t.workingDirectory || await this.coreExecutor.getCwd(t.conversationId), i = hu(t), a = (0, O.o1)(o), c = Date.now(), l = new A.HO((0, M.UD)(n).structured), u = fe({
                command: n,
                parsingResult: l,
                blockedCommands: t.adminCommandDenylist
            });
            if (void 0 !== u) return void (yield new A.FI({
                event: {
                    case: "rejected",
                    value: new A.pZ({
                        command: n,
                        workingDirectory: a,
                        reason: u
                    })
                }
            }));
            const d = await this.permissionsService.shouldEnforceShellInvariantBlocks(e, {
                workingDirectory: a,
                skipUnsafeWorkingDirectoryBlock: !0,
                command: n,
                parsingResult: l,
                toolCallId: t.toolCallId
            }, s);
            if ("block" === d.kind) return "permissionsConfig" === d.reason.type ? void (yield new A.FI({
                event: {
                    case: "permissionDenied",
                    value: new A.jn({
                        command: n,
                        workingDirectory: a,
                        error: "Command blocked by permissions configuration",
                        isReadonly: d.reason.isReadonly ?? !1
                    })
                }
            })) : void (yield new A.FI({
                event: {
                    case: "rejected",
                    value: new A.pZ({
                        command: n,
                        workingDirectory: a,
                        reason: Ze(d.reason)
                    })
                }
            }));
            if (Lu.info(e, "Shell stream: approval gate reached", {
                toolCallId: t.toolCallId,
                skipApproval: t.skipApproval,
                hasSmartModeApproval: void 0 !== t.smartModeApproval,
                hasSmartModeApprovalReason: void 0 !== t.smartModeApproval?.reason,
                hasSmartModeApprovalRequestId: void 0 !== t.smartModeApproval?.requestId,
                requestedPolicyType: s?.type ?? "undefined",
                parserCommandCount: l.executableCommands.length,
                classifierCommandCount: t.classifierResult?.commands.length ?? 0,
                commandLength: n.length
            }), t.skipApproval) Lu.info(e, "Shell stream: skipped local approval", {
                toolCallId: t.toolCallId,
                requestedPolicyType: s?.type ?? "undefined"
            });
            else {
                const r = await this.permissionsService.shouldBlockShellCommand(e, n, {
                    workingDirectory: a,
                    timeout: i,
                    parsingResult: l,
                    toolCallId: t.toolCallId,
                    classifierResult: t.classifierResult,
                    smartModeApprovalReason: t.smartModeApproval?.reason,
                    smartModeApprovalRequestId: t.smartModeApproval?.requestId,
                    hookApprovalRequirement: (0, m.oGr)(t)
                }, s);
                if ("block" === r.kind) {
                    if (Lu.info(e, "Shell stream: approval gate blocked command", {
                        toolCallId: t.toolCallId,
                        blockReasonType: r.reason.type,
                        hasSmartModeApproval: void 0 !== t.smartModeApproval,
                        skipApproval: t.skipApproval
                    }), "permissionsConfig" === r.reason.type) return void (yield new A.FI({
                        event: {
                            case: "permissionDenied",
                            value: new A.jn({
                                command: n,
                                workingDirectory: a,
                                error: "Command blocked by permissions configuration",
                                isReadonly: r.reason.isReadonly ?? !1
                            })
                        }
                    }));
                    const s = Ze(r.reason);
                    return void (yield new A.FI({
                        event: {
                            case: "rejected",
                            value: new A.pZ({
                                command: n,
                                workingDirectory: a,
                                reason: s
                            })
                        }
                    }));
                }
                s = r.policy, Lu.info(e, "Shell stream: approval gate allowed command", {
                    toolCallId: t.toolCallId,
                    skipApproval: t.skipApproval,
                    effectivePolicyType: s.type
                });
            }
            if (G() && (s = Y(n, l)), s && "insecure_none" !== s.type) {
                const e = await Ke(this.ignoreService);
                s = {
                    ...s,
                    ignoreMapping: e
                };
            }
            yield new A.FI({
                event: {
                    case: "start",
                    value: new A.tD({
                        sandboxPolicy: ne(s)
                    })
                }
            });
            const p = t.timeoutBehavior === A._d.BACKGROUND, h = p && !t.closeStdin && void 0 === t.smartModeApproval, f = new AbortController, g = p ? f.signal : e.signal ? AbortSignal.any([
                e.signal,
                f.signal
            ]) : f.signal, y = !0, w = s ? {
                perRepo: s
            } : void 0, v = this.coreExecutor.execute(e, {
                command: n,
                workingDirectory: o,
                signal: g,
                toolCallId: t.toolCallId,
                conversationId: t.conversationId,
                requestId: t.requestId,
                secretScopeId: t.secretScopeId,
                sandboxPolicy: w,
                fileOutputThresholdBytes: t.fileOutputThresholdBytes,
                pipeStdin: h,
                showElapsedTime: y
            });
            let _;
            p || (_ = setTimeout(()=>f.abort(), i));
            const b = p ? new $u(v[Symbol.asyncIterator](), i) : null;
            let S, k, x, E = "", I = !1;
            const T = t.toolCallId && b ? {
                requestBackground: ()=>{
                    if (b.requestBackground()) return x = x ?? this.backgroundShellManager.generateShellId(), new A.W4({
                        result: {
                            case: "success",
                            value: new A.QR({
                                shellId: x,
                                pid: k,
                                command: n,
                                workingDirectory: a,
                                msToWait: xs(Date.now() - c),
                                backgroundReason: A.Jg.USER_REQUEST,
                                interleavedOutput: E
                            })
                        }
                    });
                }
            } : void 0;
            t.toolCallId && T && this.activeForegroundExecutions.set(t.toolCallId, T);
            const P = ()=>{
                t.toolCallId && this.activeForegroundExecutions.get(t.toolCallId) === T && this.activeForegroundExecutions.delete(t.toolCallId);
            };
            let J;
            b && e.signal && e.signal.addEventListener("abort", ()=>{
                b.backgroundRequested || (f.abort(), b.abort());
            }, {
                once: !0
            });
            const B = t.hardTimeout;
            void 0 !== B && B > 0 && (J = setTimeout(()=>{
                if (void 0 !== x) {
                    this.backgroundShellManager.abort(x) || f.abort();
                } else I = !0, f.abort(), b?.abort();
            }, B));
            const D = b?.iterate() ?? v;
            try {
                for await (const r of D)if ("stdout" === r.type) E += r.data, yield new A.FI({
                    event: {
                        case: "stdout",
                        value: new A.o0({
                            data: r.data
                        })
                    }
                });
                else if ("stderr" === r.type) E += r.data, yield new A.FI({
                    event: {
                        case: "stderr",
                        value: new A.Db({
                            data: r.data
                        })
                    }
                });
                else if ("stdin_ready" === r.type) S = r.stdin, k = r.pid;
                else if ("exit" === r.type) {
                    let n;
                    r.aborted && (n = e.signal?.aborted ? A.Lv.USER_ABORT : b?.timedOut || f.signal.aborted ? A.Lv.TIMEOUT : A.Lv.USER_ABORT), yield new A.FI({
                        event: {
                            case: "exit",
                            value: new A.vb({
                                code: (r.code ?? -1) >>> 0,
                                cwd: await this.coreExecutor.getCwd(t.conversationId),
                                outputLocation: r.outputLocation,
                                aborted: r.aborted,
                                abortReason: n,
                                localExecutionTimeMs: xs(r.localExecutionTimeMs)
                            })
                        }
                    });
                }
            } catch (r) {
                if (!(r instanceof R.SandboxUnsupportedError)) throw r;
                const o = s?.type ?? "unknown";
                return Lu.debug(e, "Shell stream: sandbox policy unsupported on this host", {
                    toolCallId: t.toolCallId,
                    policyType: o,
                    reason: r.reason
                }), void (yield new A.FI({
                    event: {
                        case: "sandboxUnsupported",
                        value: new A.rI({
                            command: n,
                            workingDirectory: a,
                            sandboxPolicyType: o,
                            reason: r.reason ?? r.message,
                            isReadonly: "workspace_readonly" === o
                        })
                    }
                }));
            } finally{
                clearTimeout(_), b?.backgroundRequested || clearTimeout(J), P();
            }
            if (b?.backgroundRequested && !I) {
                const r = x ?? this.backgroundShellManager.generateShellId();
                x = r;
                const s = b.backgroundReasonValue === A.Jg.USER_REQUEST ? A.Jg.USER_REQUEST : A.Jg.TIMEOUT, o = s === A.Jg.USER_REQUEST ? Date.now() - c : i;
                await this.backgroundShellManager.adopt({
                    ctx: e,
                    shellId: r,
                    command: n,
                    workingDirectory: a,
                    toolCallId: t.toolCallId,
                    sandboxPolicy: w,
                    initialOutput: E,
                    stdin: S,
                    pid: k,
                    abortController: f,
                    eventIterator: b.getHandoffIterator(),
                    startTime: c,
                    showElapsedTime: y,
                    description: t.description,
                    outputNotification: t.outputNotification
                }), yield new A.FI({
                    event: {
                        case: "backgrounded",
                        value: new A.Y9({
                            shellId: r,
                            command: n,
                            workingDirectory: a,
                            pid: k,
                            msToWait: y ? o : void 0,
                            reason: s
                        })
                    }
                });
            } else e.signal?.aborted && void 0 !== b?.stopReasonValue ? (clearTimeout(J), yield new A.FI({
                event: {
                    case: "exit",
                    value: new A.vb({
                        code: 4294967295,
                        cwd: await this.coreExecutor.getCwd(t.conversationId),
                        aborted: !0,
                        abortReason: A.Lv.USER_ABORT
                    })
                }
            })) : clearTimeout(J);
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Uu(r);
        }
    }
}
var Gu = require("./module-83508.js");
class zu {
    constructor(e){
        this.permissionsService = e;
    }
    async execute(e, t) {
        const r = await this.permissionsService.isWebFetchFullyAllowlisted(e, {
            url: t.url
        });
        return new Gu.M({
            allowlisted: r
        });
    }
}
const Wu = require("node:constants");
class Hu extends Error {
    constructor(e, t){
        super(t), this.name = "SymlinkRefusedError", this.path = e;
    }
}
async function Ku(e, t, r) {
    let s;
    try {
        s = await (0, n.open)(e, function() {
            const e = I.constants;
            let t = e.O_WRONLY | e.O_CREAT;
            return "number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW), "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC), t;
        }(), 438);
    } catch (t) {
        if (function(e) {
            const t = e?.code;
            return "ELOOP" === t || "EMLINK" === t || "EPERM" === t && "number" == typeof I.constants.O_NOFOLLOW;
        }(t)) throw new Hu(e, `Refusing to write through a symlink at ${e}`);
        throw t;
    }
    try {
        let n;
        try {
            n = (0, I.realpathSync)(e);
        } catch  {
            throw new Hu(e, `Cannot verify canonical path before writing: ${e}`);
        }
        if (n !== e) throw new Hu(e, `Refusing write: ${e} now resolves through a symlinked parent to ${n}`);
        if (!(await s.stat()).isFile()) throw new Hu(e, `Refusing to write to non-regular file at ${e}`);
        await s.truncate(0);
        const o = function(e) {
            return Buffer.isBuffer(e) ? e : Buffer.from(e);
        }(t);
        let i = 0;
        for(; i < o.length;){
            const { bytesWritten: e } = await s.write(o, i, o.length - i, i);
            if (0 === e) break;
            i += e;
        }
        r?.flush && await s.sync();
    } finally{
        await s.close();
    }
}
var Vu = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Yu = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const Qu = (0, T.h)("LocalWriteExecutor"), Xu = async (e, t, r, n)=>{
    const s = setTimeout(()=>{
        Qu.warn(e, `[watchdog, LocalWriteExecutor] ${t} still not completed after ${r}ms`);
    }, r);
    try {
        return await n();
    } finally{
        clearTimeout(s);
    }
};
class Zu {
    constructor(e, t, r, { workspacePaths: n, workspacePath: s, worktreeMainPath: o, onWriteForAiTracking: i, writeFileMutationGuard: a }){
        this.fileChangeTracker = e, this.permissionsService = t, this.pendingDecisionProvider = r, this.workspacePaths = n, this.workspacePath = s, this.worktreeMainPath = o, this.onWriteForAiTracking = i, this.writeFileMutationGuard = a;
    }
    async execute(e, t) {
        const r = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const o = Vu(r, (0, C.VI)(e.withName("LocalWriteExecutor.execute")), !1).ctx, i = t.path, a = t.fileText, c = t.fileBytes.length > 0 ? t.fileBytes : void 0, l = (0, O.o1)(i, this.workspacePath), u = Ac(l, [
                "assets",
                "agent-tools",
                "swarm-agents"
            ]);
            if ((0, O.fl)({
                targetPath: l,
                workspacePaths: this.workspacePaths,
                mainWorktreePath: this.worktreeMainPath
            })) return new Ti.v3({
                result: {
                    case: "error",
                    value: new Ti.QM({
                        path: l,
                        error: O.PS
                    })
                }
            });
            let d, p = !1;
            try {
                (await (0, n.stat)(l)).size <= us ? d = await Xu(o, "readText before write", 3e3, ()=>(0, xe.yR)(l, t.encodingHint)) : p = !0;
            } catch  {}
            const m = (await Jc(l)).resolvedPath, h = l.split(s.sep).pop()?.toLowerCase() ?? "", f = (".cursorignore" === h ? {
                type: "permissionsConfig"
            } : void 0) ?? await Xu(o, "permissionsService.shouldBlockWrite", 3e3, ()=>this.permissionsService.shouldBlockWrite(o, m, a));
            if (f) {
                const e = await Xu(o, "handleBlockReason", 3e3, ()=>Xe(f, {
                        onNeedsApproval: async (e, r)=>{
                            const n = "fileEdit" !== r?.type || r.isNewFile, s = "fileEdit" === r?.type ? r.diffString : a, o = "fileEdit" === r?.type ? r.blockReason : void 0, i = await this.pendingDecisionProvider.requestApproval({
                                type: ds.Write,
                                details: {
                                    path: l,
                                    reason: e,
                                    isNewFile: n,
                                    diffString: s,
                                    before: d,
                                    after: a,
                                    blockReason: o
                                },
                                toolCallId: t.toolCallId
                            });
                            return i.approved ? null : new Ti.v3({
                                result: {
                                    case: "rejected",
                                    value: new Ti.en({
                                        path: l,
                                        reason: i.reason || ""
                                    })
                                }
                            });
                        },
                        onUserRejected: (e)=>new Ti.v3({
                                result: {
                                    case: "rejected",
                                    value: new Ti.en({
                                        path: l,
                                        reason: e || ""
                                    })
                                }
                            }),
                        onPermissionDenied: (e, t)=>new Ti.v3({
                                result: {
                                    case: "permissionDenied",
                                    value: new Ti.U7({
                                        path: l,
                                        error: e,
                                        isReadonly: t?.isReadonly ?? !1
                                    })
                                }
                            })
                    }));
                if (null !== e) return e;
            }
            const g = (0, s.dirname)(m);
            try {
                await Xu(o, "mkdir", 3e3, ()=>(0, n.mkdir)(g, {
                        recursive: !0
                    }));
            } catch (e) {
                const t = e.code;
                return "EACCES" === t || "EPERM" === t ? new Ti.v3({
                    result: {
                        case: "permissionDenied",
                        value: new Ti.U7({
                            path: l,
                            directory: g,
                            operation: "create_directory",
                            error: "Permission denied"
                        })
                    }
                }) : new Ti.v3({
                    result: {
                        case: "error",
                        value: new Ti.QM({
                            path: l,
                            error: e.message
                        })
                    }
                });
            }
            let y, w;
            if (void 0 !== c) y = c, w = 0;
            else {
                const e = await Xu(o, "getBufferForWrite", 3e3, ()=>(0, xe.Bh)(m, a, this.workspacePath, t.encodingHint));
                y = e.buffer, w = e.lines;
            }
            const v = ()=>Xu(o, "writeFile", 3e3, async ()=>{
                    let e;
                    await Ku(m, y, {
                        flush: !0
                    });
                    try {
                        e = await (0, n.open)((0, s.dirname)(m), Wu.O_RDONLY), await e.sync();
                    } catch  {} finally{
                        await e?.close();
                    }
                });
            let _, b = !1;
            const S = async ()=>{
                try {
                    await v();
                } catch (e) {
                    throw _ = e, b = !0, e;
                }
            };
            try {
                void 0 === this.writeFileMutationGuard ? await v() : await this.writeFileMutationGuard.runExclusive(m, S);
            } catch (e) {
                if (void 0 !== this.writeFileMutationGuard && (!b || e !== _)) return new Ti.v3({
                    result: {
                        case: "error",
                        value: new Ti.QM({
                            path: l,
                            error: e instanceof Error ? e.message : String(e)
                        })
                    }
                });
                if (e instanceof Hu) return new Ti.v3({
                    result: {
                        case: "permissionDenied",
                        value: new Ti.U7({
                            path: l,
                            directory: "",
                            operation: "create_file",
                            error: e.message
                        })
                    }
                });
                const t = e.code;
                return "EACCES" === t || "EPERM" === t ? new Ti.v3({
                    result: {
                        case: "permissionDenied",
                        value: new Ti.U7({
                            path: l,
                            directory: "",
                            operation: "create_file",
                            error: "Permission denied"
                        })
                    }
                }) : "ENOSPC" === e.code ? new Ti.v3({
                    result: {
                        case: "noSpace",
                        value: new Ti.bM({
                            path: l
                        })
                    }
                }) : "EDQUOT" === t ? new Ti.v3({
                    result: {
                        case: "error",
                        value: new Ti.QM({
                            path: l,
                            error: "Agent-store quota exceeded: this write was rejected because the storage quota is full. Nothing was written; your local copy is intact. Delete or truncate files to free space (including resolved *.conflict* files), then retry. Do not retry the same write without freeing space first."
                        })
                    }
                }) : new Ti.v3({
                    result: {
                        case: "error",
                        value: new Ti.QM({
                            path: l,
                            error: e.message
                        })
                    }
                });
            }
            if (this.fileChangeTracker && void 0 === c && !u && !p) {
                const e = t.toolCallId ? {
                    toolCallId: t.toolCallId
                } : void 0;
                await this.fileChangeTracker.trackChange(l, d, a, e);
            }
            if (this.onWriteForAiTracking && void 0 === c && !u) {
                const e = t.toolCallId ? {
                    toolCallId: t.toolCallId
                } : {};
                try {
                    await this.onWriteForAiTracking({
                        path: l,
                        beforeContent: d,
                        afterContent: a,
                        metadata: e
                    });
                } catch (e) {
                    Qu.warn(o, "onWriteForAiTracking failed (write succeeded)", {
                        path: l,
                        error: e instanceof Error ? e.message : String(e)
                    });
                }
            }
            const k = y.byteLength;
            let x;
            if (t.returnFileContentAfterWrite) try {
                x = await Xu(o, "readText after write", 3e3, ()=>(0, xe.yR)(l, t.encodingHint));
            } catch  {}
            return new Ti.v3({
                result: {
                    case: "success",
                    value: new Ti.j6({
                        path: l,
                        linesCreated: w,
                        fileSize: k,
                        ...void 0 !== x && {
                            fileContentAfterWrite: x
                        }
                    })
                }
            });
        } catch (e) {
            r.error = e, r.hasError = !0;
        } finally{
            Yu(r);
        }
    }
}
const ed = (0, T.h)("local-exec:provider");
class td extends m.ha6 {
    getMcpExecutionPolicyDeps() {
        return {
            permissionsService: this.permissionsService,
            pendingDecisionProvider: this.pendingDecisionStore
        };
    }
    constructor(e){
        super(), this.pendingDecisionStore = e.pendingDecisionStore, this.fileChangeTracker = e.fileChangeTracker, this.gitExecutor = e.gitExecutor, this.ignoreService = e.ignoreService, this.grepProvider = e.grepProvider, this.permissionsService = e.permissionsService, this.workspacePaths = e.workspacePaths, this.worktreeMainPath = e.worktreeMainPath, this.diagnosticsProvider = e.diagnosticsProvider, this.mcpLease = e.mcpLease, this.mcpStateAccessor = e.mcpStateAccessor, this.cursorRulesService = e.cursorRulesService, this.cloudRulesService = e.cloudRulesService, this.subagentsService = e.subagentsService, this.repositoryProvider = e.repositoryProvider, this.projectDir = e.projectDir, this.shellManager = e.shellManager, this._sandboxPolicyResolver = e._sandboxPolicyResolver, this._defaultSandboxPolicy = e._defaultSandboxPolicy ?? {
            type: "insecure_none"
        };
        const t = e.workspacePaths[0], r = t ? function(e) {
            const t = (0, s.join)(e, ".cursor/sandbox.json");
            try {
                const r = (0, I.readFileSync)(t, "utf-8"), n = JSON.parse(r), s = (0, R.$6)(n);
                return (0, R.l7)(s, e);
            } catch  {
                return;
            }
        }(t) : void 0, n = e._defaultSandboxPolicySources;
        this._defaultSandboxPolicySources = r || n ? {
            perUser: n?.perUser,
            perRepo: r ?? n?.perRepo,
            teamAdmin: n?.teamAdmin
        } : void 0, this.mcpFileOutputThresholdBytes = e.mcpFileOutputThresholdBytes, this.backgroundShellFactory = e.backgroundShellFactory, this.backgroundWorkRegistry = e.backgroundWorkRegistry, this.wakeupOwnerConversationId = e.wakeupOwnerConversationId, this.mcpElicitationFactory = e.mcpElicitationFactory, this.createFileWatcher = e.createFileWatcher, this.sharedRequestContextExecutor = e.sharedRequestContextExecutor, this.terminalExecutor = e.terminalExecutor, this.mcpMetaToolEnabled = e.mcpMetaToolEnabled ?? !1, this.mcpMetaToolSlimDescriptors = e.mcpMetaToolSlimDescriptors ?? !1, this.mcpInputSchemaJson = e.mcpInputSchemaJson ?? !1, this.alwaysExposeVirtualMcpAuthTool = e.alwaysExposeVirtualMcpAuthTool ?? !1, this.enableRecordScreen = e.enableRecordScreen ?? !1, this.recordScreenArtifactsDir = e.recordScreenArtifactsDir, this.recordScreenDisplay = e.recordScreenDisplay, this.disableRecordScreenRendering = e.disableRecordScreenRendering ?? !1, this.userTerminalHint = e.userTerminalHint, this.attributionConfigProvider = e.attributionConfigProvider, this.isAttributionDisabledByAdmin = e.isAttributionDisabledByAdmin, this.getAgentSkills = e.getAgentSkills, this.getSmartModeClassifierAutoModeEnabled = e.getSmartModeClassifierAutoModeEnabled, this.getAdminCommandDenylist = e.getAdminCommandDenylist, this.devForceNextSmartModeClassifierBlockToken = e.devForceNextSmartModeClassifierBlockToken, this.getMockPromptTime = e.getMockPromptTime, this.additionalRules = e.additionalRules ?? [], this.askpassConfig = e.askpassConfig, this.rebuildRequestContextOnRulesChange = !0 === e.rebuildRequestContextOnRulesChange;
        const o = this.terminalExecutor ?? (0, R.Fn)({
            env: {
                CURSOR_AGENT: "1"
            },
            userTerminalHint: this.userTerminalHint
        });
        let i;
        if (this.workspacePaths.length > 1) {
            const e = this.workspacePaths.map((e)=>(0, s.dirname)(e));
            i = e.every((t)=>t === e[0]) ? e[0] : void 0;
        } else i = t;
        let a = new Du(o, t ?? (0, ge.homedir)(), this.projectDir, e.shellOutputBackpressureOptions, e.shellExtraEnvProvider, e.powershellUtf8Console);
        e.shellCoreWrapper && (a = e.shellCoreWrapper(a)), this.askpassConfig && (a = new Nu(a, this.askpassConfig)), this.shellManager && (a = new qu(a, this.shellManager));
        const c = e.overrideShellExecutor ?? (!0 === e.suppressDefaultShellExecutor ? void 0 : new yu(this.permissionsService, a, this.ignoreService, this.pendingDecisionStore));
        void 0 !== c && this.register(m.qkk, wa(c)), this.register(m.JP, wa(new mi(this.permissionsService, this.ignoreService, i ?? t ?? this.projectDir)));
        const l = e.overrideWriteExecutor ?? new Zu(this.fileChangeTracker, this.permissionsService, this.pendingDecisionStore, {
            workspacePaths: this.workspacePaths,
            workspacePath: i,
            worktreeMainPath: this.worktreeMainPath,
            onWriteForAiTracking: e.onWriteForAiTracking,
            writeFileMutationGuard: e.writeFileMutationGuard
        });
        this.register(m.Lnu, wa(l)), this.register(m.RpG, wa(new hs(this.pendingDecisionStore, this.fileChangeTracker, this.permissionsService, i, e.onDeleteForAiTracking))), this.register(m.IGA, wa(new vs)), this.register(m.jH1, new Xa);
        const u = this.mcpStateAccessor ?? new lu(this.mcpLease), d = e.overrideGrepExecutor ?? new Qo(this.ignoreService, this.grepProvider, this.workspacePaths, {
            mcpStateAccessor: u,
            permissionsService: this.permissionsService
        });
        this.register(m.u8v, wa(d));
        const p = e.overrideReadExecutor ?? new Ml(this.permissionsService, i, {
            mcpStateAccessor: u,
            useStreamingRead: e.useStreamingRead,
            pendingDecisionProvider: this.pendingDecisionStore
        }), h = new m.yJV(wa(p));
        this.register(m._As, h), e.registerRedactedReadExecutor && this.register(m.Mfc, h);
        const f = e.overrideLsExecutor ?? new si(this.permissionsService, this.ignoreService, i);
        this.register(m.bL4, wa(f)), this.register(m.T0F, wa(new ia(this.permissionsService, i))), void 0 !== c && this.register(m.TZ, wa(new Ei(c))), this.register(m.PiX, wa(new Li(this.permissionsService, l, i))), this.register(m.ohZ, wa(new ua(l, i))), this.register(m.Rdb, wa(new Xi(this.permissionsService, i))), this.register(m.ghi, wa(new Wi(this.permissionsService, i))), this.register(m.qNu, wa(new ra(this.permissionsService, i))), this.register(m.w4j, wa(new Pa(i, this.diagnosticsProvider))), e.getCanvasDiagnostics && this.register(m.sOX, wa(new ba(e.getCanvasDiagnostics, e.beginCanvasSave))), this.register(m.Yib, wa(new m.HwP(new Eo(this.mcpLease, this.permissionsService, this.pendingDecisionStore, this.projectDir, this.mcpFileOutputThresholdBytes, this.mcpElicitationFactory, e.ensureMcpServersLoaded), ()=>this.get(m._As)))), this.register(m.rn8, wa(new Io(this.mcpLease, e.ensureMcpServersLoaded))), this.register(m.mlu, wa(new To(this.mcpLease, i || this.projectDir, this.permissionsService, this.workspacePaths, this.pendingDecisionStore, e.ensureMcpServersLoaded))), this.register(m.pY2, wa(new pu(u, e.ensureMcpServersLoaded, {
            filterToRequestedServers: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors
        })));
        const g = wa(this.sharedRequestContextExecutor ?? this.createOwnedRequestContextExecutor(u, t, e));
        this.register(m.MZM, {
            execute: async (t, r, n)=>{
                const s = await g.execute(t, r, n);
                if ("success" !== s.result.case || void 0 === s.result.value.requestContext) return s;
                const o = s.clone();
                if ("success" !== o.result.case) return s;
                const i = o.result.value.requestContext;
                if (void 0 === i) return o;
                const a = await u.getState(t), c = nu(a, {
                    internalBrowserProvidersOnly: this.mcpMetaToolEnabled && this.mcpMetaToolSlimDescriptors,
                    inputSchemaJson: this.mcpInputSchemaJson
                });
                if (i.tools = c.tools, i.mcpInstructions = c.mcpInstructions, i.mcpMetaToolOptions = this.mcpMetaToolEnabled ? su(a, {
                    alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool,
                    slimDescriptors: this.mcpMetaToolSlimDescriptors,
                    inputSchemaJson: this.mcpInputSchemaJson
                }) : void 0, i.mcpFileSystemOptions = await e.getMcpFileSystemOptions?.(t), void 0 !== i.env && (i.env.artifactsFolder = e.getArtifactsFolder?.(t), void 0 !== e.getSandboxEnabled && (i.env.sandboxEnabled = e.getSandboxEnabled())), void 0 !== e.getMountedAgentStores && void 0 !== i.env) try {
                    const r = await e.getMountedAgentStores(t);
                    i.env.mountedAgentStores = r.map((e)=>e.clone());
                } catch  {
                    i.env.mountedAgentStores = [], ed.warn(t, "Failed to get mounted agent stores; continuing without prompt inventory");
                }
                return o;
            }
        }), this.backgroundShellExecutor = new xt(this.permissionsService, a, this.ignoreService, this.projectDir, this.backgroundShellFactory, this.backgroundWorkRegistry, this.wakeupOwnerConversationId), this.register(m.OkD, wa(this.backgroundShellExecutor));
        const y = new ju(this.permissionsService, a, this.ignoreService, this.backgroundShellExecutor.getManager());
        this.register(m.wve, function(e, t) {
            const r = new x({
                max: t?.max ?? 10,
                ttl: t?.ttl
            });
            return {
                async *execute (t, n, s) {
                    if (!s?.execId) return void (yield* e.execute(t, n, s));
                    const o = ya(s.execId, n), i = r.get(o);
                    if (i) return void (yield* i.fork());
                    const a = e.execute(t, n, s), c = new ga(a);
                    r.set(o, c), yield* c.fork();
                }
            };
        }(y)), void 0 !== e.agentStoreConflictDrainer && this.register(m.iul, new ma(e.agentStoreConflictDrainer)), this.register(m.GuN, new vu(this.permissionsService)), this.register(m.ODj, new ec(this.permissionsService)), this.register(m.sC3, new zu(this.permissionsService));
        const w = new _u(y);
        this.register(m.PEk, wa(w));
        const v = !1 === e.enableWriteBackgroundShellStdin ? new ha(async ()=>{
            throw new Error(e.writeBackgroundShellStdinDisabledReason ?? "write_shell_stdin is disabled for this session");
        }) : new ha((e, t)=>this.backgroundShellExecutor.writeStdin(e, t));
        if (this.register(m.TQC, wa(v)), e.computerUseExecutor && (this.computerUseExecutor = e.computerUseExecutor, this.register(m.iZk, wa(this.computerUseExecutor))), this.enableRecordScreen) {
            if (!this.recordScreenArtifactsDir || !this.recordScreenDisplay) throw new Error("recordScreenArtifactsDir and recordScreenDisplay are required when enableRecordScreen is true");
            this.recordScreenExecutor = new Ll({
                artifactsDir: this.recordScreenArtifactsDir,
                display: this.recordScreenDisplay,
                disablePolishedRendering: this.disableRecordScreenRendering,
                polishedRenderer: e.polishedRecordingRenderer
            }), this.register(m.pq5, wa(this.recordScreenExecutor));
        }
    }
    createOwnedRequestContextExecutor(e, t, r) {
        const n = new mu(this.cursorRulesService, this.cloudRulesService, this.subagentsService, this.repositoryProvider, this.grepProvider, e, this.gitExecutor, this.workspacePaths, {
            projectDir: this.projectDir,
            isWorkingDirHomeDir: (0, O.yn)(t, (0, ge.homedir)()),
            createFileWatcher: this.createFileWatcher,
            getSandboxEnabled: r.getSandboxEnabled,
            getSandboxSupported: r.getSandboxSupported,
            getNetworkAllowlistInfo: r.getNetworkAllowlistInfo,
            getSmartModeClassifierAutoModeEnabled: this.getSmartModeClassifierAutoModeEnabled,
            getAdminCommandDenylist: this.getAdminCommandDenylist,
            devForceNextSmartModeClassifierBlockToken: this.devForceNextSmartModeClassifierBlockToken,
            getMockPromptTime: this.getMockPromptTime,
            userTerminalHint: this.userTerminalHint,
            getMcpFileSystemOptions: r.getMcpFileSystemOptions,
            mcpMetaToolEnabled: this.mcpMetaToolEnabled,
            mcpMetaToolSlimDescriptors: this.mcpMetaToolSlimDescriptors,
            mcpInputSchemaJson: this.mcpInputSchemaJson,
            alwaysExposeVirtualMcpAuthTool: this.alwaysExposeVirtualMcpAuthTool,
            getArtifactsFolder: r.getArtifactsFolder,
            secretRedactionEnabled: r.secretRedactionEnabled,
            attributionConfigProvider: this.attributionConfigProvider,
            isAttributionDisabledByAdmin: this.isAttributionDisabledByAdmin,
            getAgentSkills: this.getAgentSkills,
            additionalRules: this.additionalRules,
            getComputerUseSupported: ()=>void 0 !== this.computerUseExecutor
        });
        return this.rebuildRequestContextOnRulesChange && (this.ownedRequestContextExecutor = n, this.disposeRulesChangeListener = this.cursorRulesService.onDidChangeRules?.(()=>{
            n.rebuildAllCaches();
        })), n;
    }
    getRecordScreenExecutor() {
        return this.recordScreenExecutor;
    }
    async dispose() {
        this.rebuildRequestContextOnRulesChange && (this.disposeRulesChangeListener?.(), this.disposeRulesChangeListener = void 0, this.ownedRequestContextExecutor?.dispose(), this.ownedRequestContextExecutor = void 0), this.backgroundShellExecutor.dispose(), this.recordScreenExecutor && await this.recordScreenExecutor.dispose();
    }
}
"function" == typeof SuppressedError && SuppressedError;
function rd(e) {
    return e.replace(/\\/g, "/");
}
function nd(e, t) {
    for (const r of t){
        const t = rd(r);
        if (e === t || e.startsWith(`${t}/`)) return !0;
    }
    return !1;
}
var sd;
function od(e, t, r) {
    if (function(e) {
        return Boolean(e.plugin?.trim() || e.pluginId?.trim() || e.marketplaceId?.trim());
    }(e)) return sd.Plugin;
    const n = rd(e.fullPath);
    return nd(n, r.builtinDirs) ? sd.Builtin : fr(e.fullPath, t).inAgentStore ? sd.UserStore : nd(n, r.userDirs) ? sd.UserHome : (nd(n, r.workspaceDirs), sd.Workspace);
}
function id(e, t) {
    if (e.length <= 1) return e;
    const r = function(e) {
        const t = [
            Qt(e.userHomeDirectory).dirPath
        ], r = er(e.userHomeDirectory, !0).map((e)=>e.dirPath), n = [];
        for (const t of e.workspacePaths){
            n.push((0, s.join)(t, ".cursor", "rules"));
            for (const e of Zt(t, !0))n.push(e.dirPath);
        }
        return {
            builtinDirs: t,
            userDirs: r,
            workspaceDirs: n
        };
    }(t), n = e.map((e, n)=>({
            skill: e,
            index: n,
            tier: od(e, t, r)
        }));
    return n.sort((e, t)=>e.tier - t.tier || e.index - t.index), n.map((e)=>e.skill);
}
!function(e) {
    e[e.Builtin = 0] = "Builtin", e[e.UserStore = 1] = "UserStore", e[e.UserHome = 2] = "UserHome", e[e.Workspace = 3] = "Workspace", e[e.Plugin = 4] = "Plugin";
}(sd || (sd = {}));
var ad = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, cd = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const ld = (0, Mt.debuglog)("merged-agent-skills"), ud = (0, T.h)("merged-agent-skills");
class dd {
    constructor(e, t = ()=>[], r){
        this.services = e, this.getDisabledManagedSkillPaths = t, this.getPromptSortContext = r, this.onChangeCallbacks = new Set;
    }
    async getAllAgentSkills(e) {
        const t = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const r = ad(t, (0, C.VI)(e.withName("MergedAgentSkillsService.getAllAgentSkills")), !1), n = this.services.map((e)=>e.getAllAgentSkills(r.ctx).catch((e)=>(ld("Failed to load agent skills from service: %s", e instanceof Error ? e.message : String(e)), []))), s = async ()=>{
                try {
                    return {
                        ok: !0,
                        paths: await this.getDisabledManagedSkillPaths()
                    };
                } catch (e) {
                    return ud.warn(r.ctx, "getDisabledManagedSkillPaths failed; failing closed by dropping all managed skills for this call", {
                        error: e instanceof Error ? e.message : String(e)
                    }), {
                        ok: !1
                    };
                }
            }, [o, i] = await Promise.all([
                Promise.all(n),
                s()
            ]), a = o.flat(), c = this.getPromptSortContext?.(), l = yr(a, c ?? mr);
            let u = l;
            return i.ok ? i.paths.length > 0 && (u = l.filter((e)=>!function(e, t) {
                    if (!e) return !1;
                    const r = e.replace(/\\/g, "/");
                    return t.some((e)=>r.endsWith(e));
                }(e.fullPath, i.paths))) : u = l.filter((e)=>!function(e) {
                    if (!e) return !1;
                    return e.replace(/\\/g, "/").includes(pd);
                }(e.fullPath)), void 0 !== c ? id(u, c) : u;
        } catch (e) {
            t.error = e, t.hasError = !0;
        } finally{
            cd(t);
        }
    }
    reload(e) {
        for (const t of this.services)t.reload(e);
    }
    scheduleDidChangeSkills() {
        void 0 === this.changeTimer && (this.changeTimer = setTimeout(()=>{
            this.changeTimer = void 0;
            for (const e of Array.from(this.onChangeCallbacks))e();
        }, dd.CHANGE_COALESCE_MS));
    }
    ensureChangeListenersRegistered() {
        void 0 === this.disposeChangeListeners && (this.disposeChangeListeners = this.services.map((e)=>e.onDidChangeSkills(()=>this.scheduleDidChangeSkills())));
    }
    disposeChangeListenersIfUnused() {
        if (!(this.onChangeCallbacks.size > 0 || void 0 === this.disposeChangeListeners)) {
            for (const e of this.disposeChangeListeners)e();
            this.disposeChangeListeners = void 0, void 0 !== this.changeTimer && (clearTimeout(this.changeTimer), this.changeTimer = void 0);
        }
    }
    onDidChangeSkills(e) {
        return this.onChangeCallbacks.add(e), this.ensureChangeListenersRegistered(), ()=>{
            this.onChangeCallbacks.delete(e), this.disposeChangeListenersIfUnused();
        };
    }
    dispose() {
        if (void 0 !== this.changeTimer && (clearTimeout(this.changeTimer), this.changeTimer = void 0), this.onChangeCallbacks.clear(), void 0 !== this.disposeChangeListeners) {
            for (const e of this.disposeChangeListeners)e();
            this.disposeChangeListeners = void 0;
        }
        for (const e of this.services)e.dispose();
    }
}
dd.CHANGE_COALESCE_MS = 1500;
const pd = `/${Wt.configDir}/${Wt.subdir}/`;
const md = (0, T.h)("skill-sync-manifest"), hd = ".sync-manifest.json", fd = ".sync-manifest.json.tmp", gd = 1;
function yd() {
    return {
        version: gd,
        skills: {}
    };
}
async function wd(e, t) {
    try {
        const r = await (0, n.readFile)((0, s.join)(e, hd), "utf-8"), o = JSON.parse(r);
        return function(e) {
            if ("object" != typeof e || null === e || Array.isArray(e)) return !1;
            const t = e;
            return "number" == typeof t.version && "object" == typeof t.skills && null !== t.skills && !Array.isArray(t.skills) && (void 0 === t.lastInventoryAt || "number" == typeof t.lastInventoryAt);
        }(o) ? o : (md.warn(t, "Manifest failed schema validation, resetting", {
            skillDir: e
        }), yd());
    } catch (r) {
        return r instanceof Error && "ENOENT" === r.code || md.debug(t, "Failed to read sync manifest, resetting", {
            skillDir: e,
            error: String(r)
        }), yd();
    }
}
function vd(e, t, r) {
    e.skills[t] = {
        lastSyncedAt: r
    };
}
function _d(e, t) {
    delete e.skills[t];
}
var bd = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, Sd = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
const kd = (0, T.h)("builtin-skills-sync"), xd = 864e5, Ed = 2592e5;
function Id() {
    return Qt((0, ge.homedir)()).dirPath;
}
function Td(e) {
    return "object" == typeof e && null !== e && !Array.isArray(e);
}
function Cd(e) {
    return !(!e || e !== e.trim()) && !(e.includes("..") || e.includes("/") || e.includes("\\"));
}
function Pd(e) {
    for (const t of Object.keys(e.resources ?? {}))if (0 === t.length || t.includes("\\") || t.includes("\0") || s.posix.isAbsolute(t) || s.posix.normalize(t) !== t || t.split("/").includes("..") || "SKILL.md" === s.posix.basename(t) || !t.endsWith(".md")) throw new Error(`Unsafe managed skill resource path: ${JSON.stringify(t)}`);
}
function Ad(e) {
    const t = (0, Dt.be)(e.content), r = Td(t.data) ? t.data : {};
    return (0, Dt.Ib)(`${t.content.trim()}\n`, function(e, t) {
        const r = {
            ...t ?? {},
            name: e.id,
            description: e.description
        };
        delete r.disabledEnvironments, e.disableModelInvocation ? r["disable-model-invocation"] = !0 : delete r["disable-model-invocation"], e.environments && e.environments.length > 0 ? r.environments = e.environments : delete r.environments, e.disabledEnvironments && e.disabledEnvironments.length > 0 ? r["disabled-environments"] = e.disabledEnvironments : delete r["disabled-environments"];
        const n = {
            ...Td(r.metadata) ? r.metadata : {}
        };
        return delete n.environments, delete n.disabledEnvironments, delete n["disabled-environments"], Object.keys(n).length > 0 ? r.metadata = n : delete r.metadata, r;
    }(e, r));
}
async function Rd(e, t, r) {
    const o = (0, s.join)(t, r.id), i = (0, s.join)(o, "SKILL.md"), a = r.fileContent, c = Object.keys(r.resources), l = await Md(o);
    if (c.length > 0 || l.length > 0) {
        const e = new Map([
            [
                "SKILL.md",
                a
            ],
            ...Object.entries(r.resources)
        ]), i = new Set([
            "SKILL.md",
            ...l
        ]);
        if (i.size === e.size && [
            ...e.keys()
        ].every((e)=>i.has(e))) {
            let t = !0;
            for (const [r, i] of e)try {
                if (await (0, n.readFile)((0, s.join)(o, ...r.split("/")), "utf-8") !== i) {
                    t = !1;
                    break;
                }
            } catch  {
                t = !1;
                break;
            }
            if (t) return !1;
        }
        return await async function(e, t) {
            const r = (0, s.join)(e, t.id), o = await (0, n.mkdtemp)((0, s.join)(e, `.${t.id}-staging-`)), i = `${o}-backup`;
            let a = !1;
            try {
                await (0, n.writeFile)((0, s.join)(o, "SKILL.md"), t.fileContent, "utf-8");
                for (const [e, r] of Object.entries(t.resources)){
                    const t = (0, s.join)(o, ...e.split("/"));
                    await (0, n.mkdir)((0, s.dirname)(t), {
                        recursive: !0
                    }), await (0, n.writeFile)(t, r, "utf-8");
                }
                try {
                    await (0, n.rename)(r, i), a = !0;
                } catch (e) {
                    if (!(e instanceof Error) || "ENOENT" !== e.code) throw e;
                }
                try {
                    await (0, n.rename)(o, r);
                } catch (e) {
                    throw a && (await (0, n.rename)(i, r), a = !1), e;
                }
                a && (await (0, n.rm)(i, {
                    recursive: !0,
                    force: !0
                }), a = !1);
            } finally{
                await (0, n.rm)(o, {
                    recursive: !0,
                    force: !0
                });
            }
        }(t, r), !0;
    }
    try {
        if (await (0, n.readFile)(i, "utf-8") === a) return !1;
    } catch (t) {
        t instanceof Error && "ENOENT" === t.code || kd.warn(e, "Unexpected error reading skill file", {
            skillId: r.id,
            error: String(t)
        });
    }
    return await (0, n.mkdir)(o, {
        recursive: !0
    }), await (0, n.writeFile)(i, a, "utf-8"), !0;
}
async function Md(e, t = "") {
    const r = t ? (0, s.join)(e, ...t.split("/")) : e;
    let o;
    try {
        o = await (0, n.readdir)(r, {
            withFileTypes: !0
        });
    } catch (e) {
        if (e instanceof Error && "ENOENT" === e.code) return [];
        throw e;
    }
    const i = [];
    for (const r of o){
        const n = t ? `${t}/${r.name}` : r.name;
        r.isDirectory() ? i.push(...await Md(e, n)) : r.isFile() && r.name.endsWith(".md") && "SKILL.md" !== n && i.push(n);
    }
    return i;
}
async function Jd(e, t) {
    try {
        return (await (0, n.readdir)(t, {
            withFileTypes: !0
        })).filter((e)=>e.isDirectory() && !e.name.startsWith(".")).map((e)=>e.name);
    } catch (r) {
        return r instanceof Error && "ENOENT" === r.code || kd.warn(e, "Failed to list skills directory, skipping cleanup", {
            skillDir: t,
            error: String(r)
        }), [];
    }
}
async function Od(e, t = {}) {
    const r = {
        stack: [],
        error: void 0,
        hasError: !1
    };
    try {
        const o = bd(r, (0, C.VI)(e.withName("syncBuiltinSkills")), !1).ctx, i = Date.now(), a = Id();
        await (0, n.mkdir)(a, {
            recursive: !0
        });
        const [c, l] = await Promise.all([
            wd(a, o),
            Jd(o, a)
        ]), u = c.lastInventoryAt;
        (void 0 === u || i - u >= xd) && (await async function(e, t, r, n) {
            try {
                const o = await Promise.all(r.map(async (e)=>{
                    const r = (0, s.join)(t, e), [o, i] = await Promise.all([
                        Bd((0, s.join)(r, "SKILL.md")),
                        "canvas" === e ? Bd((0, s.join)(r, "sdk")) : Promise.resolve(!1)
                    ]);
                    return {
                        skill_id: e,
                        has_skill_md: o,
                        has_sdk_dir: i,
                        last_synced_at: n.skills[e]?.lastSyncedAt ?? null
                    };
                }));
                kd.info(e, "managed_skills.startup_inventory", {
                    skills_on_disk: o,
                    manifest_present: Object.keys(n.skills).length > 0
                });
            } catch (t) {
                kd.warn(e, "Failed to emit managed skills startup inventory", {
                    error: String(t)
                });
            }
        }(o, a, l, c), c.lastInventoryAt = i);
        const d = new Map;
        for (const e of t.managedSkills ?? [])Cd(e.id) ? d.set(e.id, e) : kd.warn(o, "Skipping managed skill with unsafe id", {
            skillId: e.id
        });
        const p = new Set([
            ...d.keys(),
            ...l
        ]);
        let m = 0, h = 0;
        const f = [];
        for (const e of p)try {
            const t = d.get(e), r = c.skills[e], u = r ? i - r.lastSyncedAt : 0, p = void 0 !== r && u > Ed, g = void 0 !== t && (0, Jt.r6M)(t, "local"), y = void 0 !== t && !g, w = void 0 !== r || l.includes(e);
            if (t && !1 !== t.enabled && g) {
                Pd(t);
                await Rd(o, a, {
                    id: e,
                    fileContent: Ad(t),
                    resources: t.resources ?? {}
                }) ? m++ : h++, vd(c, e, i);
            } else if (!1 === t?.enabled || y || p) {
                const l = !1 === t?.enabled ? "enabled_false" : y ? "environment_ineligible" : "grace_expired";
                await (0, n.rm)((0, s.join)(a, e), {
                    recursive: !0,
                    force: !0
                }), _d(c, e), w && (f.push(e), kd.info(o, "managed_skills.removed", {
                    skill_id: e,
                    reason: l,
                    server_enabled: t?.enabled ?? null,
                    had_manifest_entry: void 0 !== r,
                    last_synced_ms_ago: r ? i - r.lastSyncedAt : null
                }));
            } else r || vd(c, e, i);
        } catch (t) {
            kd.warn(o, "Failed to apply skill, will retry next sync", {
                skillId: e,
                error: String(t)
            });
        }
        try {
            await async function(e, t) {
                const r = (0, s.join)(e, fd), o = (0, s.join)(e, hd);
                await (0, n.mkdir)(e, {
                    recursive: !0
                }), await (0, n.writeFile)(r, JSON.stringify(t, null, 2), "utf-8"), await (0, n.rename)(r, o);
            }(a, c);
        } catch (e) {
            !function(e) {
                if (e instanceof Error && "ENOENT" === e.code) return !0;
                const t = String(e);
                return t.includes("ENOENT") || t.includes("no such file or directory");
            }(e) ? kd.warn(o, "Failed to persist sync manifest", {
                skillDir: a,
                error: String(e)
            }) : kd.debug(o, "Skipped persisting sync manifest, path removed concurrently", {
                skillDir: a,
                error: String(e)
            });
        }
        return {
            synced: m,
            upToDate: h,
            removed: f
        };
    } catch (e) {
        r.error = e, r.hasError = !0;
    } finally{
        Sd(r);
    }
}
async function Bd(e) {
    try {
        return await (0, n.stat)(e), !0;
    } catch (e) {
        const t = e.code;
        if ("ENOENT" === t || "ENOTDIR" === t) return !1;
        throw e;
    }
}
(0, T.h)("managed-skills-sync");
function Dd(e, t) {
    return e || t.sourceInfo.name;
}
class qd {
    constructor(e){
        this.pluginsService = e;
    }
    async getPluginCommands() {
        const e = await this.pluginsService.reload(), t = [];
        for (const r of e){
            const e = (0, Jt.xJd)(r.identifier), n = Dd(r.displayName, r.identifier), o = (0, Jt.R3Q)(r.identifier), i = (0, Jt.iUy)(r.identifier), a = r.installPath;
            for (const c of r.commands)t.push({
                filename: (0, s.basename)(c.path),
                name: c.name,
                description: c.description,
                argumentHint: c.argumentHint,
                content: c.content,
                filePath: (0, s.join)(a, c.path),
                pluginId: e,
                pluginName: n,
                marketplace: o,
                marketplaceId: i,
                pluginSource: r.identifier.source
            });
        }
        return t;
    }
}
class Nd {
    constructor(e){
        this.pluginsService = e;
    }
    async getPluginHooks(e) {
        const t = !1 === e?.forceReload ? await this.pluginsService.getAllEnabledPlugins() : await this.pluginsService.reload(), r = [], n = [];
        for (const e of t){
            const t = e.hooks;
            t && ("config" in t ? r.push({
                pluginKey: (0, Jt.s4m)(e.identifier),
                installPath: e.installPath,
                config: t.config,
                sourcePath: t.sourcePath,
                plugin: (0, Jt.dBY)(e.identifier),
                marketplace: (0, Jt.R3Q)(e.identifier),
                pluginId: (0, Jt.xJd)(e.identifier),
                marketplaceId: (0, Jt.iUy)(e.identifier)
            }) : n.push(t.error));
        }
        return {
            hooks: r,
            errors: n
        };
    }
}
function Fd(e) {
    try {
        const t = new URL(e), r = new URL(t.pathname, t.origin);
        return r.search = t.search, r.pathname.endsWith("/") && r.pathname.length > 1 && (r.pathname = r.pathname.slice(0, -1)), "/" === r.pathname ? r.origin + r.search : r.toString();
    } catch  {
        return e.toLowerCase().trim();
    }
}
class Ud {
    constructor(e){
        this.pluginsService = e;
    }
    async getPluginMcpServers() {
        const e = await this.pluginsService.reload(), t = [];
        for (const r of e){
            const e = "marketplace" in r.identifier.sourceInfo ? r.identifier.sourceInfo.marketplace : void 0, n = "marketplaceDbId" in r.identifier.sourceInfo ? r.identifier.sourceInfo.marketplaceDbId : void 0, s = r.identifier.sourceInfo.name, o = "pluginDbId" in r.identifier.sourceInfo ? r.identifier.sourceInfo.pluginDbId : void 0, i = r.mcpConfig;
            i && t.push(...(0, Jt.Iqv)(i, e, n, s, o, r.identifier.source));
        }
        return function(e) {
            const t = [], r = new Set;
            for (const n of e){
                if ("streamableHttp" !== n.type || !n.url) {
                    t.push(n);
                    continue;
                }
                const e = Fd(n.url);
                r.has(e) || (r.add(e), t.push(n));
            }
            return t;
        }(t);
    }
}
var Ld = function(e, t, r) {
    if (null != t) {
        if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
        }
        if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n);
        }
        if ("function" != typeof n) throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        });
    } else r && e.stack.push({
        async: !0
    });
    return t;
}, $d = function(e) {
    return function(t) {
        function r(r) {
            t.error = t.hasError ? new e(r, t.error, "An error was suppressed during disposal.") : r, t.hasError = !0;
        }
        var n, s = 0;
        return function e() {
            for(; n = t.stack.pop();)try {
                if (!n.async && 1 === s) return s = 0, t.stack.push(n), Promise.resolve().then(e);
                if (n.dispose) {
                    var o = n.dispose.call(n.value);
                    if (n.async) return s |= 2, Promise.resolve(o).then(e, function(t) {
                        return r(t), e();
                    });
                } else s |= 1;
            } catch (e) {
                r(e);
            }
            if (1 === s) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
            if (t.hasError) throw t.error;
        }();
    };
}("function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
});
function jd(e, t) {
    if (void 0 === e) return [];
    return (Array.isArray(e) ? e : [
        e
    ]).map((e)=>({
            ...e,
            userHomeDir: t
        }));
}
class Gd {
    constructor(e, t, r, n, s, o){
        this.workspacePaths = e, this.userHomeDirectory = t, this.getSettings = r, this.marketplaceOptions = n, this.localPluginVariablesLookup = o, this.plugins = [], this._loadFailures = [], this._pluginSetIncomplete = !0, this._retainedFromPreviousLoad = 0, this._wasFirstLoad = !0, this.loadedOnce = !1, this._extensionPlugins = new Map, this._extensionPluginOriginalPaths = new Map, this.pluginLogger = s ?? Jt.NzK, this.reload();
    }
    async getAllEnabledPlugins() {
        return await this.ensureLoaded(), [
            ...this.plugins
        ];
    }
    getLoadFailures() {
        return [
            ...this._loadFailures
        ];
    }
    isPluginSetIncomplete() {
        return this._pluginSetIncomplete;
    }
    getLoadDiagnostics() {
        return {
            userHomeDirectory: this.userHomeDirectory,
            pluginsLoaded: this.plugins.length,
            retainedFromPreviousLoad: this._retainedFromPreviousLoad,
            wasFirstLoad: this._wasFirstLoad,
            sourceUnavailable: this._pluginSetIncomplete
        };
    }
    async reload() {
        return this.loadPromise || (this.loadPromise = this.load().then(async (e)=>{
            const t = !this.loadedOnce;
            let r = [];
            try {
                r = await this._reloadExtensionPlugins();
            } catch (e) {
                this.pluginLogger.log("error", `Failed to reload extension plugins after base load success: ${e}`);
            }
            const n = e.sourceUnavailable ? this._retainPluginsMissingFromPartialLoad(e.plugins) : [], s = [
                ...e.plugins,
                ...n
            ], o = new Set(s.map((e)=>e.installPath)), i = r.filter((e)=>!o.has(e.installPath));
            return this.plugins = [
                ...s,
                ...i
            ], e.sourceUnavailable || (this._loadFailures = e.failures), this._pluginSetIncomplete = e.sourceUnavailable, this._retainedFromPreviousLoad = n.length, this._wasFirstLoad = t, this.loadedOnce = !0, this.pluginLogger.log("info", `Plugins reload completed: ${this.plugins.length} plugins loaded (${i.length} extension, ${n.length} retained), ${e.failures.length} failures`), this.plugins;
        }).catch(async (e)=>{
            const t = !this.loadedOnce;
            this.pluginLogger.log("error", `Failed to load plugins: ${e}`), this._pluginSetIncomplete = !0, this._retainedFromPreviousLoad = 0, this._wasFirstLoad = t;
            try {
                const e = await this._reloadExtensionPlugins(), t = new Set(this.plugins.map((e)=>e.installPath));
                this.plugins = [
                    ...this.plugins,
                    ...e.filter((e)=>!t.has(e.installPath))
                ];
            } catch (e) {
                this.pluginLogger.log("error", `Failed to reload extension plugins after base load failure: ${e}`);
            }
            return this.loadedOnce = !0, this.plugins;
        }).finally(()=>{
            this.loadPromise = void 0;
        })), this.loadPromise;
    }
    _retainPluginsMissingFromPartialLoad(e) {
        if (!this.loadedOnce) return [];
        const t = new Set(e.map(Jt.ICo));
        return this.plugins.filter((e)=>"extension" !== e.identifier.source && void 0 === e.loadError && e.installPath.length > 0 && !t.has((0, Jt.ICo)(e)));
    }
    async reloadPlugin(e) {
        this.loadPromise && await this.loadPromise;
        const t = jd(this.marketplaceOptions, this.userHomeDirectory);
        if (0 === t.length) return;
        if (!(this.getSettings().loadCursorFirstParty ?? t.length > 0)) return;
        const r = (t)=>t.pluginDbId === e.pluginDbId, n = (e)=>"cursor-first-party" === e.identifier.source || "cursor-third-party" === e.identifier.source ? e.identifier.sourceInfo : void 0, s = (t)=>n(t)?.pluginDbId === e.pluginDbId, o = (t, r)=>void 0 !== t.pluginDbId ? t.pluginDbId === e.pluginDbId : t.pluginName === r?.name && t.marketplaceName === r?.marketplace;
        let i, a, c;
        for (const l of t){
            let t;
            try {
                t = await (0, Jt.FY4)({
                    ...l,
                    log: l.log ?? this.pluginLogger,
                    pluginFilter: r
                });
            } catch (t) {
                this.pluginLogger.log("error", `reloadPlugin: source load failed for ${e.name}: ${t}`);
                continue;
            }
            const u = t.plugins.find((e)=>s(e) && void 0 === e.loadError);
            if (void 0 !== u) {
                i = u;
                break;
            }
            const d = t.plugins.find(s);
            if (void 0 !== d && void 0 === a) {
                const e = n(d);
                a = d, c = t.failures.find((t)=>o(t, e));
            }
        }
        if (void 0 === i) {
            if (void 0 !== a) {
                const t = n(a), r = {
                    ...c ?? {
                        pluginName: t?.name ?? e.name,
                        errorMessage: a.loadError ?? "Plugin load failed",
                        errorType: "unknown",
                        ...void 0 !== t?.marketplace && {
                            marketplaceName: t.marketplace
                        }
                    },
                    pluginDbId: e.pluginDbId
                };
                this._loadFailures = [
                    ...this._loadFailures.filter((e)=>!o(e, t)),
                    r
                ];
            }
            return;
        }
        const l = this.plugins.findIndex(s);
        if (-1 === l) this.plugins = [
            ...this.plugins,
            i
        ];
        else {
            const e = [
                ...this.plugins
            ];
            e[l] = i, this.plugins = e;
        }
        this.loadedOnce = !0;
        const u = n(i);
        return this._loadFailures = this._loadFailures.filter((e)=>!o(e, u)), i;
    }
    async registerExtensionPlugin({ path: e, extensionId: t }) {
        const r = (0, s.resolve)(e), o = await (0, n.realpath)(r);
        if (!(await (0, n.stat)(o)).isDirectory()) throw new Error(`Extension plugin path is not a directory: ${o}`);
        const i = ge.homedir();
        if (o.split(s.sep).filter(Boolean).length < 3 || o === i || "/" === o) throw new Error(`Extension plugin path is too broad (must be a specific subdirectory, not root or home): ${o}`);
        for (const [e, r] of this._extensionPlugins)if (e !== t && r.has(o)) throw new Error(`Plugin path ${o} is already registered by extension ${e}`);
        let a = this._extensionPlugins.get(t);
        if (a || (a = new Map, this._extensionPlugins.set(t, a)), a.has(o)) return void this._rememberExtensionPluginOriginalPath({
            extensionId: t,
            originalPath: r,
            canonicalPath: o
        });
        const c = (0, s.basename)(o), l = await this._loadExtensionPluginContent(o, t);
        a.set(o, l), this._rememberExtensionPluginOriginalPath({
            extensionId: t,
            originalPath: r,
            canonicalPath: o
        }), this.pluginLogger.log("info", `Registered extension plugin: ${c} from ${o} (extension: ${t})`);
    }
    async unregisterExtensionPlugin({ path: e, extensionId: t }) {
        const r = this._extensionPlugins.get(t);
        if (!r) return !1;
        const o = (0, s.resolve)(e);
        let i;
        try {
            i = await (0, n.realpath)(o);
        } catch  {
            const e = this._extensionPluginOriginalPaths.get(t);
            i = e?.get(o) ?? o;
        }
        const a = r.delete(i);
        return 0 === r.size ? (this._extensionPlugins.delete(t), this._extensionPluginOriginalPaths.delete(t)) : a && this._forgetExtensionPluginOriginalPath(t, i), a && this.pluginLogger.log("info", `Unregistered extension plugin: ${i} (extension: ${t})`), a;
    }
    async _loadExtensionPluginContent(e, t) {
        const r = (0, s.basename)(e), n = {
            name: r,
            localPath: e,
            extensionId: t
        }, o = await (0, Jt.Y__)(e, r, {
            name: r,
            version: "0.0.0"
        });
        return o.displayName && (n.name = o.displayName), {
            identifier: {
                source: "extension",
                sourceInfo: n
            },
            installPath: e,
            ...void 0 !== o.displayName && {
                displayName: o.displayName
            },
            ...void 0 !== o.description && {
                description: o.description
            },
            ...void 0 !== o.authorName && {
                authorName: o.authorName
            },
            ...void 0 !== o.logoUrl && {
                logoUrl: o.logoUrl
            },
            ...void 0 !== o.version && {
                version: o.version
            },
            ...void 0 !== o.homepage && {
                homepage: o.homepage
            },
            ...void 0 !== o.repository && {
                repository: o.repository
            },
            skills: o.skills,
            rules: o.rules,
            agents: o.agents,
            commands: o.commands,
            mcpConfig: o.mcpConfig ?? void 0,
            capabilities: o.capabilities,
            hooks: o.hooks
        };
    }
    _rememberExtensionPluginOriginalPath(e) {
        let t = this._extensionPluginOriginalPaths.get(e.extensionId);
        t || (t = new Map, this._extensionPluginOriginalPaths.set(e.extensionId, t)), t.set(e.originalPath, e.canonicalPath);
    }
    _forgetExtensionPluginOriginalPath(e, t) {
        const r = this._extensionPluginOriginalPaths.get(e);
        if (r) {
            for (const [e, n] of r)n === t && r.delete(e);
            0 === r.size && this._extensionPluginOriginalPaths.delete(e);
        }
    }
    _getExtensionPluginPaths() {
        const e = [];
        for (const [t, r] of this._extensionPlugins)for (const n of r.keys())e.push({
            canonicalPath: n,
            extensionId: t
        });
        return e;
    }
    async _reloadExtensionPlugins() {
        const e = this._getExtensionPluginPaths(), t = [];
        for (const { canonicalPath: r, extensionId: n } of e)try {
            const e = await this._loadExtensionPluginContent(r, n), s = this._extensionPlugins.get(n);
            s && s.set(r, e), t.push(e);
        } catch (e) {
            this.pluginLogger.log("error", `Failed to reload extension plugin ${r}: ${e}`);
            const s = this._extensionPlugins.get(n), o = s?.get(r);
            o && t.push(o);
        }
        return t;
    }
    async ensureLoaded() {
        this.loadPromise ? await this.loadPromise : this.loadedOnce || await this.reload();
    }
    async load() {
        const e = {
            stack: [],
            error: void 0,
            hasError: !1
        };
        try {
            const t = (0, ye.q6)().withName("LocalPluginsService.load"), r = (Ld(e, (0, C.VI)(t), !1), performance.now()), n = (e)=>{
                this.pluginLogger.increment(`local_plugins_service.load.${e}`, 1), this.pluginLogger.distribution("local_plugins_service.load.duration", performance.now() - r, {
                    outcome: e
                });
            }, s = this.getSettings(), o = jd(this.marketplaceOptions, this.userHomeDirectory), i = s.importThirdPartyPlugins, a = s.loadUserLocalPlugins ?? !0, c = s.loadCursorFirstParty ?? o.length > 0;
            if (!i && !c && !a) return this.pluginLogger.log("info", "Skipping plugin loading, cursor 1p, 3p, and user-local plugins are disabled"), {
                plugins: [],
                failures: [],
                sourceUnavailable: !1
            };
            this.pluginLogger.increment("local_plugins_service.load.start", 1);
            const l = (e, t)=>{
                this.pluginLogger.increment("local_plugins_service.load_plugin.error", 1), this.pluginLogger.log("error", `Cursor plugin load error ${e.name}@${e.version}: ${t?.message ?? String(t)}`);
            };
            try {
                const e = await (0, Jt.wpN)(this.workspacePaths, {
                    userHomeDir: this.userHomeDirectory,
                    loadClaude: i,
                    loadUserLocal: a,
                    loadCursorFirstParty: c && o.length > 0,
                    marketplaceSources: o.length > 0 ? o.map((e)=>({
                            ...e,
                            onCursorError: l
                        })) : void 0,
                    onError: (e, t)=>{
                        this.pluginLogger.log("error", `Claude plugin load error ${e.raw}: ${t?.message ?? String(t)}`);
                    },
                    log: this.pluginLogger,
                    localPluginVariablesLookup: this.localPluginVariablesLookup
                });
                return n("success"), this.pluginLogger.log("info", `Plugins loaded in ${(performance.now() - r).toFixed(1)}ms`), e;
            } catch (e) {
                return n("error"), this.pluginLogger.log("error", `Failed to load all plugins: ${e}`), {
                    plugins: [],
                    failures: [],
                    sourceUnavailable: !0
                };
            }
        } catch (t) {
            e.error = t, e.hasError = !0;
        } finally{
            $d(e);
        }
    }
}
var zd = require("./module-28242.js");
const Wd = 3e5, Hd = BigInt(0), Kd = BigInt(8), Vd = BigInt(16), Yd = BigInt(65535);
function Qd(e) {
    const t = e.trim();
    if (0 === t.length) return;
    const r = t.includes("://") ? t : `https://${t}`;
    try {
        return new URL(r);
    } catch  {
        return;
    }
}
function Xd(e) {
    let t = e.trim().replace(/\.+$/, "").toLowerCase();
    if (t.startsWith("[")) {
        const e = t.indexOf("]");
        -1 !== e && (t = t.slice(1, e));
    } else if (t.split(":").length - 1 == 1) {
        const e = t.lastIndexOf(":");
        [
            ...t.slice(e + 1)
        ].every((e)=>/\d/.test(e)) && (t = t.slice(0, e));
    }
    return t;
}
function Zd(e) {
    const t = e.split(".");
    if (4 !== t.length) return;
    let r = Hd;
    for (const e of t){
        if (!/^\d{1,3}$/.test(e)) return;
        const t = Number(e);
        if (!Number.isInteger(t) || t < 0 || t > 255) return;
        r = r << Kd | BigInt(t);
    }
    return {
        version: 4,
        value: r
    };
}
function ep(e) {
    if (0 === e.length) return [];
    const t = [], r = e.split(":");
    for(let e = 0; e < r.length; e++){
        const n = r[e];
        if (0 === n.length) return;
        if (n.includes(".")) {
            if (e !== r.length - 1) return;
            const s = Zd(n);
            if (!s) return;
            t.push(Number(s.value >> Vd & Yd)), t.push(Number(s.value & Yd));
            continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n)) return;
        t.push(Number.parseInt(n, 16));
    }
    return t;
}
function tp(e) {
    return Zd(e) ?? function(e) {
        const t = Xd(e);
        if (0 === t.length || t.includes(":::")) return;
        const r = t.indexOf("::");
        if (-1 === r) {
            const e = ep(t);
            if (!e || 8 !== e.length) return;
            return {
                version: 6,
                value: e.reduce((e, t)=>e << Vd | BigInt(t), Hd)
            };
        }
        if (-1 !== t.indexOf("::", r + 1)) return;
        const n = ep(t.slice(0, r)), s = ep(t.slice(r + 2));
        if (!n || !s) return;
        const o = n.length + s.length;
        if (o > 7) return;
        return {
            version: 6,
            value: [
                ...n,
                ...new Array(8 - o).fill(0),
                ...s
            ].reduce((e, t)=>e << Vd | BigInt(t), Hd)
        };
    }(e);
}
function rp(e, t) {
    const r = Xd(e), n = Xd(t);
    if ("*" === n) return !0;
    if (n.includes("/")) return function(e, t) {
        const r = t.lastIndexOf("/");
        if (r <= 0 || r === t.length - 1) return !1;
        const n = tp(t.slice(0, r)), s = tp(e);
        if (!n || !s || n.version !== s.version) return !1;
        const o = Number(t.slice(r + 1)), i = 4 === n.version ? 32 : 128;
        if (!Number.isInteger(o) || o < 0 || o > i) return !1;
        const a = BigInt(i - o);
        return s.value >> a === n.value >> a;
    }(r, n);
    if (n.startsWith("*.")) {
        const e = n.slice(2);
        return r === e || r.endsWith(`.${e}`);
    }
    return r === n;
}
function np(e, t) {
    if (!e.includes("*")) return e === t;
    const r = e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    return new RegExp(`^${r}$`).test(t);
}
function sp(e, t) {
    if (np(e, t)) return !0;
    if (e.includes("://")) {
        let r, n;
        try {
            r = new URL(e), n = new URL(t);
        } catch  {
            return !1;
        }
        if ("" !== r.username || "" !== r.password || "" !== n.username || "" !== n.password || r.protocol !== n.protocol || r.port !== n.port) return !1;
        const s = Xd(r.hostname);
        return !!rp(Xd(n.hostname), s) && np(`${r.pathname}${r.search}`, `${n.pathname}${n.search}`);
    }
    const r = function(e) {
        const t = (function(e) {
            const t = e.trim(), r = t.indexOf("["), n = t.indexOf("]");
            if (-1 !== r && n > r) {
                const e = t.slice(r + 1, n);
                if (t.slice(n + 1).startsWith("(")) return `${t.slice(0, r)}${e}`;
            }
            return t;
        })(e).trim();
        if (0 === t.length) return;
        const r = t.lastIndexOf("/");
        if (!t.includes("://") && r > 0 && /^\d+$/.test(t.slice(r + 1).trim())) {
            const e = Xd(t.slice(0, r));
            if (e.length > 0) return `${e}/${t.slice(r + 1).trim()}`;
        }
        const n = Qd(t);
        if (n) return Xd(n.hostname);
        let s = t;
        const o = s.indexOf("://");
        -1 !== o && (s = s.slice(o + 3));
        const i = s.indexOf("/");
        -1 !== i && (s = s.slice(0, i));
        const a = Xd(function(e) {
            if (e.startsWith("[")) {
                const t = e.indexOf("]");
                return -1 !== t ? e.slice(1, t) : e;
            }
            const t = e.split(":");
            return 2 === t.length && [
                ...t[1]
            ].every((e)=>/\d/.test(e)) ? t[0] : e;
        }(s));
        if (0 !== a.length) {
            if (a.startsWith("*.")) {
                const e = a.slice(2);
                if (0 === e.length || e.includes("*") || e.includes("?")) return;
                return a;
            }
            if (!a.includes("*") && !a.includes("?")) return a;
        }
    }(e), n = function(e) {
        const t = Qd(e);
        if (t) return Xd(t.hostname);
        const r = Xd(e);
        return r.length > 0 ? r : void 0;
    }(t);
    return !(!r || !n) && rp(n, r);
}
function op({ failOpenWhenEmpty: e, server: t, settings: r }) {
    if (!0 !== r?.allowedMcpConfiguration?.requireMcpServersInTeamNetworkAllowlist || void 0 === t.url) return {
        blocked: !1
    };
    const n = (r.networkAllowlist ?? []).map((e)=>e.trim()).filter((e)=>e.length > 0);
    return 0 === n.length && e || hc(t.url, n) ? {
        blocked: !1
    } : {
        blocked: !0,
        reason: "teamNetworkAllowlist",
        message: "Not on the team network allowlist"
    };
}
function ip(e) {
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
function ap(e, t) {
    const r = ip(e.command), n = ip(e.serverUrl);
    if (!(void 0 !== r) && !(void 0 !== n)) return !1;
    const s = void 0 === r || void 0 !== t.command && function(e, t) {
        if (!e.includes("*")) return e === t;
        const r = e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
        return new RegExp(`^${r}$`).test(t);
    }(r, t.command), o = void 0 === n || void 0 !== t.url && sp(n, t.url);
    return s && o;
}
function cp(e, t) {
    if ("workspace" !== e) return [];
    const r = [], n = new Set;
    for (const e of t ?? []){
        const t = e.trim();
        0 === t.length || n.has(t) || (n.add(t), r.push(t));
    }
    return r;
}
class lp {
    constructor(e){
        this.fetch = e;
    }
    get() {
        const e = this.cached, t = void 0 === e ? 1 / 0 : Date.now() - e.fetchedAt;
        return void 0 === e || t > 6e5 ? (this.cached = void 0, this.refresh()) : (t > Wd && this.refresh().catch(()=>{}), Promise.resolve(e.value));
    }
    invalidate() {
        this.cached = void 0, this.inFlight = void 0;
    }
    refresh() {
        if (void 0 === this.inFlight) {
            const e = this.fetch().then((t)=>(this.inFlight !== e || void 0 === t && void 0 !== this.cached || (this.cached = {
                    value: t,
                    fetchedAt: Date.now()
                }), t)).finally(()=>{
                this.inFlight === e && (this.inFlight = void 0);
            });
            this.inFlight = e;
        }
        return this.inFlight;
    }
}
class up {
    constructor(e, t, r = {}){
        this.teamAdminSettingsProvider = e, this.defaultAllowlistProvider = t, this.options = r, this.lastFetchSucceeded = !0, this.settings = new lp(()=>this.fetchSettings()), this.teamRepos = new lp(()=>this.teamAdminSettingsProvider.getTeamRepos()), this.defaultAllowlist = new lp(()=>this.fetchDefaultAllowlist()), this.getTeamAdminSettings();
    }
    invalidateCache() {
        this.settings.invalidate(), this.defaultAllowlist.invalidate();
    }
    async fetchSettings() {
        try {
            const e = await this.teamAdminSettingsProvider.getTeamAdminSettings();
            return this.lastFetchSucceeded = !0, e;
        } catch (e) {
            throw this.lastFetchSucceeded = !1, e;
        }
    }
    getTeamAdminSettings() {
        return this.settings.get().catch(()=>{});
    }
    async getDotCursorProtection() {
        const e = await this.getTeamAdminSettings();
        return e?.dotCursorProtection ?? !0;
    }
    async getShouldBlockMcp() {
        const e = await this.getTeamAdminSettings();
        return !(!e?.autoRunControls?.enabled || !e?.autoRunControls?.disableMcpAutoRun);
    }
    async getDeleteFileProtection() {
        const e = await this.getTeamAdminSettings();
        return !(!e?.autoRunControls?.enabled || !e?.autoRunControls?.deleteFileProtection);
    }
    async getIsHeadlessDisabled() {
        return "disabled" === (await this.getHeadlessCliPolicy()).kind;
    }
    async getHeadlessCliPolicy() {
        const e = await this.getTeamAdminSettings();
        return void 0 !== e || this.lastFetchSucceeded ? !0 === e?.cliSettings?.disableHeadless ? {
            kind: "disabled"
        } : {
            kind: "enabled"
        } : {
            kind: "unavailable"
        };
    }
    async getMcpServerBlockInfo(e) {
        const t = await this.getTeamAdminSettings(), r = t?.allowedMcpConfiguration, n = await this.isMcpSettingsOverhaulEnabled({
            disableExposureLog: !0
        });
        if (!0 === r?.disableAll) return {
            blocked: !0,
            reason: "teamPolicy",
            message: "Blocked by team policy"
        };
        if (n) {
            if (function(e, t, r) {
                if (!0 === r?.useCorePolicy) return !(0, Bs.Y)(e, t);
                if (void 0 === t) return !1;
                if (!0 === t.disableAll) return !0;
                const n = t.allowedMcpServers;
                return 0 !== n.length && !n.some((t)=>ap(t, e));
            }(e, r, {
                useCorePolicy: !0
            })) return {
                blocked: !0,
                reason: "teamPolicy",
                message: "Blocked by team policy"
            };
            const n = await this.getMcpNetworkControlsConfig(e), s = void 0 === e.url ? {
                allowed: !0
            } : (0, Bs.ME)(e.url, n);
            if (!s.allowed) return {
                blocked: !0,
                reason: "teamNetworkAllowlist",
                message: s.message
            };
            const o = op({
                failOpenWhenEmpty: !1,
                server: e,
                settings: t
            });
            if (o.blocked) return o;
        }
        if (!n) {
            const r = function({ isMcpAccessNetworkAllowlistEnabled: e, server: t, settings: r }) {
                return e && !0 === r?.allowedMcpConfiguration?.requireMcpServersInTeamNetworkAllowlist ? op({
                    failOpenWhenEmpty: !0,
                    server: t,
                    settings: r
                }) : {
                    blocked: !1
                };
            }({
                isMcpAccessNetworkAllowlistEnabled: await this.isMcpAccessNetworkAllowlistEnabled(),
                server: e,
                settings: t
            });
            if (r.blocked) return r;
        }
        return {
            blocked: !1
        };
    }
    async getMcpNetworkControlsConfig(e) {
        const t = await this.getTeamAdminSettings(), r = t?.allowedMcpConfiguration;
        if (await this.isMcpSettingsOverhaulEnabled()) {
            const n = "win32" === process.platform && await this.isWin32UserExtensionStdioUnsandboxEnabled();
            return (0, Bs._N)({
                allowedMcpConfiguration: r,
                server: e,
                localAgentNetworkAllowlist: t?.networkAllowlist,
                blockMessage: "Not on the team network allowlist",
                aggregateManagedServerNetworkAllowlists: !1,
                stdioPlatform: process.platform,
                unsandboxUserExtensionStdio: n
            });
        }
        return {
            enabled: !1,
            localAgentNetworkAllowlist: t?.networkAllowlist,
            blockMessage: "Not on the team network allowlist"
        };
    }
    async isServerBlocked(e) {
        return (await this.getMcpServerBlockInfo(e)).blocked;
    }
    async getAutoRunControls() {
        const e = await this.getTeamAdminSettings();
        if (e?.autoRunControls?.enabled) return {
            enabled: e.autoRunControls.enabled,
            allowed: e.autoRunControls.allowed ?? [],
            blocked: e.autoRunControls.blocked ?? [],
            enableAllowlistMode: e.autoRunControls.enableAllowlistMode ?? !0,
            enableRunEverything: e.autoRunControls.enableRunEverything ?? !1,
            enableSmartAuto: e.autoRunControls.enableSmartAuto ?? !0,
            mcpToolAllowlist: e.autoRunControls.mcpToolAllowlist ?? []
        };
    }
    async isReadControlEnabled() {
        try {
            return await this.options.isReadControlEnabled?.() ?? !0;
        } catch  {
            return !1;
        }
    }
    async isDenylistEnforcementKilled() {
        try {
            return !0 === await this.options.isAdminCommandDenylistEnforcementKilled?.();
        } catch  {
            return !1;
        }
    }
    async getAdminCommandDenylist() {
        if (await this.isDenylistEnforcementKilled()) return {
            rules: []
        };
        const e = await this.getTeamAdminSettings();
        return {
            rules: e?.autoRunControls?.adminCommandDenylist?.rules ?? []
        };
    }
    async isMcpSettingsOverhaulEnabled(e) {
        const t = this.options.isMcpSettingsOverhaulEnabled?.(e);
        return void 0 !== t && await t;
    }
    async isWin32UserExtensionStdioUnsandboxEnabled() {
        try {
            const e = this.options.isWin32UserExtensionStdioUnsandboxEnabled?.();
            return void 0 !== e && await e;
        } catch  {
            return !1;
        }
    }
    async getMcpToolControls() {
        const e = await this.getTeamAdminSettings(), t = e?.allowedMcpConfiguration;
        if (void 0 === t) return;
        const r = (0, fc.BJ)({
            autoRunControls: e?.autoRunControls,
            allowedMcpServers: t?.allowedMcpServers
        });
        return r.policies.length > 0 || r.tools.length > 0 ? {
            enabled: !0,
            mcpToolAllowlist: r.tools,
            allowUserOverride: t?.allowUserOverrideMcpServers ?? !1,
            serverPolicies: r.policies
        } : void 0;
    }
    async getNetworkAccessControls() {
        const e = await this.getTeamAdminSettings();
        return void 0 !== e || this.lastFetchSucceeded ? {
            allowlist: e?.networkAllowlist ?? [],
            denylist: e?.networkDenylist ?? [],
            available: !0
        } : {
            allowlist: [],
            denylist: [],
            available: !1
        };
    }
    async getSandboxingControls() {
        const e = await this.getTeamAdminSettings(), t = e?.autoRunControls?.sandboxingControls, r = (n = t?.sandboxReadBoundary, n === zd.h0i.WORKSPACE ? "workspace" : "system");
        var n;
        return {
            sandboxingDisabled: t?.sandboxing === zd.faf.DISABLED,
            networkingDisabled: t?.sandboxNetworking === zd._mX.ALWAYS_DISABLED,
            gitDisabled: t?.sandboxGit === zd.i24.ALWAYS_DISABLED,
            readBoundary: r,
            readAllowlistPaths: cp(r, t?.sandboxReadAllowlistPaths),
            allowUserOverrideReadAllowlist: !1 !== t?.allowUserOverrideSandboxReadAllowlist
        };
    }
    async isAttributionDisabledByAdmin() {
        const e = await this.getTeamAdminSettings();
        return void 0 === e && !this.lastFetchSucceeded || (e?.attributionControls?.disableAttribution ?? !1);
    }
    getDefaultNetworkAllowlist() {
        return this.defaultAllowlist.get().catch(()=>({
                allowlist: [],
                available: !1
            }));
    }
    async fetchDefaultAllowlist() {
        if (!this.defaultAllowlistProvider) return {
            allowlist: [],
            available: !0
        };
        return {
            allowlist: await this.defaultAllowlistProvider.getDefaultNetworkAllowlist(),
            available: !0
        };
    }
    getTeamRepos() {
        return this.teamRepos.get();
    }
    async isMcpAccessNetworkAllowlistEnabled() {
        return await this.options.isMcpAccessNetworkAllowlistEnabled?.() ?? !1;
    }
}
