"use strict";
require.d(exports, {
    q: ()=>ue
});
var n, s, o, i, a, c, l, u, d, p, m, h, f, g, y, w, v, _, b, S, k, x, E, I, T, C, P, A, R, M, J, O, B, D, q, N, F, U, L, $, j, G, z, W, H, K, V, Y, Q, X = function(e, t, r, n, s) {
    if ("m" === n) throw new TypeError("Private method is not writable");
    if ("a" === n && !s) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r), r;
}, Z = function(e, t, r, n) {
    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
};
const ee = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, te = new Set, re = "object" == typeof process && process ? process : {}, ne = (e, t, r, n)=>{
    "function" == typeof re.emitWarning ? re.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`);
};
let se = globalThis.AbortController, oe = globalThis.AbortSignal;
if (void 0 === se) {
    oe = class {
        constructor(){
            this._onabort = [], this.aborted = !1;
        }
        addEventListener(e, t) {
            this._onabort.push(t);
        }
    }, se = class {
        constructor(){
            this.signal = new oe, t();
        }
        abort(e) {
            if (!this.signal.aborted) {
                this.signal.reason = e, this.signal.aborted = !0;
                for (const t of this.signal._onabort)t(e);
                this.signal.onabort?.(e);
            }
        }
    };
    let e = "1" !== re.env?.LRU_CACHE_IGNORE_AC_WARNING;
    const t = ()=>{
        e && (e = !1, ne("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t));
    };
}
Symbol("type");
const ie = (e)=>e && e === Math.floor(e) && e > 0 && Number.isFinite(e), ae = (e)=>ie(e) ? e <= 256 ? Uint8Array : e <= 65536 ? Uint16Array : e <= 2 ** 32 ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? ce : null : null;
class ce extends Array {
    constructor(e){
        super(e), this.fill(0);
    }
}
class le {
    static create(e) {
        const t = ae(e);
        if (!t) return [];
        X(n, n, !0, "f", s);
        const r = new n(e, t);
        return X(n, n, !1, "f", s), r;
    }
    constructor(e, t){
        if (!Z(n, n, "f", s)) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new t(e), this.length = 0;
    }
    push(e) {
        this.heap[this.length++] = e;
    }
    pop() {
        return this.heap[--this.length];
    }
}
n = le, s = {
    value: !1
};
class ue {
    get perf() {
        return Z(this, m, "f");
    }
    static unsafeExposeInternals(e) {
        return {
            starts: Z(e, I, "f"),
            ttls: Z(e, T, "f"),
            sizes: Z(e, E, "f"),
            keyMap: Z(e, g, "f"),
            keyList: Z(e, y, "f"),
            valList: Z(e, w, "f"),
            next: Z(e, v, "f"),
            prev: Z(e, _, "f"),
            get head () {
                return Z(e, b, "f");
            },
            get tail () {
                return Z(e, S, "f");
            },
            free: Z(e, k, "f"),
            isBackgroundFetch: (t)=>Z(e, o, "m", W).call(e, t),
            backgroundFetch: (t, r, n, s)=>Z(e, o, "m", z).call(e, t, r, n, s),
            moveToTail: (t)=>Z(e, o, "m", K).call(e, t),
            indexes: (t)=>Z(e, o, "m", L).call(e, t),
            rindexes: (t)=>Z(e, o, "m", $).call(e, t),
            isStale: (t)=>Z(e, D, "f").call(e, t)
        };
    }
    get max() {
        return Z(this, i, "f");
    }
    get maxSize() {
        return Z(this, a, "f");
    }
    get calculatedSize() {
        return Z(this, f, "f");
    }
    get size() {
        return Z(this, h, "f");
    }
    get fetchMethod() {
        return Z(this, d, "f");
    }
    get memoMethod() {
        return Z(this, p, "f");
    }
    get dispose() {
        return Z(this, c, "f");
    }
    get onInsert() {
        return Z(this, l, "f");
    }
    get disposeAfter() {
        return Z(this, u, "f");
    }
    constructor(e){
        o.add(this), i.set(this, void 0), a.set(this, void 0), c.set(this, void 0), l.set(this, void 0), u.set(this, void 0), d.set(this, void 0), p.set(this, void 0), m.set(this, void 0), h.set(this, void 0), f.set(this, void 0), g.set(this, void 0), y.set(this, void 0), w.set(this, void 0), v.set(this, void 0), _.set(this, void 0), b.set(this, void 0), S.set(this, void 0), k.set(this, void 0), x.set(this, void 0), E.set(this, void 0), I.set(this, void 0), T.set(this, void 0), C.set(this, void 0), P.set(this, void 0), A.set(this, void 0), R.set(this, void 0), J.set(this, ()=>{}), O.set(this, ()=>{}), B.set(this, ()=>{}), D.set(this, ()=>!1), N.set(this, (e)=>{}), F.set(this, (e, t, r)=>{}), U.set(this, (e, t, r, n)=>{
            if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0;
        }), this[Q] = "LRUCache";
        const { max: t = 0, ttl: r, ttlResolution: n = 1, ttlAutopurge: s, updateAgeOnGet: L, updateAgeOnHas: $, allowStale: j, dispose: G, onInsert: z, disposeAfter: W, noDisposeOnSet: H, noUpdateTTL: K, maxSize: V = 0, maxEntrySize: Y = 0, sizeCalculation: re, fetchMethod: se, memoMethod: oe, noDeleteOnFetchRejection: ce, noDeleteOnStaleGet: de, allowStaleOnFetchRejection: pe, allowStaleOnFetchAbort: me, ignoreFetchAbort: he, perf: fe } = e;
        if (void 0 !== fe && "function" != typeof fe?.now) throw new TypeError("perf option must have a now() method if specified");
        if (X(this, m, fe ?? ee, "f"), 0 !== t && !ie(t)) throw new TypeError("max option must be a nonnegative integer");
        const ge = t ? ae(t) : Array;
        if (!ge) throw new Error(`invalid max value: ${t}`);
        if (X(this, i, t, "f"), X(this, a, V, "f"), this.maxEntrySize = Y || Z(this, a, "f"), this.sizeCalculation = re, this.sizeCalculation) {
            if (!Z(this, a, "f") && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== oe && "function" != typeof oe) throw new TypeError("memoMethod must be a function if defined");
        if (X(this, p, oe, "f"), void 0 !== se && "function" != typeof se) throw new TypeError("fetchMethod must be a function if specified");
        if (X(this, d, se, "f"), X(this, P, !!se, "f"), X(this, g, new Map, "f"), X(this, y, new Array(t).fill(void 0), "f"), X(this, w, new Array(t).fill(void 0), "f"), X(this, v, new ge(t), "f"), X(this, _, new ge(t), "f"), X(this, b, 0, "f"), X(this, S, 0, "f"), X(this, k, le.create(t), "f"), X(this, h, 0, "f"), X(this, f, 0, "f"), "function" == typeof G && X(this, c, G, "f"), "function" == typeof z && X(this, l, z, "f"), "function" == typeof W ? (X(this, u, W, "f"), X(this, x, [], "f")) : (X(this, u, void 0, "f"), X(this, x, void 0, "f")), X(this, C, !!Z(this, c, "f"), "f"), X(this, R, !!Z(this, l, "f"), "f"), X(this, A, !!Z(this, u, "f"), "f"), this.noDisposeOnSet = !!H, this.noUpdateTTL = !!K, this.noDeleteOnFetchRejection = !!ce, this.allowStaleOnFetchRejection = !!pe, this.allowStaleOnFetchAbort = !!me, this.ignoreFetchAbort = !!he, 0 !== this.maxEntrySize) {
            if (0 !== Z(this, a, "f") && !ie(Z(this, a, "f"))) throw new TypeError("maxSize must be a positive integer if specified");
            if (!ie(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            Z(this, o, "m", q).call(this);
        }
        if (this.allowStale = !!j, this.noDeleteOnStaleGet = !!de, this.updateAgeOnGet = !!L, this.updateAgeOnHas = !!$, this.ttlResolution = ie(n) || 0 === n ? n : 1, this.ttlAutopurge = !!s, this.ttl = r || 0, this.ttl) {
            if (!ie(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            Z(this, o, "m", M).call(this);
        }
        if (0 === Z(this, i, "f") && 0 === this.ttl && 0 === Z(this, a, "f")) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !Z(this, i, "f") && !Z(this, a, "f")) {
            const e = "LRU_CACHE_UNBOUNDED";
            if (((e)=>!te.has(e))(e)) {
                te.add(e);
                ne("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, ue);
            }
        }
    }
    getRemainingTTL(e) {
        return Z(this, g, "f").has(e) ? 1 / 0 : 0;
    }
    *entries() {
        for (const e of Z(this, o, "m", L).call(this))void 0 === Z(this, w, "f")[e] || void 0 === Z(this, y, "f")[e] || Z(this, o, "m", W).call(this, Z(this, w, "f")[e]) || (yield [
            Z(this, y, "f")[e],
            Z(this, w, "f")[e]
        ]);
    }
    *rentries() {
        for (const e of Z(this, o, "m", $).call(this))void 0 === Z(this, w, "f")[e] || void 0 === Z(this, y, "f")[e] || Z(this, o, "m", W).call(this, Z(this, w, "f")[e]) || (yield [
            Z(this, y, "f")[e],
            Z(this, w, "f")[e]
        ]);
    }
    *keys() {
        for (const e of Z(this, o, "m", L).call(this)){
            const t = Z(this, y, "f")[e];
            void 0 === t || Z(this, o, "m", W).call(this, Z(this, w, "f")[e]) || (yield t);
        }
    }
    *rkeys() {
        for (const e of Z(this, o, "m", $).call(this)){
            const t = Z(this, y, "f")[e];
            void 0 === t || Z(this, o, "m", W).call(this, Z(this, w, "f")[e]) || (yield t);
        }
    }
    *values() {
        for (const e of Z(this, o, "m", L).call(this)){
            void 0 === Z(this, w, "f")[e] || Z(this, o, "m", W).call(this, Z(this, w, "f")[e]) || (yield Z(this, w, "f")[e]);
        }
    }
    *rvalues() {
        for (const e of Z(this, o, "m", $).call(this)){
            void 0 === Z(this, w, "f")[e] || Z(this, o, "m", W).call(this, Z(this, w, "f")[e]) || (yield Z(this, w, "f")[e]);
        }
    }
    [(i = new WeakMap, a = new WeakMap, c = new WeakMap, l = new WeakMap, u = new WeakMap, d = new WeakMap, p = new WeakMap, m = new WeakMap, h = new WeakMap, f = new WeakMap, g = new WeakMap, y = new WeakMap, w = new WeakMap, v = new WeakMap, _ = new WeakMap, b = new WeakMap, S = new WeakMap, k = new WeakMap, x = new WeakMap, E = new WeakMap, I = new WeakMap, T = new WeakMap, C = new WeakMap, P = new WeakMap, A = new WeakMap, R = new WeakMap, J = new WeakMap, O = new WeakMap, B = new WeakMap, D = new WeakMap, N = new WeakMap, F = new WeakMap, U = new WeakMap, o = new WeakSet, M = function() {
        const e = new ce(Z(this, i, "f")), t = new ce(Z(this, i, "f"));
        X(this, T, e, "f"), X(this, I, t, "f"), X(this, B, (r, n, s = Z(this, m, "f").now())=>{
            if (t[r] = 0 !== n ? s : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
                const e = setTimeout(()=>{
                    Z(this, D, "f").call(this, r) && Z(this, o, "m", V).call(this, Z(this, y, "f")[r], "expire");
                }, n + 1);
                e.unref && e.unref();
            }
        }, "f"), X(this, J, (r)=>{
            t[r] = 0 !== e[r] ? Z(this, m, "f").now() : 0;
        }, "f"), X(this, O, (s, o)=>{
            if (e[o]) {
                const i = e[o], a = t[o];
                if (!i || !a) return;
                s.ttl = i, s.start = a, s.now = r || n();
                const c = s.now - a;
                s.remainingTTL = i - c;
            }
        }, "f");
        let r = 0;
        const n = ()=>{
            const e = Z(this, m, "f").now();
            if (this.ttlResolution > 0) {
                r = e;
                const t = setTimeout(()=>{
                    r = 0;
                }, this.ttlResolution);
                t.unref && t.unref();
            }
            return e;
        };
        this.getRemainingTTL = (s)=>{
            const o = Z(this, g, "f").get(s);
            if (void 0 === o) return 0;
            const i = e[o], a = t[o];
            if (!i || !a) return 1 / 0;
            return i - ((r || n()) - a);
        }, X(this, D, (s)=>{
            const o = t[s], i = e[s];
            return !!i && !!o && (r || n()) - o > i;
        }, "f");
    }, q = function() {
        const e = new ce(Z(this, i, "f"));
        X(this, f, 0, "f"), X(this, E, e, "f"), X(this, N, (t)=>{
            X(this, f, Z(this, f, "f") - e[t], "f"), e[t] = 0;
        }, "f"), X(this, U, (e, t, r, n)=>{
            if (Z(this, o, "m", W).call(this, t)) return 0;
            if (!ie(r)) {
                if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
                if (r = n(t, e), !ie(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            }
            return r;
        }, "f"), X(this, F, (t, r, n)=>{
            if (e[t] = r, Z(this, a, "f")) {
                const r = Z(this, a, "f") - e[t];
                for(; Z(this, f, "f") > r;)Z(this, o, "m", G).call(this, !0);
            }
            X(this, f, Z(this, f, "f") + e[t], "f"), n && (n.entrySize = r, n.totalCalculatedSize = Z(this, f, "f"));
        }, "f");
    }, L = function*({ allowStale: e = this.allowStale } = {}) {
        if (Z(this, h, "f")) for(let t = Z(this, S, "f"); Z(this, o, "m", j).call(this, t) && (!e && Z(this, D, "f").call(this, t) || (yield t), t !== Z(this, b, "f"));)t = Z(this, _, "f")[t];
    }, $ = function*({ allowStale: e = this.allowStale } = {}) {
        if (Z(this, h, "f")) for(let t = Z(this, b, "f"); Z(this, o, "m", j).call(this, t) && (!e && Z(this, D, "f").call(this, t) || (yield t), t !== Z(this, S, "f"));)t = Z(this, v, "f")[t];
    }, j = function(e) {
        return void 0 !== e && Z(this, g, "f").get(Z(this, y, "f")[e]) === e;
    }, Symbol.iterator)]() {
        return this.entries();
    }
    find(e, t = {}) {
        for (const r of Z(this, o, "m", L).call(this)){
            const n = Z(this, w, "f")[r], s = Z(this, o, "m", W).call(this, n) ? n.__staleWhileFetching : n;
            if (void 0 !== s && e(s, Z(this, y, "f")[r], this)) return this.get(Z(this, y, "f")[r], t);
        }
    }
    forEach(e, t = this) {
        for (const r of Z(this, o, "m", L).call(this)){
            const n = Z(this, w, "f")[r], s = Z(this, o, "m", W).call(this, n) ? n.__staleWhileFetching : n;
            void 0 !== s && e.call(t, s, Z(this, y, "f")[r], this);
        }
    }
    rforEach(e, t = this) {
        for (const r of Z(this, o, "m", $).call(this)){
            const n = Z(this, w, "f")[r], s = Z(this, o, "m", W).call(this, n) ? n.__staleWhileFetching : n;
            void 0 !== s && e.call(t, s, Z(this, y, "f")[r], this);
        }
    }
    purgeStale() {
        let e = !1;
        for (const t of Z(this, o, "m", $).call(this, {
            allowStale: !0
        }))Z(this, D, "f").call(this, t) && (Z(this, o, "m", V).call(this, Z(this, y, "f")[t], "expire"), e = !0);
        return e;
    }
    info(e) {
        const t = Z(this, g, "f").get(e);
        if (void 0 === t) return;
        const r = Z(this, w, "f")[t], n = Z(this, o, "m", W).call(this, r) ? r.__staleWhileFetching : r;
        if (void 0 === n) return;
        const s = {
            value: n
        };
        if (Z(this, T, "f") && Z(this, I, "f")) {
            const e = Z(this, T, "f")[t], r = Z(this, I, "f")[t];
            if (e && r) {
                const t = e - (Z(this, m, "f").now() - r);
                s.ttl = t, s.start = Date.now();
            }
        }
        return Z(this, E, "f") && (s.size = Z(this, E, "f")[t]), s;
    }
    dump() {
        const e = [];
        for (const t of Z(this, o, "m", L).call(this, {
            allowStale: !0
        })){
            const r = Z(this, y, "f")[t], n = Z(this, w, "f")[t], s = Z(this, o, "m", W).call(this, n) ? n.__staleWhileFetching : n;
            if (void 0 === s || void 0 === r) continue;
            const i = {
                value: s
            };
            if (Z(this, T, "f") && Z(this, I, "f")) {
                i.ttl = Z(this, T, "f")[t];
                const e = Z(this, m, "f").now() - Z(this, I, "f")[t];
                i.start = Math.floor(Date.now() - e);
            }
            Z(this, E, "f") && (i.size = Z(this, E, "f")[t]), e.unshift([
                r,
                i
            ]);
        }
        return e;
    }
    load(e) {
        this.clear();
        for (const [t, r] of e){
            if (r.start) {
                const e = Date.now() - r.start;
                r.start = Z(this, m, "f").now() - e;
            }
            this.set(t, r.value, r);
        }
    }
    set(e, t, r = {}) {
        var n;
        if (void 0 === t) return this.delete(e), this;
        const { ttl: s = this.ttl, start: a, noDisposeOnSet: d = this.noDisposeOnSet, sizeCalculation: p = this.sizeCalculation, status: m } = r;
        let { noUpdateTTL: f = this.noUpdateTTL } = r;
        const b = Z(this, U, "f").call(this, e, t, r.size || 0, p);
        if (this.maxEntrySize && b > this.maxEntrySize) return m && (m.set = "miss", m.maxEntrySizeExceeded = !0), Z(this, o, "m", V).call(this, e, "set"), this;
        let E = 0 === Z(this, h, "f") ? void 0 : Z(this, g, "f").get(e);
        if (void 0 === E) E = 0 === Z(this, h, "f") ? Z(this, S, "f") : 0 !== Z(this, k, "f").length ? Z(this, k, "f").pop() : Z(this, h, "f") === Z(this, i, "f") ? Z(this, o, "m", G).call(this, !1) : Z(this, h, "f"), Z(this, y, "f")[E] = e, Z(this, w, "f")[E] = t, Z(this, g, "f").set(e, E), Z(this, v, "f")[Z(this, S, "f")] = E, Z(this, _, "f")[E] = Z(this, S, "f"), X(this, S, E, "f"), X(this, h, (n = Z(this, h, "f"), ++n), "f"), Z(this, F, "f").call(this, E, b, m), m && (m.set = "add"), f = !1, Z(this, R, "f") && Z(this, l, "f")?.call(this, t, e, "add");
        else {
            Z(this, o, "m", K).call(this, E);
            const r = Z(this, w, "f")[E];
            if (t !== r) {
                if (Z(this, P, "f") && Z(this, o, "m", W).call(this, r)) {
                    r.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: t } = r;
                    void 0 === t || d || (Z(this, C, "f") && Z(this, c, "f")?.call(this, t, e, "set"), Z(this, A, "f") && Z(this, x, "f")?.push([
                        t,
                        e,
                        "set"
                    ]));
                } else d || (Z(this, C, "f") && Z(this, c, "f")?.call(this, r, e, "set"), Z(this, A, "f") && Z(this, x, "f")?.push([
                    r,
                    e,
                    "set"
                ]));
                if (Z(this, N, "f").call(this, E), Z(this, F, "f").call(this, E, b, m), Z(this, w, "f")[E] = t, m) {
                    m.set = "replace";
                    const e = r && Z(this, o, "m", W).call(this, r) ? r.__staleWhileFetching : r;
                    void 0 !== e && (m.oldValue = e);
                }
            } else m && (m.set = "update");
            Z(this, R, "f") && this.onInsert?.(t, e, t === r ? "update" : "replace");
        }
        if (0 === s || Z(this, T, "f") || Z(this, o, "m", M).call(this), Z(this, T, "f") && (f || Z(this, B, "f").call(this, E, s, a), m && Z(this, O, "f").call(this, m, E)), !d && Z(this, A, "f") && Z(this, x, "f")) {
            const e = Z(this, x, "f");
            let t;
            for(; t = e?.shift();)Z(this, u, "f")?.call(this, ...t);
        }
        return this;
    }
    pop() {
        try {
            for(; Z(this, h, "f");){
                const e = Z(this, w, "f")[Z(this, b, "f")];
                if (Z(this, o, "m", G).call(this, !0), Z(this, o, "m", W).call(this, e)) {
                    if (e.__staleWhileFetching) return e.__staleWhileFetching;
                } else if (void 0 !== e) return e;
            }
            return;
        } finally{
            if (Z(this, A, "f") && Z(this, x, "f")) {
                const e = Z(this, x, "f");
                let t;
                for(; t = e?.shift();)Z(this, u, "f")?.call(this, ...t);
            }
        }
    }
    has(e, t = {}) {
        const { updateAgeOnHas: r = this.updateAgeOnHas, status: n } = t, s = Z(this, g, "f").get(e);
        if (void 0 !== s) {
            const e = Z(this, w, "f")[s];
            if (Z(this, o, "m", W).call(this, e) && void 0 === e.__staleWhileFetching) return !1;
            if (!Z(this, D, "f").call(this, s)) return r && Z(this, J, "f").call(this, s), n && (n.has = "hit", Z(this, O, "f").call(this, n, s)), !0;
            n && (n.has = "stale", Z(this, O, "f").call(this, n, s));
        } else n && (n.has = "miss");
        return !1;
    }
    peek(e, t = {}) {
        const { allowStale: r = this.allowStale } = t, n = Z(this, g, "f").get(e);
        if (void 0 === n || !r && Z(this, D, "f").call(this, n)) return;
        const s = Z(this, w, "f")[n];
        return Z(this, o, "m", W).call(this, s) ? s.__staleWhileFetching : s;
    }
    async fetch(e, t = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, ttl: i = this.ttl, noDisposeOnSet: a = this.noDisposeOnSet, size: c = 0, sizeCalculation: l = this.sizeCalculation, noUpdateTTL: u = this.noUpdateTTL, noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: p = this.allowStaleOnFetchRejection, ignoreFetchAbort: m = this.ignoreFetchAbort, allowStaleOnFetchAbort: h = this.allowStaleOnFetchAbort, context: f, forceRefresh: y = !1, status: v, signal: _ } = t;
        if (!Z(this, P, "f")) return v && (v.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: s,
            status: v
        });
        const b = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: s,
            ttl: i,
            noDisposeOnSet: a,
            size: c,
            sizeCalculation: l,
            noUpdateTTL: u,
            noDeleteOnFetchRejection: d,
            allowStaleOnFetchRejection: p,
            allowStaleOnFetchAbort: h,
            ignoreFetchAbort: m,
            status: v,
            signal: _
        }, S = Z(this, g, "f").get(e);
        if (void 0 === S) {
            v && (v.fetch = "miss");
            const t = Z(this, o, "m", z).call(this, e, S, b, f);
            return t.__returned = t;
        }
        {
            const t = Z(this, w, "f")[S];
            if (Z(this, o, "m", W).call(this, t)) {
                const e = r && void 0 !== t.__staleWhileFetching;
                return v && (v.fetch = "inflight", e && (v.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t;
            }
            const s = Z(this, D, "f").call(this, S);
            if (!y && !s) return v && (v.fetch = "hit"), Z(this, o, "m", K).call(this, S), n && Z(this, J, "f").call(this, S), v && Z(this, O, "f").call(this, v, S), t;
            const i = Z(this, o, "m", z).call(this, e, S, b, f), a = void 0 !== i.__staleWhileFetching && r;
            return v && (v.fetch = s ? "stale" : "refresh", a && s && (v.returnedStale = !0)), a ? i.__staleWhileFetching : i.__returned = i;
        }
    }
    async forceFetch(e, t = {}) {
        const r = await this.fetch(e, t);
        if (void 0 === r) throw new Error("fetch() returned undefined");
        return r;
    }
    memo(e, t = {}) {
        const r = Z(this, p, "f");
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
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, status: i } = t, a = Z(this, g, "f").get(e);
        if (void 0 !== a) {
            const t = Z(this, w, "f")[a], c = Z(this, o, "m", W).call(this, t);
            return i && Z(this, O, "f").call(this, i, a), Z(this, D, "f").call(this, a) ? (i && (i.get = "stale"), c ? (i && r && void 0 !== t.__staleWhileFetching && (i.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (s || Z(this, o, "m", V).call(this, e, "expire"), i && r && (i.returnedStale = !0), r ? t : void 0)) : (i && (i.get = "hit"), c ? t.__staleWhileFetching : (Z(this, o, "m", K).call(this, a), n && Z(this, J, "f").call(this, a), t));
        }
        i && (i.get = "miss");
    }
    delete(e) {
        return Z(this, o, "m", V).call(this, e, "delete");
    }
    clear() {
        Z(this, o, "m", Y).call(this, "delete");
    }
}
Q = Symbol.toStringTag, G = function(e) {
    var t;
    const r = Z(this, b, "f"), n = Z(this, y, "f")[r], s = Z(this, w, "f")[r];
    return Z(this, P, "f") && Z(this, o, "m", W).call(this, s) ? s.__abortController.abort(new Error("evicted")) : (Z(this, C, "f") || Z(this, A, "f")) && (Z(this, C, "f") && Z(this, c, "f")?.call(this, s, n, "evict"), Z(this, A, "f") && Z(this, x, "f")?.push([
        s,
        n,
        "evict"
    ])), Z(this, N, "f").call(this, r), e && (Z(this, y, "f")[r] = void 0, Z(this, w, "f")[r] = void 0, Z(this, k, "f").push(r)), 1 === Z(this, h, "f") ? (X(this, b, X(this, S, 0, "f"), "f"), Z(this, k, "f").length = 0) : X(this, b, Z(this, v, "f")[r], "f"), Z(this, g, "f").delete(n), X(this, h, (t = Z(this, h, "f"), --t), "f"), r;
}, z = function(e, t, r, n) {
    const s = void 0 === t ? void 0 : Z(this, w, "f")[t];
    if (Z(this, o, "m", W).call(this, s)) return s;
    const i = new se, { signal: a } = r;
    a?.addEventListener("abort", ()=>i.abort(a.reason), {
        signal: i.signal
    });
    const c = {
        signal: i.signal,
        options: r,
        context: n
    }, l = (n, s = !1)=>{
        const { aborted: a } = i.signal, l = r.ignoreFetchAbort && void 0 !== n;
        if (r.status && (a && !s ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, l && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), a && !l && !s) return u(i.signal.reason);
        const d = p, m = Z(this, w, "f")[t];
        return (m === p || l && s && void 0 === m) && (void 0 === n ? void 0 !== d.__staleWhileFetching ? Z(this, w, "f")[t] = d.__staleWhileFetching : Z(this, o, "m", V).call(this, e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, c.options))), n;
    }, u = (n)=>{
        const { aborted: s } = i.signal, a = s && r.allowStaleOnFetchAbort, c = a || r.allowStaleOnFetchRejection, l = c || r.noDeleteOnFetchRejection, u = p;
        if (Z(this, w, "f")[t] === p) {
            !l || void 0 === u.__staleWhileFetching ? Z(this, o, "m", V).call(this, e, "fetch") : a || (Z(this, w, "f")[t] = u.__staleWhileFetching);
        }
        if (c) return r.status && void 0 !== u.__staleWhileFetching && (r.status.returnedStale = !0), u.__staleWhileFetching;
        if (u.__returned === u) throw n;
    };
    r.status && (r.status.fetchDispatched = !0);
    const p = new Promise((t, n)=>{
        const o = Z(this, d, "f")?.call(this, e, s, c);
        o && o instanceof Promise && o.then((e)=>t(void 0 === e ? void 0 : e), n), i.signal.addEventListener("abort", ()=>{
            r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = (e)=>l(e, !0)));
        });
    }).then(l, (e)=>(r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e))), m = Object.assign(p, {
        __abortController: i,
        __staleWhileFetching: s,
        __returned: void 0
    });
    return void 0 === t ? (this.set(e, m, {
        ...c.options,
        status: void 0
    }), t = Z(this, g, "f").get(e)) : Z(this, w, "f")[t] = m, m;
}, W = function(e) {
    if (!Z(this, P, "f")) return !1;
    const t = e;
    return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof se;
}, H = function(e, t) {
    Z(this, _, "f")[t] = e, Z(this, v, "f")[e] = t;
}, K = function(e) {
    e !== Z(this, S, "f") && (e === Z(this, b, "f") ? X(this, b, Z(this, v, "f")[e], "f") : Z(this, o, "m", H).call(this, Z(this, _, "f")[e], Z(this, v, "f")[e]), Z(this, o, "m", H).call(this, Z(this, S, "f"), e), X(this, S, e, "f"));
}, V = function(e, t) {
    var r;
    let n = !1;
    if (0 !== Z(this, h, "f")) {
        const s = Z(this, g, "f").get(e);
        if (void 0 !== s) if (n = !0, 1 === Z(this, h, "f")) Z(this, o, "m", Y).call(this, t);
        else {
            Z(this, N, "f").call(this, s);
            const n = Z(this, w, "f")[s];
            if (Z(this, o, "m", W).call(this, n) ? n.__abortController.abort(new Error("deleted")) : (Z(this, C, "f") || Z(this, A, "f")) && (Z(this, C, "f") && Z(this, c, "f")?.call(this, n, e, t), Z(this, A, "f") && Z(this, x, "f")?.push([
                n,
                e,
                t
            ])), Z(this, g, "f").delete(e), Z(this, y, "f")[s] = void 0, Z(this, w, "f")[s] = void 0, s === Z(this, S, "f")) X(this, S, Z(this, _, "f")[s], "f");
            else if (s === Z(this, b, "f")) X(this, b, Z(this, v, "f")[s], "f");
            else {
                const e = Z(this, _, "f")[s];
                Z(this, v, "f")[e] = Z(this, v, "f")[s];
                const t = Z(this, v, "f")[s];
                Z(this, _, "f")[t] = Z(this, _, "f")[s];
            }
            X(this, h, (r = Z(this, h, "f"), --r), "f"), Z(this, k, "f").push(s);
        }
    }
    if (Z(this, A, "f") && Z(this, x, "f")?.length) {
        const e = Z(this, x, "f");
        let t;
        for(; t = e?.shift();)Z(this, u, "f")?.call(this, ...t);
    }
    return n;
}, Y = function(e) {
    for (const t of Z(this, o, "m", $).call(this, {
        allowStale: !0
    })){
        const r = Z(this, w, "f")[t];
        if (Z(this, o, "m", W).call(this, r)) r.__abortController.abort(new Error("deleted"));
        else {
            const n = Z(this, y, "f")[t];
            Z(this, C, "f") && Z(this, c, "f")?.call(this, r, n, e), Z(this, A, "f") && Z(this, x, "f")?.push([
                r,
                n,
                e
            ]);
        }
    }
    if (Z(this, g, "f").clear(), Z(this, w, "f").fill(void 0), Z(this, y, "f").fill(void 0), Z(this, T, "f") && Z(this, I, "f") && (Z(this, T, "f").fill(0), Z(this, I, "f").fill(0)), Z(this, E, "f") && Z(this, E, "f").fill(0), X(this, b, 0, "f"), X(this, S, 0, "f"), Z(this, k, "f").length = 0, X(this, f, 0, "f"), X(this, h, 0, "f"), Z(this, A, "f") && Z(this, x, "f")) {
        const e = Z(this, x, "f");
        let t;
        for(; t = e?.shift();)Z(this, u, "f")?.call(this, ...t);
    }
};
