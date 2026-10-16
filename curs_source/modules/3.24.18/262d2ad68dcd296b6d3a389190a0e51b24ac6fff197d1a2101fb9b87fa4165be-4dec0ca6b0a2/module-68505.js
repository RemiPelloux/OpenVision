"use strict";
require.d(exports, {
    q: ()=>ue
});
var n, o, s, i, a, l, c, u, d, p, h, m, f, g, y, v, w, b, _, S, x, k, E, T, C, I, A, P, M, R, O, D, N, F, L, U, B, $, q, j, J, z, H, W, G, Y, V, K, Z, X = function(e, t, r, n, o) {
    if ("m" === n) throw new TypeError("Private method is not writable");
    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
}, Q = function(e, t, r, n) {
    if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
};
const ee = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, te = new Set, re = "object" == typeof process && process ? process : {}, ne = (e, t, r, n)=>{
    "function" == typeof re.emitWarning ? re.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`);
};
let oe = globalThis.AbortController, se = globalThis.AbortSignal;
if (void 0 === oe) {
    se = class {
        constructor(){
            this._onabort = [], this.aborted = !1;
        }
        addEventListener(e, t) {
            this._onabort.push(t);
        }
    }, oe = class {
        constructor(){
            this.signal = new se, t();
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
const ie = (e)=>e && e === Math.floor(e) && e > 0 && Number.isFinite(e), ae = (e)=>ie(e) ? e <= 256 ? Uint8Array : e <= 65536 ? Uint16Array : e <= 2 ** 32 ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? le : null : null;
class le extends Array {
    constructor(e){
        super(e), this.fill(0);
    }
}
class ce {
    static create(e) {
        const t = ae(e);
        if (!t) return [];
        X(n, n, !0, "f", o);
        const r = new n(e, t);
        return X(n, n, !1, "f", o), r;
    }
    constructor(e, t){
        if (!Q(n, n, "f", o)) throw new TypeError("instantiate Stack using Stack.create(n)");
        this.heap = new t(e), this.length = 0;
    }
    push(e) {
        this.heap[this.length++] = e;
    }
    pop() {
        return this.heap[--this.length];
    }
}
n = ce, o = {
    value: !1
};
class ue {
    get perf() {
        return Q(this, h, "f");
    }
    static unsafeExposeInternals(e) {
        return {
            starts: Q(e, T, "f"),
            ttls: Q(e, C, "f"),
            sizes: Q(e, E, "f"),
            keyMap: Q(e, g, "f"),
            keyList: Q(e, y, "f"),
            valList: Q(e, v, "f"),
            next: Q(e, w, "f"),
            prev: Q(e, b, "f"),
            get head () {
                return Q(e, _, "f");
            },
            get tail () {
                return Q(e, S, "f");
            },
            free: Q(e, x, "f"),
            isBackgroundFetch: (t)=>Q(e, s, "m", W).call(e, t),
            backgroundFetch: (t, r, n, o)=>Q(e, s, "m", H).call(e, t, r, n, o),
            moveToTail: (t)=>Q(e, s, "m", Y).call(e, t),
            indexes: (t)=>Q(e, s, "m", q).call(e, t),
            rindexes: (t)=>Q(e, s, "m", j).call(e, t),
            isStale: (t)=>Q(e, F, "f").call(e, t)
        };
    }
    get max() {
        return Q(this, i, "f");
    }
    get maxSize() {
        return Q(this, a, "f");
    }
    get calculatedSize() {
        return Q(this, f, "f");
    }
    get size() {
        return Q(this, m, "f");
    }
    get fetchMethod() {
        return Q(this, d, "f");
    }
    get memoMethod() {
        return Q(this, p, "f");
    }
    get dispose() {
        return Q(this, l, "f");
    }
    get onInsert() {
        return Q(this, c, "f");
    }
    get disposeAfter() {
        return Q(this, u, "f");
    }
    constructor(e){
        s.add(this), i.set(this, void 0), a.set(this, void 0), l.set(this, void 0), c.set(this, void 0), u.set(this, void 0), d.set(this, void 0), p.set(this, void 0), h.set(this, void 0), m.set(this, void 0), f.set(this, void 0), g.set(this, void 0), y.set(this, void 0), v.set(this, void 0), w.set(this, void 0), b.set(this, void 0), _.set(this, void 0), S.set(this, void 0), x.set(this, void 0), k.set(this, void 0), E.set(this, void 0), T.set(this, void 0), C.set(this, void 0), I.set(this, void 0), A.set(this, void 0), P.set(this, void 0), M.set(this, void 0), O.set(this, ()=>{}), D.set(this, ()=>{}), N.set(this, ()=>{}), F.set(this, ()=>!1), U.set(this, (e)=>{}), B.set(this, (e, t, r)=>{}), $.set(this, (e, t, r, n)=>{
            if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0;
        }), this[Z] = "LRUCache";
        const { max: t = 0, ttl: r, ttlResolution: n = 1, ttlAutopurge: o, updateAgeOnGet: q, updateAgeOnHas: j, allowStale: J, dispose: z, onInsert: H, disposeAfter: W, noDisposeOnSet: G, noUpdateTTL: Y, maxSize: V = 0, maxEntrySize: K = 0, sizeCalculation: re, fetchMethod: oe, memoMethod: se, noDeleteOnFetchRejection: le, noDeleteOnStaleGet: de, allowStaleOnFetchRejection: pe, allowStaleOnFetchAbort: he, ignoreFetchAbort: me, perf: fe } = e;
        if (void 0 !== fe && "function" != typeof fe?.now) throw new TypeError("perf option must have a now() method if specified");
        if (X(this, h, fe ?? ee, "f"), 0 !== t && !ie(t)) throw new TypeError("max option must be a nonnegative integer");
        const ge = t ? ae(t) : Array;
        if (!ge) throw new Error(`invalid max value: ${t}`);
        if (X(this, i, t, "f"), X(this, a, V, "f"), this.maxEntrySize = K || Q(this, a, "f"), this.sizeCalculation = re, this.sizeCalculation) {
            if (!Q(this, a, "f") && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== se && "function" != typeof se) throw new TypeError("memoMethod must be a function if defined");
        if (X(this, p, se, "f"), void 0 !== oe && "function" != typeof oe) throw new TypeError("fetchMethod must be a function if specified");
        if (X(this, d, oe, "f"), X(this, A, !!oe, "f"), X(this, g, new Map, "f"), X(this, y, new Array(t).fill(void 0), "f"), X(this, v, new Array(t).fill(void 0), "f"), X(this, w, new ge(t), "f"), X(this, b, new ge(t), "f"), X(this, _, 0, "f"), X(this, S, 0, "f"), X(this, x, ce.create(t), "f"), X(this, m, 0, "f"), X(this, f, 0, "f"), "function" == typeof z && X(this, l, z, "f"), "function" == typeof H && X(this, c, H, "f"), "function" == typeof W ? (X(this, u, W, "f"), X(this, k, [], "f")) : (X(this, u, void 0, "f"), X(this, k, void 0, "f")), X(this, I, !!Q(this, l, "f"), "f"), X(this, M, !!Q(this, c, "f"), "f"), X(this, P, !!Q(this, u, "f"), "f"), this.noDisposeOnSet = !!G, this.noUpdateTTL = !!Y, this.noDeleteOnFetchRejection = !!le, this.allowStaleOnFetchRejection = !!pe, this.allowStaleOnFetchAbort = !!he, this.ignoreFetchAbort = !!me, 0 !== this.maxEntrySize) {
            if (0 !== Q(this, a, "f") && !ie(Q(this, a, "f"))) throw new TypeError("maxSize must be a positive integer if specified");
            if (!ie(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            Q(this, s, "m", L).call(this);
        }
        if (this.allowStale = !!J, this.noDeleteOnStaleGet = !!de, this.updateAgeOnGet = !!q, this.updateAgeOnHas = !!j, this.ttlResolution = ie(n) || 0 === n ? n : 1, this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
            if (!ie(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            Q(this, s, "m", R).call(this);
        }
        if (0 === Q(this, i, "f") && 0 === this.ttl && 0 === Q(this, a, "f")) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !Q(this, i, "f") && !Q(this, a, "f")) {
            const e = "LRU_CACHE_UNBOUNDED";
            if (((e)=>!te.has(e))(e)) {
                te.add(e);
                ne("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, ue);
            }
        }
    }
    getRemainingTTL(e) {
        return Q(this, g, "f").has(e) ? 1 / 0 : 0;
    }
    *entries() {
        for (const e of Q(this, s, "m", q).call(this))void 0 === Q(this, v, "f")[e] || void 0 === Q(this, y, "f")[e] || Q(this, s, "m", W).call(this, Q(this, v, "f")[e]) || (yield [
            Q(this, y, "f")[e],
            Q(this, v, "f")[e]
        ]);
    }
    *rentries() {
        for (const e of Q(this, s, "m", j).call(this))void 0 === Q(this, v, "f")[e] || void 0 === Q(this, y, "f")[e] || Q(this, s, "m", W).call(this, Q(this, v, "f")[e]) || (yield [
            Q(this, y, "f")[e],
            Q(this, v, "f")[e]
        ]);
    }
    *keys() {
        for (const e of Q(this, s, "m", q).call(this)){
            const t = Q(this, y, "f")[e];
            void 0 === t || Q(this, s, "m", W).call(this, Q(this, v, "f")[e]) || (yield t);
        }
    }
    *rkeys() {
        for (const e of Q(this, s, "m", j).call(this)){
            const t = Q(this, y, "f")[e];
            void 0 === t || Q(this, s, "m", W).call(this, Q(this, v, "f")[e]) || (yield t);
        }
    }
    *values() {
        for (const e of Q(this, s, "m", q).call(this)){
            void 0 === Q(this, v, "f")[e] || Q(this, s, "m", W).call(this, Q(this, v, "f")[e]) || (yield Q(this, v, "f")[e]);
        }
    }
    *rvalues() {
        for (const e of Q(this, s, "m", j).call(this)){
            void 0 === Q(this, v, "f")[e] || Q(this, s, "m", W).call(this, Q(this, v, "f")[e]) || (yield Q(this, v, "f")[e]);
        }
    }
    [(i = new WeakMap, a = new WeakMap, l = new WeakMap, c = new WeakMap, u = new WeakMap, d = new WeakMap, p = new WeakMap, h = new WeakMap, m = new WeakMap, f = new WeakMap, g = new WeakMap, y = new WeakMap, v = new WeakMap, w = new WeakMap, b = new WeakMap, _ = new WeakMap, S = new WeakMap, x = new WeakMap, k = new WeakMap, E = new WeakMap, T = new WeakMap, C = new WeakMap, I = new WeakMap, A = new WeakMap, P = new WeakMap, M = new WeakMap, O = new WeakMap, D = new WeakMap, N = new WeakMap, F = new WeakMap, U = new WeakMap, B = new WeakMap, $ = new WeakMap, s = new WeakSet, R = function() {
        const e = new le(Q(this, i, "f")), t = new le(Q(this, i, "f"));
        X(this, C, e, "f"), X(this, T, t, "f"), X(this, N, (r, n, o = Q(this, h, "f").now())=>{
            if (t[r] = 0 !== n ? o : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
                const e = setTimeout(()=>{
                    Q(this, F, "f").call(this, r) && Q(this, s, "m", V).call(this, Q(this, y, "f")[r], "expire");
                }, n + 1);
                e.unref && e.unref();
            }
        }, "f"), X(this, O, (r)=>{
            t[r] = 0 !== e[r] ? Q(this, h, "f").now() : 0;
        }, "f"), X(this, D, (o, s)=>{
            if (e[s]) {
                const i = e[s], a = t[s];
                if (!i || !a) return;
                o.ttl = i, o.start = a, o.now = r || n();
                const l = o.now - a;
                o.remainingTTL = i - l;
            }
        }, "f");
        let r = 0;
        const n = ()=>{
            const e = Q(this, h, "f").now();
            if (this.ttlResolution > 0) {
                r = e;
                const t = setTimeout(()=>{
                    r = 0;
                }, this.ttlResolution);
                t.unref && t.unref();
            }
            return e;
        };
        this.getRemainingTTL = (o)=>{
            const s = Q(this, g, "f").get(o);
            if (void 0 === s) return 0;
            const i = e[s], a = t[s];
            if (!i || !a) return 1 / 0;
            return i - ((r || n()) - a);
        }, X(this, F, (o)=>{
            const s = t[o], i = e[o];
            return !!i && !!s && (r || n()) - s > i;
        }, "f");
    }, L = function() {
        const e = new le(Q(this, i, "f"));
        X(this, f, 0, "f"), X(this, E, e, "f"), X(this, U, (t)=>{
            X(this, f, Q(this, f, "f") - e[t], "f"), e[t] = 0;
        }, "f"), X(this, $, (e, t, r, n)=>{
            if (Q(this, s, "m", W).call(this, t)) return 0;
            if (!ie(r)) {
                if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
                if (r = n(t, e), !ie(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            }
            return r;
        }, "f"), X(this, B, (t, r, n)=>{
            if (e[t] = r, Q(this, a, "f")) {
                const r = Q(this, a, "f") - e[t];
                for(; Q(this, f, "f") > r;)Q(this, s, "m", z).call(this, !0);
            }
            X(this, f, Q(this, f, "f") + e[t], "f"), n && (n.entrySize = r, n.totalCalculatedSize = Q(this, f, "f"));
        }, "f");
    }, q = function*({ allowStale: e = this.allowStale } = {}) {
        if (Q(this, m, "f")) for(let t = Q(this, S, "f"); Q(this, s, "m", J).call(this, t) && (!e && Q(this, F, "f").call(this, t) || (yield t), t !== Q(this, _, "f"));)t = Q(this, b, "f")[t];
    }, j = function*({ allowStale: e = this.allowStale } = {}) {
        if (Q(this, m, "f")) for(let t = Q(this, _, "f"); Q(this, s, "m", J).call(this, t) && (!e && Q(this, F, "f").call(this, t) || (yield t), t !== Q(this, S, "f"));)t = Q(this, w, "f")[t];
    }, J = function(e) {
        return void 0 !== e && Q(this, g, "f").get(Q(this, y, "f")[e]) === e;
    }, Symbol.iterator)]() {
        return this.entries();
    }
    find(e, t = {}) {
        for (const r of Q(this, s, "m", q).call(this)){
            const n = Q(this, v, "f")[r], o = Q(this, s, "m", W).call(this, n) ? n.__staleWhileFetching : n;
            if (void 0 !== o && e(o, Q(this, y, "f")[r], this)) return this.get(Q(this, y, "f")[r], t);
        }
    }
    forEach(e, t = this) {
        for (const r of Q(this, s, "m", q).call(this)){
            const n = Q(this, v, "f")[r], o = Q(this, s, "m", W).call(this, n) ? n.__staleWhileFetching : n;
            void 0 !== o && e.call(t, o, Q(this, y, "f")[r], this);
        }
    }
    rforEach(e, t = this) {
        for (const r of Q(this, s, "m", j).call(this)){
            const n = Q(this, v, "f")[r], o = Q(this, s, "m", W).call(this, n) ? n.__staleWhileFetching : n;
            void 0 !== o && e.call(t, o, Q(this, y, "f")[r], this);
        }
    }
    purgeStale() {
        let e = !1;
        for (const t of Q(this, s, "m", j).call(this, {
            allowStale: !0
        }))Q(this, F, "f").call(this, t) && (Q(this, s, "m", V).call(this, Q(this, y, "f")[t], "expire"), e = !0);
        return e;
    }
    info(e) {
        const t = Q(this, g, "f").get(e);
        if (void 0 === t) return;
        const r = Q(this, v, "f")[t], n = Q(this, s, "m", W).call(this, r) ? r.__staleWhileFetching : r;
        if (void 0 === n) return;
        const o = {
            value: n
        };
        if (Q(this, C, "f") && Q(this, T, "f")) {
            const e = Q(this, C, "f")[t], r = Q(this, T, "f")[t];
            if (e && r) {
                const t = e - (Q(this, h, "f").now() - r);
                o.ttl = t, o.start = Date.now();
            }
        }
        return Q(this, E, "f") && (o.size = Q(this, E, "f")[t]), o;
    }
    dump() {
        const e = [];
        for (const t of Q(this, s, "m", q).call(this, {
            allowStale: !0
        })){
            const r = Q(this, y, "f")[t], n = Q(this, v, "f")[t], o = Q(this, s, "m", W).call(this, n) ? n.__staleWhileFetching : n;
            if (void 0 === o || void 0 === r) continue;
            const i = {
                value: o
            };
            if (Q(this, C, "f") && Q(this, T, "f")) {
                i.ttl = Q(this, C, "f")[t];
                const e = Q(this, h, "f").now() - Q(this, T, "f")[t];
                i.start = Math.floor(Date.now() - e);
            }
            Q(this, E, "f") && (i.size = Q(this, E, "f")[t]), e.unshift([
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
                r.start = Q(this, h, "f").now() - e;
            }
            this.set(t, r.value, r);
        }
    }
    set(e, t, r = {}) {
        var n;
        if (void 0 === t) return this.delete(e), this;
        const { ttl: o = this.ttl, start: a, noDisposeOnSet: d = this.noDisposeOnSet, sizeCalculation: p = this.sizeCalculation, status: h } = r;
        let { noUpdateTTL: f = this.noUpdateTTL } = r;
        const _ = Q(this, $, "f").call(this, e, t, r.size || 0, p);
        if (this.maxEntrySize && _ > this.maxEntrySize) return h && (h.set = "miss", h.maxEntrySizeExceeded = !0), Q(this, s, "m", V).call(this, e, "set"), this;
        let E = 0 === Q(this, m, "f") ? void 0 : Q(this, g, "f").get(e);
        if (void 0 === E) E = 0 === Q(this, m, "f") ? Q(this, S, "f") : 0 !== Q(this, x, "f").length ? Q(this, x, "f").pop() : Q(this, m, "f") === Q(this, i, "f") ? Q(this, s, "m", z).call(this, !1) : Q(this, m, "f"), Q(this, y, "f")[E] = e, Q(this, v, "f")[E] = t, Q(this, g, "f").set(e, E), Q(this, w, "f")[Q(this, S, "f")] = E, Q(this, b, "f")[E] = Q(this, S, "f"), X(this, S, E, "f"), X(this, m, (n = Q(this, m, "f"), ++n), "f"), Q(this, B, "f").call(this, E, _, h), h && (h.set = "add"), f = !1, Q(this, M, "f") && Q(this, c, "f")?.call(this, t, e, "add");
        else {
            Q(this, s, "m", Y).call(this, E);
            const r = Q(this, v, "f")[E];
            if (t !== r) {
                if (Q(this, A, "f") && Q(this, s, "m", W).call(this, r)) {
                    r.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: t } = r;
                    void 0 === t || d || (Q(this, I, "f") && Q(this, l, "f")?.call(this, t, e, "set"), Q(this, P, "f") && Q(this, k, "f")?.push([
                        t,
                        e,
                        "set"
                    ]));
                } else d || (Q(this, I, "f") && Q(this, l, "f")?.call(this, r, e, "set"), Q(this, P, "f") && Q(this, k, "f")?.push([
                    r,
                    e,
                    "set"
                ]));
                if (Q(this, U, "f").call(this, E), Q(this, B, "f").call(this, E, _, h), Q(this, v, "f")[E] = t, h) {
                    h.set = "replace";
                    const e = r && Q(this, s, "m", W).call(this, r) ? r.__staleWhileFetching : r;
                    void 0 !== e && (h.oldValue = e);
                }
            } else h && (h.set = "update");
            Q(this, M, "f") && this.onInsert?.(t, e, t === r ? "update" : "replace");
        }
        if (0 === o || Q(this, C, "f") || Q(this, s, "m", R).call(this), Q(this, C, "f") && (f || Q(this, N, "f").call(this, E, o, a), h && Q(this, D, "f").call(this, h, E)), !d && Q(this, P, "f") && Q(this, k, "f")) {
            const e = Q(this, k, "f");
            let t;
            for(; t = e?.shift();)Q(this, u, "f")?.call(this, ...t);
        }
        return this;
    }
    pop() {
        try {
            for(; Q(this, m, "f");){
                const e = Q(this, v, "f")[Q(this, _, "f")];
                if (Q(this, s, "m", z).call(this, !0), Q(this, s, "m", W).call(this, e)) {
                    if (e.__staleWhileFetching) return e.__staleWhileFetching;
                } else if (void 0 !== e) return e;
            }
            return;
        } finally{
            if (Q(this, P, "f") && Q(this, k, "f")) {
                const e = Q(this, k, "f");
                let t;
                for(; t = e?.shift();)Q(this, u, "f")?.call(this, ...t);
            }
        }
    }
    has(e, t = {}) {
        const { updateAgeOnHas: r = this.updateAgeOnHas, status: n } = t, o = Q(this, g, "f").get(e);
        if (void 0 !== o) {
            const e = Q(this, v, "f")[o];
            if (Q(this, s, "m", W).call(this, e) && void 0 === e.__staleWhileFetching) return !1;
            if (!Q(this, F, "f").call(this, o)) return r && Q(this, O, "f").call(this, o), n && (n.has = "hit", Q(this, D, "f").call(this, n, o)), !0;
            n && (n.has = "stale", Q(this, D, "f").call(this, n, o));
        } else n && (n.has = "miss");
        return !1;
    }
    peek(e, t = {}) {
        const { allowStale: r = this.allowStale } = t, n = Q(this, g, "f").get(e);
        if (void 0 === n || !r && Q(this, F, "f").call(this, n)) return;
        const o = Q(this, v, "f")[n];
        return Q(this, s, "m", W).call(this, o) ? o.__staleWhileFetching : o;
    }
    async fetch(e, t = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: o = this.noDeleteOnStaleGet, ttl: i = this.ttl, noDisposeOnSet: a = this.noDisposeOnSet, size: l = 0, sizeCalculation: c = this.sizeCalculation, noUpdateTTL: u = this.noUpdateTTL, noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: p = this.allowStaleOnFetchRejection, ignoreFetchAbort: h = this.ignoreFetchAbort, allowStaleOnFetchAbort: m = this.allowStaleOnFetchAbort, context: f, forceRefresh: y = !1, status: w, signal: b } = t;
        if (!Q(this, A, "f")) return w && (w.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            status: w
        });
        const _ = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            ttl: i,
            noDisposeOnSet: a,
            size: l,
            sizeCalculation: c,
            noUpdateTTL: u,
            noDeleteOnFetchRejection: d,
            allowStaleOnFetchRejection: p,
            allowStaleOnFetchAbort: m,
            ignoreFetchAbort: h,
            status: w,
            signal: b
        }, S = Q(this, g, "f").get(e);
        if (void 0 === S) {
            w && (w.fetch = "miss");
            const t = Q(this, s, "m", H).call(this, e, S, _, f);
            return t.__returned = t;
        }
        {
            const t = Q(this, v, "f")[S];
            if (Q(this, s, "m", W).call(this, t)) {
                const e = r && void 0 !== t.__staleWhileFetching;
                return w && (w.fetch = "inflight", e && (w.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t;
            }
            const o = Q(this, F, "f").call(this, S);
            if (!y && !o) return w && (w.fetch = "hit"), Q(this, s, "m", Y).call(this, S), n && Q(this, O, "f").call(this, S), w && Q(this, D, "f").call(this, w, S), t;
            const i = Q(this, s, "m", H).call(this, e, S, _, f), a = void 0 !== i.__staleWhileFetching && r;
            return w && (w.fetch = o ? "stale" : "refresh", a && o && (w.returnedStale = !0)), a ? i.__staleWhileFetching : i.__returned = i;
        }
    }
    async forceFetch(e, t = {}) {
        const r = await this.fetch(e, t);
        if (void 0 === r) throw new Error("fetch() returned undefined");
        return r;
    }
    memo(e, t = {}) {
        const r = Q(this, p, "f");
        if (!r) throw new Error("no memoMethod provided to constructor");
        const { context: n, forceRefresh: o, ...s } = t, i = this.get(e, s);
        if (!o && void 0 !== i) return i;
        const a = r(e, i, {
            options: s,
            context: n
        });
        return this.set(e, a, s), a;
    }
    get(e, t = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: o = this.noDeleteOnStaleGet, status: i } = t, a = Q(this, g, "f").get(e);
        if (void 0 !== a) {
            const t = Q(this, v, "f")[a], l = Q(this, s, "m", W).call(this, t);
            return i && Q(this, D, "f").call(this, i, a), Q(this, F, "f").call(this, a) ? (i && (i.get = "stale"), l ? (i && r && void 0 !== t.__staleWhileFetching && (i.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (o || Q(this, s, "m", V).call(this, e, "expire"), i && r && (i.returnedStale = !0), r ? t : void 0)) : (i && (i.get = "hit"), l ? t.__staleWhileFetching : (Q(this, s, "m", Y).call(this, a), n && Q(this, O, "f").call(this, a), t));
        }
        i && (i.get = "miss");
    }
    delete(e) {
        return Q(this, s, "m", V).call(this, e, "delete");
    }
    clear() {
        Q(this, s, "m", K).call(this, "delete");
    }
}
Z = Symbol.toStringTag, z = function(e) {
    var t;
    const r = Q(this, _, "f"), n = Q(this, y, "f")[r], o = Q(this, v, "f")[r];
    return Q(this, A, "f") && Q(this, s, "m", W).call(this, o) ? o.__abortController.abort(new Error("evicted")) : (Q(this, I, "f") || Q(this, P, "f")) && (Q(this, I, "f") && Q(this, l, "f")?.call(this, o, n, "evict"), Q(this, P, "f") && Q(this, k, "f")?.push([
        o,
        n,
        "evict"
    ])), Q(this, U, "f").call(this, r), e && (Q(this, y, "f")[r] = void 0, Q(this, v, "f")[r] = void 0, Q(this, x, "f").push(r)), 1 === Q(this, m, "f") ? (X(this, _, X(this, S, 0, "f"), "f"), Q(this, x, "f").length = 0) : X(this, _, Q(this, w, "f")[r], "f"), Q(this, g, "f").delete(n), X(this, m, (t = Q(this, m, "f"), --t), "f"), r;
}, H = function(e, t, r, n) {
    const o = void 0 === t ? void 0 : Q(this, v, "f")[t];
    if (Q(this, s, "m", W).call(this, o)) return o;
    const i = new oe, { signal: a } = r;
    a?.addEventListener("abort", ()=>i.abort(a.reason), {
        signal: i.signal
    });
    const l = {
        signal: i.signal,
        options: r,
        context: n
    }, c = (n, o = !1)=>{
        const { aborted: a } = i.signal, c = r.ignoreFetchAbort && void 0 !== n;
        if (r.status && (a && !o ? (r.status.fetchAborted = !0, r.status.fetchError = i.signal.reason, c && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), a && !c && !o) return u(i.signal.reason);
        const d = p, h = Q(this, v, "f")[t];
        return (h === p || c && o && void 0 === h) && (void 0 === n ? void 0 !== d.__staleWhileFetching ? Q(this, v, "f")[t] = d.__staleWhileFetching : Q(this, s, "m", V).call(this, e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, l.options))), n;
    }, u = (n)=>{
        const { aborted: o } = i.signal, a = o && r.allowStaleOnFetchAbort, l = a || r.allowStaleOnFetchRejection, c = l || r.noDeleteOnFetchRejection, u = p;
        if (Q(this, v, "f")[t] === p) {
            !c || void 0 === u.__staleWhileFetching ? Q(this, s, "m", V).call(this, e, "fetch") : a || (Q(this, v, "f")[t] = u.__staleWhileFetching);
        }
        if (l) return r.status && void 0 !== u.__staleWhileFetching && (r.status.returnedStale = !0), u.__staleWhileFetching;
        if (u.__returned === u) throw n;
    };
    r.status && (r.status.fetchDispatched = !0);
    const p = new Promise((t, n)=>{
        const s = Q(this, d, "f")?.call(this, e, o, l);
        s && s instanceof Promise && s.then((e)=>t(void 0 === e ? void 0 : e), n), i.signal.addEventListener("abort", ()=>{
            r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = (e)=>c(e, !0)));
        });
    }).then(c, (e)=>(r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e))), h = Object.assign(p, {
        __abortController: i,
        __staleWhileFetching: o,
        __returned: void 0
    });
    return void 0 === t ? (this.set(e, h, {
        ...l.options,
        status: void 0
    }), t = Q(this, g, "f").get(e)) : Q(this, v, "f")[t] = h, h;
}, W = function(e) {
    if (!Q(this, A, "f")) return !1;
    const t = e;
    return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof oe;
}, G = function(e, t) {
    Q(this, b, "f")[t] = e, Q(this, w, "f")[e] = t;
}, Y = function(e) {
    e !== Q(this, S, "f") && (e === Q(this, _, "f") ? X(this, _, Q(this, w, "f")[e], "f") : Q(this, s, "m", G).call(this, Q(this, b, "f")[e], Q(this, w, "f")[e]), Q(this, s, "m", G).call(this, Q(this, S, "f"), e), X(this, S, e, "f"));
}, V = function(e, t) {
    var r;
    let n = !1;
    if (0 !== Q(this, m, "f")) {
        const o = Q(this, g, "f").get(e);
        if (void 0 !== o) if (n = !0, 1 === Q(this, m, "f")) Q(this, s, "m", K).call(this, t);
        else {
            Q(this, U, "f").call(this, o);
            const n = Q(this, v, "f")[o];
            if (Q(this, s, "m", W).call(this, n) ? n.__abortController.abort(new Error("deleted")) : (Q(this, I, "f") || Q(this, P, "f")) && (Q(this, I, "f") && Q(this, l, "f")?.call(this, n, e, t), Q(this, P, "f") && Q(this, k, "f")?.push([
                n,
                e,
                t
            ])), Q(this, g, "f").delete(e), Q(this, y, "f")[o] = void 0, Q(this, v, "f")[o] = void 0, o === Q(this, S, "f")) X(this, S, Q(this, b, "f")[o], "f");
            else if (o === Q(this, _, "f")) X(this, _, Q(this, w, "f")[o], "f");
            else {
                const e = Q(this, b, "f")[o];
                Q(this, w, "f")[e] = Q(this, w, "f")[o];
                const t = Q(this, w, "f")[o];
                Q(this, b, "f")[t] = Q(this, b, "f")[o];
            }
            X(this, m, (r = Q(this, m, "f"), --r), "f"), Q(this, x, "f").push(o);
        }
    }
    if (Q(this, P, "f") && Q(this, k, "f")?.length) {
        const e = Q(this, k, "f");
        let t;
        for(; t = e?.shift();)Q(this, u, "f")?.call(this, ...t);
    }
    return n;
}, K = function(e) {
    for (const t of Q(this, s, "m", j).call(this, {
        allowStale: !0
    })){
        const r = Q(this, v, "f")[t];
        if (Q(this, s, "m", W).call(this, r)) r.__abortController.abort(new Error("deleted"));
        else {
            const n = Q(this, y, "f")[t];
            Q(this, I, "f") && Q(this, l, "f")?.call(this, r, n, e), Q(this, P, "f") && Q(this, k, "f")?.push([
                r,
                n,
                e
            ]);
        }
    }
    if (Q(this, g, "f").clear(), Q(this, v, "f").fill(void 0), Q(this, y, "f").fill(void 0), Q(this, C, "f") && Q(this, T, "f") && (Q(this, C, "f").fill(0), Q(this, T, "f").fill(0)), Q(this, E, "f") && Q(this, E, "f").fill(0), X(this, _, 0, "f"), X(this, S, 0, "f"), Q(this, x, "f").length = 0, X(this, f, 0, "f"), X(this, m, 0, "f"), Q(this, P, "f") && Q(this, k, "f")) {
        const e = Q(this, k, "f");
        let t;
        for(; t = e?.shift();)Q(this, u, "f")?.call(this, ...t);
    }
};
