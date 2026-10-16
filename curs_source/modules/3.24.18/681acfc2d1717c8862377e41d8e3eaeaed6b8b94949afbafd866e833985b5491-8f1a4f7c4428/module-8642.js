"use strict";
const { kConstruct: n } = require("./module-2381.js"), { urlEquals: r, fieldValues: o } = require("./module-3006.js"), { kEnumerableProperty: s, isDisturbed: i } = require("./module-9361.js"), { kHeadersList: a } = require("./module-8832.js"), { webidl: c } = require("./module-8005.js"), { Response: l, cloneResponse: u } = require("./module-1099.js"), { Request: g } = require("./module-2239.js"), { kState: E, kHeaders: h, kGuard: d, kRealm: I } = require("./module-5899.js"), { fetching: B } = require("./module-3406.js"), { urlIsHttpHttpsScheme: Q, createDeferredPromise: f, readAllBytes: C } = require("./module-5728.js"), p = require("./module-2613.js"), { getGlobalDispatcher: m } = require("./module-7362.js");
class y {
    #i;
    constructor(){
        arguments[0] !== n && c.illegalConstructor(), this.#i = arguments[1];
    }
    async match(e, t = {}) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        }), e = c.converters.RequestInfo(e), t = c.converters.CacheQueryOptions(t);
        const A = await this.matchAll(e, t);
        if (0 !== A.length) return A[0];
    }
    async matchAll(e = void 0, t = {}) {
        c.brandCheck(this, y), void 0 !== e && (e = c.converters.RequestInfo(e)), t = c.converters.CacheQueryOptions(t);
        let A = null;
        if (void 0 !== e) if (e instanceof g) {
            if (A = e[E], "GET" !== A.method && !t.ignoreMethod) return [];
        } else "string" == typeof e && (A = new g(e)[E]);
        const n = [];
        if (void 0 === e) for (const e of this.#i)n.push(e[1]);
        else {
            const e = this.#a(A, t);
            for (const t of e)n.push(t[1]);
        }
        const r = [];
        for (const e of n){
            const t = new l(e.body?.source ?? null), A = t[E].body;
            t[E] = e, t[E].body = A, t[h][a] = e.headersList, t[h][d] = "immutable", r.push(t);
        }
        return Object.freeze(r);
    }
    async add(e) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        const t = [
            e = c.converters.RequestInfo(e)
        ], A = this.addAll(t);
        return await A;
    }
    async addAll(e) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        }), e = c.converters["sequence<RequestInfo>"](e);
        const t = [], A = [];
        for (const t of e){
            if ("string" == typeof t) continue;
            const e = t[E];
            if (!Q(e.url) || "GET" !== e.method) throw c.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const n = [];
        for (const r of e){
            const e = new g(r)[E];
            if (!Q(e.url)) throw c.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme."
            });
            e.initiator = "fetch", e.destination = "subresource", A.push(e);
            const s = f();
            n.push(B({
                request: e,
                dispatcher: m(),
                processResponse (e) {
                    if ("error" === e.type || 206 === e.status || e.status < 200 || e.status > 299) s.reject(c.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (e.headersList.contains("vary")) {
                        const t = o(e.headersList.get("vary"));
                        for (const e of t)if ("*" === e) {
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
            })), t.push(s.promise);
        }
        const r = Promise.all(t), s = await r, i = [];
        let a = 0;
        for (const e of s){
            const t = {
                type: "put",
                request: A[a],
                response: e
            };
            i.push(t), a++;
        }
        const l = f();
        let u = null;
        try {
            this.#c(i);
        } catch (e) {
            u = e;
        }
        return queueMicrotask(()=>{
            null === u ? l.resolve(void 0) : l.reject(u);
        }), l.promise;
    }
    async put(e, t) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        }), e = c.converters.RequestInfo(e), t = c.converters.Response(t);
        let A = null;
        if (A = e instanceof g ? e[E] : new g(e)[E], !Q(A.url) || "GET" !== A.method) throw c.errors.exception({
            header: "Cache.put",
            message: "Expected an http/s scheme when method is not GET"
        });
        const n = t[E];
        if (206 === n.status) throw c.errors.exception({
            header: "Cache.put",
            message: "Got 206 status"
        });
        if (n.headersList.contains("vary")) {
            const e = o(n.headersList.get("vary"));
            for (const t of e)if ("*" === t) throw c.errors.exception({
                header: "Cache.put",
                message: "Got * vary field value"
            });
        }
        if (n.body && (i(n.body.stream) || n.body.stream.locked)) throw c.errors.exception({
            header: "Cache.put",
            message: "Response body is locked or disturbed"
        });
        const r = u(n), s = f();
        if (null != n.body) {
            const e = n.body.stream.getReader();
            C(e).then(s.resolve, s.reject);
        } else s.resolve(void 0);
        const a = [], l = {
            type: "put",
            request: A,
            response: r
        };
        a.push(l);
        const h = await s.promise;
        null != r.body && (r.body.source = h);
        const d = f();
        let I = null;
        try {
            this.#c(a);
        } catch (e) {
            I = e;
        }
        return queueMicrotask(()=>{
            null === I ? d.resolve() : d.reject(I);
        }), d.promise;
    }
    async delete(e, t = {}) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        }), e = c.converters.RequestInfo(e), t = c.converters.CacheQueryOptions(t);
        let A = null;
        if (e instanceof g) {
            if (A = e[E], "GET" !== A.method && !t.ignoreMethod) return !1;
        } else p("string" == typeof e), A = new g(e)[E];
        const n = [], r = {
            type: "delete",
            request: A,
            options: t
        };
        n.push(r);
        const o = f();
        let s, i = null;
        try {
            s = this.#c(n);
        } catch (e) {
            i = e;
        }
        return queueMicrotask(()=>{
            null === i ? o.resolve(!!s?.length) : o.reject(i);
        }), o.promise;
    }
    async keys(e = void 0, t = {}) {
        c.brandCheck(this, y), void 0 !== e && (e = c.converters.RequestInfo(e)), t = c.converters.CacheQueryOptions(t);
        let A = null;
        if (void 0 !== e) if (e instanceof g) {
            if (A = e[E], "GET" !== A.method && !t.ignoreMethod) return [];
        } else "string" == typeof e && (A = new g(e)[E]);
        const n = f(), r = [];
        if (void 0 === e) for (const e of this.#i)r.push(e[0]);
        else {
            const e = this.#a(A, t);
            for (const t of e)r.push(t[0]);
        }
        return queueMicrotask(()=>{
            const e = [];
            for (const t of r){
                const A = new g("https://a");
                A[E] = t, A[h][a] = t.headersList, A[h][d] = "immutable", A[I] = t.client, e.push(A);
            }
            n.resolve(Object.freeze(e));
        }), n.promise;
    }
    #c(e) {
        const t = this.#i, A = [
            ...t
        ], n = [], r = [];
        try {
            for (const A of e){
                if ("delete" !== A.type && "put" !== A.type) throw c.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === A.type && null != A.response) throw c.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#a(A.request, A.options, n).length) throw new DOMException("???", "InvalidStateError");
                let e;
                if ("delete" === A.type) {
                    if (e = this.#a(A.request, A.options), 0 === e.length) return [];
                    for (const A of e){
                        const e = t.indexOf(A);
                        p(-1 !== e), t.splice(e, 1);
                    }
                } else if ("put" === A.type) {
                    if (null == A.response) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const r = A.request;
                    if (!Q(r.url)) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== r.method) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != A.options) throw c.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    e = this.#a(A.request);
                    for (const A of e){
                        const e = t.indexOf(A);
                        p(-1 !== e), t.splice(e, 1);
                    }
                    t.push([
                        A.request,
                        A.response
                    ]), n.push([
                        A.request,
                        A.response
                    ]);
                }
                r.push([
                    A.request,
                    A.response
                ]);
            }
            return r;
        } catch (e) {
            throw this.#i.length = 0, this.#i = A, e;
        }
    }
    #a(e, t, A) {
        const n = [], r = A ?? this.#i;
        for (const A of r){
            const [r, o] = A;
            this.#l(e, r, o, t) && n.push(A);
        }
        return n;
    }
    #l(e, t, A = null, n) {
        const s = new URL(e.url), i = new URL(t.url);
        if (n?.ignoreSearch && (i.search = "", s.search = ""), !r(s, i, !0)) return !1;
        if (null == A || n?.ignoreVary || !A.headersList.contains("vary")) return !0;
        const a = o(A.headersList.get("vary"));
        for (const A of a){
            if ("*" === A) return !1;
            if (t.headersList.get(A) !== e.headersList.get(A)) return !1;
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
const w = [
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
c.converters.CacheQueryOptions = c.dictionaryConverter(w), c.converters.MultiCacheQueryOptions = c.dictionaryConverter([
    ...w,
    {
        key: "cacheName",
        converter: c.converters.DOMString
    }
]), c.converters.Response = c.interfaceConverter(l), c.converters["sequence<RequestInfo>"] = c.sequenceConverter(c.converters.RequestInfo), module.exports = {
    Cache: y
};
