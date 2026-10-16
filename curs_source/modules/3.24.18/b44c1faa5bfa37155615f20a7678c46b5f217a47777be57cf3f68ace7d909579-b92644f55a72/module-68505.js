"use strict";
require.d(exports, {
    q: ()=>ue
});
var n, s, o, i, a, c, l, u, d, p, m, h, f, g, y, w, v, _, A, S, b, E, I, C, k, x, T, R, B, P, J, M, q, D, O, N, F, U, L, $, Q, j, G, H, z, W, V, K, Y, Z = function(e, t, r, n, s) {
    if ("m" === n) throw new TypeError("Private method is not writable");
    if ("a" === n && !s) throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === n ? s.call(e, r) : s ? s.value = r : t.set(e, r), r;
}, X = function(e, t, r, n) {
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
        Z(n, n, !0, "f", s);
        const r = new n(e, t);
        return Z(n, n, !1, "f", s), r;
    }
    constructor(e, t){
        if (!X(n, n, "f", s)) throw new TypeError("instantiate Stack using Stack.create(n)");
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
        return X(this, m, "f");
    }
    static unsafeExposeInternals(e) {
        return {
            starts: X(e, C, "f"),
            ttls: X(e, k, "f"),
            sizes: X(e, I, "f"),
            keyMap: X(e, g, "f"),
            keyList: X(e, y, "f"),
            valList: X(e, w, "f"),
            next: X(e, v, "f"),
            prev: X(e, _, "f"),
            get head () {
                return X(e, A, "f");
            },
            get tail () {
                return X(e, S, "f");
            },
            free: X(e, b, "f"),
            isBackgroundFetch: (t)=>X(e, o, "m", H).call(e, t),
            backgroundFetch: (t, r, n, s)=>X(e, o, "m", G).call(e, t, r, n, s),
            moveToTail: (t)=>X(e, o, "m", W).call(e, t),
            indexes: (t)=>X(e, o, "m", L).call(e, t),
            rindexes: (t)=>X(e, o, "m", $).call(e, t),
            isStale: (t)=>X(e, D, "f").call(e, t)
        };
    }
    get max() {
        return X(this, i, "f");
    }
    get maxSize() {
        return X(this, a, "f");
    }
    get calculatedSize() {
        return X(this, f, "f");
    }
    get size() {
        return X(this, h, "f");
    }
    get fetchMethod() {
        return X(this, d, "f");
    }
    get memoMethod() {
        return X(this, p, "f");
    }
    get dispose() {
        return X(this, c, "f");
    }
    get onInsert() {
        return X(this, l, "f");
    }
    get disposeAfter() {
        return X(this, u, "f");
    }
    constructor(e){
        o.add(this), i.set(this, void 0), a.set(this, void 0), c.set(this, void 0), l.set(this, void 0), u.set(this, void 0), d.set(this, void 0), p.set(this, void 0), m.set(this, void 0), h.set(this, void 0), f.set(this, void 0), g.set(this, void 0), y.set(this, void 0), w.set(this, void 0), v.set(this, void 0), _.set(this, void 0), A.set(this, void 0), S.set(this, void 0), b.set(this, void 0), E.set(this, void 0), I.set(this, void 0), C.set(this, void 0), k.set(this, void 0), x.set(this, void 0), T.set(this, void 0), R.set(this, void 0), B.set(this, void 0), J.set(this, ()=>{}), M.set(this, ()=>{}), q.set(this, ()=>{}), D.set(this, ()=>!1), N.set(this, (e)=>{}), F.set(this, (e, t, r)=>{}), U.set(this, (e, t, r, n)=>{
            if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            return 0;
        }), this[Y] = "LRUCache";
        const { max: t = 0, ttl: r, ttlResolution: n = 1, ttlAutopurge: s, updateAgeOnGet: L, updateAgeOnHas: $, allowStale: Q, dispose: j, onInsert: G, disposeAfter: H, noDisposeOnSet: z, noUpdateTTL: W, maxSize: V = 0, maxEntrySize: K = 0, sizeCalculation: re, fetchMethod: se, memoMethod: oe, noDeleteOnFetchRejection: ce, noDeleteOnStaleGet: de, allowStaleOnFetchRejection: pe, allowStaleOnFetchAbort: me, ignoreFetchAbort: he, perf: fe } = e;
        if (void 0 !== fe && "function" != typeof fe?.now) throw new TypeError("perf option must have a now() method if specified");
        if (Z(this, m, fe ?? ee, "f"), 0 !== t && !ie(t)) throw new TypeError("max option must be a nonnegative integer");
        const ge = t ? ae(t) : Array;
        if (!ge) throw new Error(`invalid max value: ${t}`);
        if (Z(this, i, t, "f"), Z(this, a, V, "f"), this.maxEntrySize = K || X(this, a, "f"), this.sizeCalculation = re, this.sizeCalculation) {
            if (!X(this, a, "f") && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
        }
        if (void 0 !== oe && "function" != typeof oe) throw new TypeError("memoMethod must be a function if defined");
        if (Z(this, p, oe, "f"), void 0 !== se && "function" != typeof se) throw new TypeError("fetchMethod must be a function if specified");
        if (Z(this, d, se, "f"), Z(this, T, !!se, "f"), Z(this, g, new Map, "f"), Z(this, y, new Array(t).fill(void 0), "f"), Z(this, w, new Array(t).fill(void 0), "f"), Z(this, v, new ge(t), "f"), Z(this, _, new ge(t), "f"), Z(this, A, 0, "f"), Z(this, S, 0, "f"), Z(this, b, le.create(t), "f"), Z(this, h, 0, "f"), Z(this, f, 0, "f"), "function" == typeof j && Z(this, c, j, "f"), "function" == typeof G && Z(this, l, G, "f"), "function" == typeof H ? (Z(this, u, H, "f"), Z(this, E, [], "f")) : (Z(this, u, void 0, "f"), Z(this, E, void 0, "f")), Z(this, x, !!X(this, c, "f"), "f"), Z(this, B, !!X(this, l, "f"), "f"), Z(this, R, !!X(this, u, "f"), "f"), this.noDisposeOnSet = !!z, this.noUpdateTTL = !!W, this.noDeleteOnFetchRejection = !!ce, this.allowStaleOnFetchRejection = !!pe, this.allowStaleOnFetchAbort = !!me, this.ignoreFetchAbort = !!he, 0 !== this.maxEntrySize) {
            if (0 !== X(this, a, "f") && !ie(X(this, a, "f"))) throw new TypeError("maxSize must be a positive integer if specified");
            if (!ie(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            X(this, o, "m", O).call(this);
        }
        if (this.allowStale = !!Q, this.noDeleteOnStaleGet = !!de, this.updateAgeOnGet = !!L, this.updateAgeOnHas = !!$, this.ttlResolution = ie(n) || 0 === n ? n : 1, this.ttlAutopurge = !!s, this.ttl = r || 0, this.ttl) {
            if (!ie(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            X(this, o, "m", P).call(this);
        }
        if (0 === X(this, i, "f") && 0 === this.ttl && 0 === X(this, a, "f")) throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !X(this, i, "f") && !X(this, a, "f")) {
            const e = "LRU_CACHE_UNBOUNDED";
            if (((e)=>!te.has(e))(e)) {
                te.add(e);
                ne("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, ue);
            }
        }
    }
    getRemainingTTL(e) {
        return X(this, g, "f").has(e) ? 1 / 0 : 0;
    }
    *entries() {
        for (const e of X(this, o, "m", L).call(this))void 0 === X(this, w, "f")[e] || void 0 === X(this, y, "f")[e] || X(this, o, "m", H).call(this, X(this, w, "f")[e]) || (yield [
            X(this, y, "f")[e],
            X(this, w, "f")[e]
        ]);
    }
    *rentries() {
        for (const e of X(this, o, "m", $).call(this))void 0 === X(this, w, "f")[e] || void 0 === X(this, y, "f")[e] || X(this, o, "m", H).call(this, X(this, w, "f")[e]) || (yield [
            X(this, y, "f")[e],
            X(this, w, "f")[e]
        ]);
    }
    *keys() {
        for (const e of X(this, o, "m", L).call(this)){
            const t = X(this, y, "f")[e];
            void 0 === t || X(this, o, "m", H).call(this, X(this, w, "f")[e]) || (yield t);
        }
    }
    *rkeys() {
        for (const e of X(this, o, "m", $).call(this)){
            const t = X(this, y, "f")[e];
            void 0 === t || X(this, o, "m", H).call(this, X(this, w, "f")[e]) || (yield t);
        }
    }
    *values() {
        for (const e of X(this, o, "m", L).call(this)){
            void 0 === X(this, w, "f")[e] || X(this, o, "m", H).call(this, X(this, w, "f")[e]) || (yield X(this, w, "f")[e]);
        }
    }
    *rvalues() {
        for (const e of X(this, o, "m", $).call(this)){
            void 0 === X(this, w, "f")[e] || X(this, o, "m", H).call(this, X(this, w, "f")[e]) || (yield X(this, w, "f")[e]);
        }
    }
    [(i = new WeakMap, a = new WeakMap, c = new WeakMap, l = new WeakMap, u = new WeakMap, d = new WeakMap, p = new WeakMap, m = new WeakMap, h = new WeakMap, f = new WeakMap, g = new WeakMap, y = new WeakMap, w = new WeakMap, v = new WeakMap, _ = new WeakMap, A = new WeakMap, S = new WeakMap, b = new WeakMap, E = new WeakMap, I = new WeakMap, C = new WeakMap, k = new WeakMap, x = new WeakMap, T = new WeakMap, R = new WeakMap, B = new WeakMap, J = new WeakMap, M = new WeakMap, q = new WeakMap, D = new WeakMap, N = new WeakMap, F = new WeakMap, U = new WeakMap, o = new WeakSet, P = function() {
        const e = new ce(X(this, i, "f")), t = new ce(X(this, i, "f"));
        Z(this, k, e, "f"), Z(this, C, t, "f"), Z(this, q, (r, n, s = X(this, m, "f").now())=>{
            if (t[r] = 0 !== n ? s : 0, e[r] = n, 0 !== n && this.ttlAutopurge) {
                const e = setTimeout(()=>{
                    X(this, D, "f").call(this, r) && X(this, o, "m", V).call(this, X(this, y, "f")[r], "expire");
                }, n + 1);
                e.unref && e.unref();
            }
        }, "f"), Z(this, J, (r)=>{
            t[r] = 0 !== e[r] ? X(this, m, "f").now() : 0;
        }, "f"), Z(this, M, (s, o)=>{
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
            const e = X(this, m, "f").now();
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
            const o = X(this, g, "f").get(s);
            if (void 0 === o) return 0;
            const i = e[o], a = t[o];
            if (!i || !a) return 1 / 0;
            return i - ((r || n()) - a);
        }, Z(this, D, (s)=>{
            const o = t[s], i = e[s];
            return !!i && !!o && (r || n()) - o > i;
        }, "f");
    }, O = function() {
        const e = new ce(X(this, i, "f"));
        Z(this, f, 0, "f"), Z(this, I, e, "f"), Z(this, N, (t)=>{
            Z(this, f, X(this, f, "f") - e[t], "f"), e[t] = 0;
        }, "f"), Z(this, U, (e, t, r, n)=>{
            if (X(this, o, "m", H).call(this, t)) return 0;
            if (!ie(r)) {
                if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
                if (r = n(t, e), !ie(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
            }
            return r;
        }, "f"), Z(this, F, (t, r, n)=>{
            if (e[t] = r, X(this, a, "f")) {
                const r = X(this, a, "f") - e[t];
                for(; X(this, f, "f") > r;)X(this, o, "m", j).call(this, !0);
            }
            Z(this, f, X(this, f, "f") + e[t], "f"), n && (n.entrySize = r, n.totalCalculatedSize = X(this, f, "f"));
        }, "f");
    }, L = function*({ allowStale: e = this.allowStale } = {}) {
        if (X(this, h, "f")) for(let t = X(this, S, "f"); X(this, o, "m", Q).call(this, t) && (!e && X(this, D, "f").call(this, t) || (yield t), t !== X(this, A, "f"));)t = X(this, _, "f")[t];
    }, $ = function*({ allowStale: e = this.allowStale } = {}) {
        if (X(this, h, "f")) for(let t = X(this, A, "f"); X(this, o, "m", Q).call(this, t) && (!e && X(this, D, "f").call(this, t) || (yield t), t !== X(this, S, "f"));)t = X(this, v, "f")[t];
    }, Q = function(e) {
        return void 0 !== e && X(this, g, "f").get(X(this, y, "f")[e]) === e;
    }, Symbol.iterator)]() {
        return this.entries();
    }
    find(e, t = {}) {
        for (const r of X(this, o, "m", L).call(this)){
            const n = X(this, w, "f")[r], s = X(this, o, "m", H).call(this, n) ? n.__staleWhileFetching : n;
            if (void 0 !== s && e(s, X(this, y, "f")[r], this)) return this.get(X(this, y, "f")[r], t);
        }
    }
    forEach(e, t = this) {
        for (const r of X(this, o, "m", L).call(this)){
            const n = X(this, w, "f")[r], s = X(this, o, "m", H).call(this, n) ? n.__staleWhileFetching : n;
            void 0 !== s && e.call(t, s, X(this, y, "f")[r], this);
        }
    }
    rforEach(e, t = this) {
        for (const r of X(this, o, "m", $).call(this)){
            const n = X(this, w, "f")[r], s = X(this, o, "m", H).call(this, n) ? n.__staleWhileFetching : n;
            void 0 !== s && e.call(t, s, X(this, y, "f")[r], this);
        }
    }
    purgeStale() {
        let e = !1;
        for (const t of X(this, o, "m", $).call(this, {
            allowStale: !0
        }))X(this, D, "f").call(this, t) && (X(this, o, "m", V).call(this, X(this, y, "f")[t], "expire"), e = !0);
        return e;
    }
    info(e) {
        const t = X(this, g, "f").get(e);
        if (void 0 === t) return;
        const r = X(this, w, "f")[t], n = X(this, o, "m", H).call(this, r) ? r.__staleWhileFetching : r;
        if (void 0 === n) return;
        const s = {
            value: n
        };
        if (X(this, k, "f") && X(this, C, "f")) {
            const e = X(this, k, "f")[t], r = X(this, C, "f")[t];
            if (e && r) {
                const t = e - (X(this, m, "f").now() - r);
                s.ttl = t, s.start = Date.now();
            }
        }
        return X(this, I, "f") && (s.size = X(this, I, "f")[t]), s;
    }
    dump() {
        const e = [];
        for (const t of X(this, o, "m", L).call(this, {
            allowStale: !0
        })){
            const r = X(this, y, "f")[t], n = X(this, w, "f")[t], s = X(this, o, "m", H).call(this, n) ? n.__staleWhileFetching : n;
            if (void 0 === s || void 0 === r) continue;
            const i = {
                value: s
            };
            if (X(this, k, "f") && X(this, C, "f")) {
                i.ttl = X(this, k, "f")[t];
                const e = X(this, m, "f").now() - X(this, C, "f")[t];
                i.start = Math.floor(Date.now() - e);
            }
            X(this, I, "f") && (i.size = X(this, I, "f")[t]), e.unshift([
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
                r.start = X(this, m, "f").now() - e;
            }
            this.set(t, r.value, r);
        }
    }
    set(e, t, r = {}) {
        var n;
        if (void 0 === t) return this.delete(e), this;
        const { ttl: s = this.ttl, start: a, noDisposeOnSet: d = this.noDisposeOnSet, sizeCalculation: p = this.sizeCalculation, status: m } = r;
        let { noUpdateTTL: f = this.noUpdateTTL } = r;
        const A = X(this, U, "f").call(this, e, t, r.size || 0, p);
        if (this.maxEntrySize && A > this.maxEntrySize) return m && (m.set = "miss", m.maxEntrySizeExceeded = !0), X(this, o, "m", V).call(this, e, "set"), this;
        let I = 0 === X(this, h, "f") ? void 0 : X(this, g, "f").get(e);
        if (void 0 === I) I = 0 === X(this, h, "f") ? X(this, S, "f") : 0 !== X(this, b, "f").length ? X(this, b, "f").pop() : X(this, h, "f") === X(this, i, "f") ? X(this, o, "m", j).call(this, !1) : X(this, h, "f"), X(this, y, "f")[I] = e, X(this, w, "f")[I] = t, X(this, g, "f").set(e, I), X(this, v, "f")[X(this, S, "f")] = I, X(this, _, "f")[I] = X(this, S, "f"), Z(this, S, I, "f"), Z(this, h, (n = X(this, h, "f"), ++n), "f"), X(this, F, "f").call(this, I, A, m), m && (m.set = "add"), f = !1, X(this, B, "f") && X(this, l, "f")?.call(this, t, e, "add");
        else {
            X(this, o, "m", W).call(this, I);
            const r = X(this, w, "f")[I];
            if (t !== r) {
                if (X(this, T, "f") && X(this, o, "m", H).call(this, r)) {
                    r.__abortController.abort(new Error("replaced"));
                    const { __staleWhileFetching: t } = r;
                    void 0 === t || d || (X(this, x, "f") && X(this, c, "f")?.call(this, t, e, "set"), X(this, R, "f") && X(this, E, "f")?.push([
                        t,
                        e,
                        "set"
                    ]));
                } else d || (X(this, x, "f") && X(this, c, "f")?.call(this, r, e, "set"), X(this, R, "f") && X(this, E, "f")?.push([
                    r,
                    e,
                    "set"
                ]));
                if (X(this, N, "f").call(this, I), X(this, F, "f").call(this, I, A, m), X(this, w, "f")[I] = t, m) {
                    m.set = "replace";
                    const e = r && X(this, o, "m", H).call(this, r) ? r.__staleWhileFetching : r;
                    void 0 !== e && (m.oldValue = e);
                }
            } else m && (m.set = "update");
            X(this, B, "f") && this.onInsert?.(t, e, t === r ? "update" : "replace");
        }
        if (0 === s || X(this, k, "f") || X(this, o, "m", P).call(this), X(this, k, "f") && (f || X(this, q, "f").call(this, I, s, a), m && X(this, M, "f").call(this, m, I)), !d && X(this, R, "f") && X(this, E, "f")) {
            const e = X(this, E, "f");
            let t;
            for(; t = e?.shift();)X(this, u, "f")?.call(this, ...t);
        }
        return this;
    }
    pop() {
        try {
            for(; X(this, h, "f");){
                const e = X(this, w, "f")[X(this, A, "f")];
                if (X(this, o, "m", j).call(this, !0), X(this, o, "m", H).call(this, e)) {
                    if (e.__staleWhileFetching) return e.__staleWhileFetching;
                } else if (void 0 !== e) return e;
            }
            return;
        } finally{
            if (X(this, R, "f") && X(this, E, "f")) {
                const e = X(this, E, "f");
                let t;
                for(; t = e?.shift();)X(this, u, "f")?.call(this, ...t);
            }
        }
    }
    has(e, t = {}) {
        const { updateAgeOnHas: r = this.updateAgeOnHas, status: n } = t, s = X(this, g, "f").get(e);
        if (void 0 !== s) {
            const e = X(this, w, "f")[s];
            if (X(this, o, "m", H).call(this, e) && void 0 === e.__staleWhileFetching) return !1;
            if (!X(this, D, "f").call(this, s)) return r && X(this, J, "f").call(this, s), n && (n.has = "hit", X(this, M, "f").call(this, n, s)), !0;
            n && (n.has = "stale", X(this, M, "f").call(this, n, s));
        } else n && (n.has = "miss");
        return !1;
    }
    peek(e, t = {}) {
        const { allowStale: r = this.allowStale } = t, n = X(this, g, "f").get(e);
        if (void 0 === n || !r && X(this, D, "f").call(this, n)) return;
        const s = X(this, w, "f")[n];
        return X(this, o, "m", H).call(this, s) ? s.__staleWhileFetching : s;
    }
    async fetch(e, t = {}) {
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, ttl: i = this.ttl, noDisposeOnSet: a = this.noDisposeOnSet, size: c = 0, sizeCalculation: l = this.sizeCalculation, noUpdateTTL: u = this.noUpdateTTL, noDeleteOnFetchRejection: d = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: p = this.allowStaleOnFetchRejection, ignoreFetchAbort: m = this.ignoreFetchAbort, allowStaleOnFetchAbort: h = this.allowStaleOnFetchAbort, context: f, forceRefresh: y = !1, status: v, signal: _ } = t;
        if (!X(this, T, "f")) return v && (v.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: s,
            status: v
        });
        const A = {
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
        }, S = X(this, g, "f").get(e);
        if (void 0 === S) {
            v && (v.fetch = "miss");
            const t = X(this, o, "m", G).call(this, e, S, A, f);
            return t.__returned = t;
        }
        {
            const t = X(this, w, "f")[S];
            if (X(this, o, "m", H).call(this, t)) {
                const e = r && void 0 !== t.__staleWhileFetching;
                return v && (v.fetch = "inflight", e && (v.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t;
            }
            const s = X(this, D, "f").call(this, S);
            if (!y && !s) return v && (v.fetch = "hit"), X(this, o, "m", W).call(this, S), n && X(this, J, "f").call(this, S), v && X(this, M, "f").call(this, v, S), t;
            const i = X(this, o, "m", G).call(this, e, S, A, f), a = void 0 !== i.__staleWhileFetching && r;
            return v && (v.fetch = s ? "stale" : "refresh", a && s && (v.returnedStale = !0)), a ? i.__staleWhileFetching : i.__returned = i;
        }
    }
    async forceFetch(e, t = {}) {
        const r = await this.fetch(e, t);
        if (void 0 === r) throw new Error("fetch() returned undefined");
        return r;
    }
    memo(e, t = {}) {
        const r = X(this, p, "f");
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
        const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: s = this.noDeleteOnStaleGet, status: i } = t, a = X(this, g, "f").get(e);
        if (void 0 !== a) {
            const t = X(this, w, "f")[a], c = X(this, o, "m", H).call(this, t);
            return i && X(this, M, "f").call(this, i, a), X(this, D, "f").call(this, a) ? (i && (i.get = "stale"), c ? (i && r && void 0 !== t.__staleWhileFetching && (i.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (s || X(this, o, "m", V).call(this, e, "expire"), i && r && (i.returnedStale = !0), r ? t : void 0)) : (i && (i.get = "hit"), c ? t.__staleWhileFetching : (X(this, o, "m", W).call(this, a), n && X(this, J, "f").call(this, a), t));
        }
        i && (i.get = "miss");
    }
    delete(e) {
        return X(this, o, "m", V).call(this, e, "delete");
    }
    clear() {
        X(this, o, "m", K).call(this, "delete");
    }
}
Y = Symbol.toStringTag, j = function(e) {
    var t;
    const r = X(this, A, "f"), n = X(this, y, "f")[r], s = X(this, w, "f")[r];
    return X(this, T, "f") && X(this, o, "m", H).call(this, s) ? s.__abortController.abort(new Error("evicted")) : (X(this, x, "f") || X(this, R, "f")) && (X(this, x, "f") && X(this, c, "f")?.call(this, s, n, "evict"), X(this, R, "f") && X(this, E, "f")?.push([
        s,
        n,
        "evict"
    ])), X(this, N, "f").call(this, r), e && (X(this, y, "f")[r] = void 0, X(this, w, "f")[r] = void 0, X(this, b, "f").push(r)), 1 === X(this, h, "f") ? (Z(this, A, Z(this, S, 0, "f"), "f"), X(this, b, "f").length = 0) : Z(this, A, X(this, v, "f")[r], "f"), X(this, g, "f").delete(n), Z(this, h, (t = X(this, h, "f"), --t), "f"), r;
}, G = function(e, t, r, n) {
    const s = void 0 === t ? void 0 : X(this, w, "f")[t];
    if (X(this, o, "m", H).call(this, s)) return s;
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
        const d = p, m = X(this, w, "f")[t];
        return (m === p || l && s && void 0 === m) && (void 0 === n ? void 0 !== d.__staleWhileFetching ? X(this, w, "f")[t] = d.__staleWhileFetching : X(this, o, "m", V).call(this, e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, n, c.options))), n;
    }, u = (n)=>{
        const { aborted: s } = i.signal, a = s && r.allowStaleOnFetchAbort, c = a || r.allowStaleOnFetchRejection, l = c || r.noDeleteOnFetchRejection, u = p;
        if (X(this, w, "f")[t] === p) {
            !l || void 0 === u.__staleWhileFetching ? X(this, o, "m", V).call(this, e, "fetch") : a || (X(this, w, "f")[t] = u.__staleWhileFetching);
        }
        if (c) return r.status && void 0 !== u.__staleWhileFetching && (r.status.returnedStale = !0), u.__staleWhileFetching;
        if (u.__returned === u) throw n;
    };
    r.status && (r.status.fetchDispatched = !0);
    const p = new Promise((t, n)=>{
        const o = X(this, d, "f")?.call(this, e, s, c);
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
    }), t = X(this, g, "f").get(e)) : X(this, w, "f")[t] = m, m;
}, H = function(e) {
    if (!X(this, T, "f")) return !1;
    const t = e;
    return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof se;
}, z = function(e, t) {
    X(this, _, "f")[t] = e, X(this, v, "f")[e] = t;
}, W = function(e) {
    e !== X(this, S, "f") && (e === X(this, A, "f") ? Z(this, A, X(this, v, "f")[e], "f") : X(this, o, "m", z).call(this, X(this, _, "f")[e], X(this, v, "f")[e]), X(this, o, "m", z).call(this, X(this, S, "f"), e), Z(this, S, e, "f"));
}, V = function(e, t) {
    var r;
    let n = !1;
    if (0 !== X(this, h, "f")) {
        const s = X(this, g, "f").get(e);
        if (void 0 !== s) if (n = !0, 1 === X(this, h, "f")) X(this, o, "m", K).call(this, t);
        else {
            X(this, N, "f").call(this, s);
            const n = X(this, w, "f")[s];
            if (X(this, o, "m", H).call(this, n) ? n.__abortController.abort(new Error("deleted")) : (X(this, x, "f") || X(this, R, "f")) && (X(this, x, "f") && X(this, c, "f")?.call(this, n, e, t), X(this, R, "f") && X(this, E, "f")?.push([
                n,
                e,
                t
            ])), X(this, g, "f").delete(e), X(this, y, "f")[s] = void 0, X(this, w, "f")[s] = void 0, s === X(this, S, "f")) Z(this, S, X(this, _, "f")[s], "f");
            else if (s === X(this, A, "f")) Z(this, A, X(this, v, "f")[s], "f");
            else {
                const e = X(this, _, "f")[s];
                X(this, v, "f")[e] = X(this, v, "f")[s];
                const t = X(this, v, "f")[s];
                X(this, _, "f")[t] = X(this, _, "f")[s];
            }
            Z(this, h, (r = X(this, h, "f"), --r), "f"), X(this, b, "f").push(s);
        }
    }
    if (X(this, R, "f") && X(this, E, "f")?.length) {
        const e = X(this, E, "f");
        let t;
        for(; t = e?.shift();)X(this, u, "f")?.call(this, ...t);
    }
    return n;
}, K = function(e) {
    for (const t of X(this, o, "m", $).call(this, {
        allowStale: !0
    })){
        const r = X(this, w, "f")[t];
        if (X(this, o, "m", H).call(this, r)) r.__abortController.abort(new Error("deleted"));
        else {
            const n = X(this, y, "f")[t];
            X(this, x, "f") && X(this, c, "f")?.call(this, r, n, e), X(this, R, "f") && X(this, E, "f")?.push([
                r,
                n,
                e
            ]);
        }
    }
    if (X(this, g, "f").clear(), X(this, w, "f").fill(void 0), X(this, y, "f").fill(void 0), X(this, k, "f") && X(this, C, "f") && (X(this, k, "f").fill(0), X(this, C, "f").fill(0)), X(this, I, "f") && X(this, I, "f").fill(0), Z(this, A, 0, "f"), Z(this, S, 0, "f"), X(this, b, "f").length = 0, Z(this, f, 0, "f"), Z(this, h, 0, "f"), X(this, R, "f") && X(this, E, "f")) {
        const e = X(this, E, "f");
        let t;
        for(; t = e?.shift();)X(this, u, "f")?.call(this, ...t);
    }
};
