"use strict";
const { kConstruct: n } = require("./module-2381.js"), { urlEquals: r, fieldValues: o } = require("./module-3006.js"), { kEnumerableProperty: s, isDisturbed: a } = require("./module-9361.js"), { kHeadersList: i } = require("./module-8832.js"), { webidl: c } = require("./module-8005.js"), { Response: l, cloneResponse: g } = require("./module-1099.js"), { Request: E } = require("./module-2239.js"), { kState: u, kHeaders: d, kGuard: I, kRealm: h } = require("./module-5899.js"), { fetching: Q } = require("./module-3406.js"), { urlIsHttpHttpsScheme: m, createDeferredPromise: C, readAllBytes: B } = require("./module-5728.js"), p = require("./module-2613.js"), { getGlobalDispatcher: f } = require("./module-7362.js");
class y {
    #a;
    constructor(){
        arguments[0] !== n && c.illegalConstructor(), this.#a = arguments[1];
    }
    async match(e, A = {}) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        }), e = c.converters.RequestInfo(e), A = c.converters.CacheQueryOptions(A);
        const t = await this.matchAll(e, A);
        if (0 !== t.length) return t[0];
    }
    async matchAll(e = void 0, A = {}) {
        c.brandCheck(this, y), void 0 !== e && (e = c.converters.RequestInfo(e)), A = c.converters.CacheQueryOptions(A);
        let t = null;
        if (void 0 !== e) if (e instanceof E) {
            if (t = e[u], "GET" !== t.method && !A.ignoreMethod) return [];
        } else "string" == typeof e && (t = new E(e)[u]);
        const n = [];
        if (void 0 === e) for (const e of this.#a)n.push(e[1]);
        else {
            const e = this.#i(t, A);
            for (const A of e)n.push(A[1]);
        }
        const r = [];
        for (const e of n){
            const A = new l(e.body?.source ?? null), t = A[u].body;
            A[u] = e, A[u].body = t, A[d][i] = e.headersList, A[d][I] = "immutable", r.push(A);
        }
        return Object.freeze(r);
    }
    async add(e) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        const A = [
            e = c.converters.RequestInfo(e)
        ], t = this.addAll(A);
        return await t;
    }
    async addAll(e) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        }), e = c.converters["sequence<RequestInfo>"](e);
        const A = [], t = [];
        for (const A of e){
            if ("string" == typeof A) continue;
            const e = A[u];
            if (!m(e.url) || "GET" !== e.method) throw c.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const n = [];
        for (const r of e){
            const e = new E(r)[u];
            if (!m(e.url)) throw c.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme."
            });
            e.initiator = "fetch", e.destination = "subresource", t.push(e);
            const s = C();
            n.push(Q({
                request: e,
                dispatcher: f(),
                processResponse (e) {
                    if ("error" === e.type || 206 === e.status || e.status < 200 || e.status > 299) s.reject(c.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (e.headersList.contains("vary")) {
                        const A = o(e.headersList.get("vary"));
                        for (const e of A)if ("*" === e) {
                            s.reject(c.errors.exception({
                                header: "Cache.addAll",
                                message: "invalid vary field value"
                            }));
                            for (const e of n)e.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (e) {
                    e.aborted ? s.reject(new DOMException("aborted", "AbortError")) : s.resolve(e);
                }
            })), A.push(s.promise);
        }
        const r = Promise.all(A), s = await r, a = [];
        let i = 0;
        for (const e of s){
            const A = {
                type: "put",
                request: t[i],
                response: e
            };
            a.push(A), i++;
        }
        const l = C();
        let g = null;
        try {
            this.#c(a);
        } catch (e) {
            g = e;
        }
        return queueMicrotask(()=>{
            null === g ? l.resolve(void 0) : l.reject(g);
        }), l.promise;
    }
    async put(e, A) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        }), e = c.converters.RequestInfo(e), A = c.converters.Response(A);
        let t = null;
        if (t = e instanceof E ? e[u] : new E(e)[u], !m(t.url) || "GET" !== t.method) throw c.errors.exception({
            header: "Cache.put",
            message: "Expected an http/s scheme when method is not GET"
        });
        const n = A[u];
        if (206 === n.status) throw c.errors.exception({
            header: "Cache.put",
            message: "Got 206 status"
        });
        if (n.headersList.contains("vary")) {
            const e = o(n.headersList.get("vary"));
            for (const A of e)if ("*" === A) throw c.errors.exception({
                header: "Cache.put",
                message: "Got * vary field value"
            });
        }
        if (n.body && (a(n.body.stream) || n.body.stream.locked)) throw c.errors.exception({
            header: "Cache.put",
            message: "Response body is locked or disturbed"
        });
        const r = g(n), s = C();
        if (null != n.body) {
            const e = n.body.stream.getReader();
            B(e).then(s.resolve, s.reject);
        } else s.resolve(void 0);
        const i = [], l = {
            type: "put",
            request: t,
            response: r
        };
        i.push(l);
        const d = await s.promise;
        null != r.body && (r.body.source = d);
        const I = C();
        let h = null;
        try {
            this.#c(i);
        } catch (e) {
            h = e;
        }
        return queueMicrotask(()=>{
            null === h ? I.resolve() : I.reject(h);
        }), I.promise;
    }
    async delete(e, A = {}) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        }), e = c.converters.RequestInfo(e), A = c.converters.CacheQueryOptions(A);
        let t = null;
        if (e instanceof E) {
            if (t = e[u], "GET" !== t.method && !A.ignoreMethod) return !1;
        } else p("string" == typeof e), t = new E(e)[u];
        const n = [], r = {
            type: "delete",
            request: t,
            options: A
        };
        n.push(r);
        const o = C();
        let s, a = null;
        try {
            s = this.#c(n);
        } catch (e) {
            a = e;
        }
        return queueMicrotask(()=>{
            null === a ? o.resolve(!!s?.length) : o.reject(a);
        }), o.promise;
    }
    async keys(e = void 0, A = {}) {
        c.brandCheck(this, y), void 0 !== e && (e = c.converters.RequestInfo(e)), A = c.converters.CacheQueryOptions(A);
        let t = null;
        if (void 0 !== e) if (e instanceof E) {
            if (t = e[u], "GET" !== t.method && !A.ignoreMethod) return [];
        } else "string" == typeof e && (t = new E(e)[u]);
        const n = C(), r = [];
        if (void 0 === e) for (const e of this.#a)r.push(e[0]);
        else {
            const e = this.#i(t, A);
            for (const A of e)r.push(A[0]);
        }
        return queueMicrotask(()=>{
            const e = [];
            for (const A of r){
                const t = new E("https://a");
                t[u] = A, t[d][i] = A.headersList, t[d][I] = "immutable", t[h] = A.client, e.push(t);
            }
            n.resolve(Object.freeze(e));
        }), n.promise;
    }
    #c(e) {
        const A = this.#a, t = [
            ...A
        ], n = [], r = [];
        try {
            for (const t of e){
                if ("delete" !== t.type && "put" !== t.type) throw c.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === t.type && null != t.response) throw c.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#i(t.request, t.options, n).length) throw new DOMException("???", "InvalidStateError");
                let e;
                if ("delete" === t.type) {
                    if (e = this.#i(t.request, t.options), 0 === e.length) return [];
                    for (const t of e){
                        const e = A.indexOf(t);
                        p(-1 !== e), A.splice(e, 1);
                    }
                } else if ("put" === t.type) {
                    if (null == t.response) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const r = t.request;
                    if (!m(r.url)) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== r.method) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != t.options) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    e = this.#i(t.request);
                    for (const t of e){
                        const e = A.indexOf(t);
                        p(-1 !== e), A.splice(e, 1);
                    }
                    A.push([
                        t.request,
                        t.response
                    ]), n.push([
                        t.request,
                        t.response
                    ]);
                }
                r.push([
                    t.request,
                    t.response
                ]);
            }
            return r;
        } catch (e) {
            throw this.#a.length = 0, this.#a = t, e;
        }
    }
    #i(e, A, t) {
        const n = [], r = t ?? this.#a;
        for (const t of r){
            const [r, o] = t;
            this.#l(e, r, o, A) && n.push(t);
        }
        return n;
    }
    #l(e, A, t = null, n) {
        const s = new URL(e.url), a = new URL(A.url);
        if (n?.ignoreSearch && (a.search = "", s.search = ""), !r(s, a, !0)) return !1;
        if (null == t || n?.ignoreVary || !t.headersList.contains("vary")) return !0;
        const i = o(t.headersList.get("vary"));
        for (const t of i){
            if ("*" === t) return !1;
            if (A.headersList.get(t) !== e.headersList.get(t)) return !1;
        }
        return !0;
    }
}
Object.defineProperties(y.prototype, {
    [Symbol.toStringTag]: {
        value: "Cache",
        configurable: !0
    },
    match: s,
    matchAll: s,
    add: s,
    addAll: s,
    put: s,
    delete: s,
    keys: s
});
const T = [
    {
        key: "ignoreSearch",
        converter: c.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreMethod",
        converter: c.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreVary",
        converter: c.converters.boolean,
        defaultValue: !1
    }
];
c.converters.CacheQueryOptions = c.dictionaryConverter(T), c.converters.MultiCacheQueryOptions = c.dictionaryConverter([
    ...T,
    {
        key: "cacheName",
        converter: c.converters.DOMString
    }
]), c.converters.Response = c.interfaceConverter(l), c.converters["sequence<RequestInfo>"] = c.sequenceConverter(c.converters.RequestInfo), module.exports = {
    Cache: y
};
