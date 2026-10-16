"use strict";
const { kConstruct: t } = require("./module-2381.js"), { urlEquals: s, fieldValues: o } = require("./module-3006.js"), { kEnumerableProperty: r, isDisturbed: i } = require("./module-9361.js"), { kHeadersList: A } = require("./module-8832.js"), { webidl: l } = require("./module-8005.js"), { Response: c, cloneResponse: m } = require("./module-1099.js"), { Request: d } = require("./module-2239.js"), { kState: g, kHeaders: u, kGuard: E, kRealm: p } = require("./module-5899.js"), { fetching: T } = require("./module-3406.js"), { urlIsHttpHttpsScheme: k, createDeferredPromise: I, readAllBytes: h } = require("./module-5728.js"), _ = require("./module-2613.js"), { getGlobalDispatcher: C } = require("./module-7362.js");
class f {
    #i;
    constructor(){
        arguments[0] !== t && l.illegalConstructor(), this.#i = arguments[1];
    }
    async match(e, n = {}) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 1, {
            header: "Cache.match"
        }), e = l.converters.RequestInfo(e), n = l.converters.CacheQueryOptions(n);
        const a = await this.matchAll(e, n);
        if (0 !== a.length) return a[0];
    }
    async matchAll(e = void 0, n = {}) {
        l.brandCheck(this, f), void 0 !== e && (e = l.converters.RequestInfo(e)), n = l.converters.CacheQueryOptions(n);
        let a = null;
        if (void 0 !== e) if (e instanceof d) {
            if (a = e[g], "GET" !== a.method && !n.ignoreMethod) return [];
        } else "string" == typeof e && (a = new d(e)[g]);
        const t = [];
        if (void 0 === e) for (const e of this.#i)t.push(e[1]);
        else {
            const e = this.#A(a, n);
            for (const n of e)t.push(n[1]);
        }
        const s = [];
        for (const e of t){
            const n = new c(e.body?.source ?? null), a = n[g].body;
            n[g] = e, n[g].body = a, n[u][A] = e.headersList, n[u][E] = "immutable", s.push(n);
        }
        return Object.freeze(s);
    }
    async add(e) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 1, {
            header: "Cache.add"
        });
        const n = [
            e = l.converters.RequestInfo(e)
        ], a = this.addAll(n);
        return await a;
    }
    async addAll(e) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 1, {
            header: "Cache.addAll"
        }), e = l.converters["sequence<RequestInfo>"](e);
        const n = [], a = [];
        for (const n of e){
            if ("string" == typeof n) continue;
            const e = n[g];
            if (!k(e.url) || "GET" !== e.method) throw l.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme when method is not GET."
            });
        }
        const t = [];
        for (const s of e){
            const e = new d(s)[g];
            if (!k(e.url)) throw l.errors.exception({
                header: "Cache.addAll",
                message: "Expected http/s scheme."
            });
            e.initiator = "fetch", e.destination = "subresource", a.push(e);
            const r = I();
            t.push(T({
                request: e,
                dispatcher: C(),
                processResponse (e) {
                    if ("error" === e.type || 206 === e.status || e.status < 200 || e.status > 299) r.reject(l.errors.exception({
                        header: "Cache.addAll",
                        message: "Received an invalid status code or the request failed."
                    }));
                    else if (e.headersList.contains("vary")) {
                        const n = o(e.headersList.get("vary"));
                        for (const e of n)if ("*" === e) {
                            r.reject(l.errors.exception({
                                header: "Cache.addAll",
                                message: "invalid vary field value"
                            }));
                            for (const e of t)e.abort();
                            return;
                        }
                    }
                },
                processResponseEndOfBody (e) {
                    e.aborted ? r.reject(new DOMException("aborted", "AbortError")) : r.resolve(e);
                }
            })), n.push(r.promise);
        }
        const s = Promise.all(n), r = await s, i = [];
        let A = 0;
        for (const e of r){
            const n = {
                type: "put",
                request: a[A],
                response: e
            };
            i.push(n), A++;
        }
        const c = I();
        let m = null;
        try {
            this.#l(i);
        } catch (e) {
            m = e;
        }
        return queueMicrotask(()=>{
            null === m ? c.resolve(void 0) : c.reject(m);
        }), c.promise;
    }
    async put(e, n) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 2, {
            header: "Cache.put"
        }), e = l.converters.RequestInfo(e), n = l.converters.Response(n);
        let a = null;
        if (a = e instanceof d ? e[g] : new d(e)[g], !k(a.url) || "GET" !== a.method) throw l.errors.exception({
            header: "Cache.put",
            message: "Expected an http/s scheme when method is not GET"
        });
        const t = n[g];
        if (206 === t.status) throw l.errors.exception({
            header: "Cache.put",
            message: "Got 206 status"
        });
        if (t.headersList.contains("vary")) {
            const e = o(t.headersList.get("vary"));
            for (const n of e)if ("*" === n) throw l.errors.exception({
                header: "Cache.put",
                message: "Got * vary field value"
            });
        }
        if (t.body && (i(t.body.stream) || t.body.stream.locked)) throw l.errors.exception({
            header: "Cache.put",
            message: "Response body is locked or disturbed"
        });
        const s = m(t), r = I();
        if (null != t.body) {
            const e = t.body.stream.getReader();
            h(e).then(r.resolve, r.reject);
        } else r.resolve(void 0);
        const A = [], c = {
            type: "put",
            request: a,
            response: s
        };
        A.push(c);
        const u = await r.promise;
        null != s.body && (s.body.source = u);
        const E = I();
        let p = null;
        try {
            this.#l(A);
        } catch (e) {
            p = e;
        }
        return queueMicrotask(()=>{
            null === p ? E.resolve() : E.reject(p);
        }), E.promise;
    }
    async delete(e, n = {}) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 1, {
            header: "Cache.delete"
        }), e = l.converters.RequestInfo(e), n = l.converters.CacheQueryOptions(n);
        let a = null;
        if (e instanceof d) {
            if (a = e[g], "GET" !== a.method && !n.ignoreMethod) return !1;
        } else _("string" == typeof e), a = new d(e)[g];
        const t = [], s = {
            type: "delete",
            request: a,
            options: n
        };
        t.push(s);
        const o = I();
        let r, i = null;
        try {
            r = this.#l(t);
        } catch (e) {
            i = e;
        }
        return queueMicrotask(()=>{
            null === i ? o.resolve(!!r?.length) : o.reject(i);
        }), o.promise;
    }
    async keys(e = void 0, n = {}) {
        l.brandCheck(this, f), void 0 !== e && (e = l.converters.RequestInfo(e)), n = l.converters.CacheQueryOptions(n);
        let a = null;
        if (void 0 !== e) if (e instanceof d) {
            if (a = e[g], "GET" !== a.method && !n.ignoreMethod) return [];
        } else "string" == typeof e && (a = new d(e)[g]);
        const t = I(), s = [];
        if (void 0 === e) for (const e of this.#i)s.push(e[0]);
        else {
            const e = this.#A(a, n);
            for (const n of e)s.push(n[0]);
        }
        return queueMicrotask(()=>{
            const e = [];
            for (const n of s){
                const a = new d("https://a");
                a[g] = n, a[u][A] = n.headersList, a[u][E] = "immutable", a[p] = n.client, e.push(a);
            }
            t.resolve(Object.freeze(e));
        }), t.promise;
    }
    #l(e) {
        const n = this.#i, a = [
            ...n
        ], t = [], s = [];
        try {
            for (const a of e){
                if ("delete" !== a.type && "put" !== a.type) throw l.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: 'operation type does not match "delete" or "put"'
                });
                if ("delete" === a.type && null != a.response) throw l.errors.exception({
                    header: "Cache.#batchCacheOperations",
                    message: "delete operation should not have an associated response"
                });
                if (this.#A(a.request, a.options, t).length) throw new DOMException("???", "InvalidStateError");
                let e;
                if ("delete" === a.type) {
                    if (e = this.#A(a.request, a.options), 0 === e.length) return [];
                    for (const a of e){
                        const e = n.indexOf(a);
                        _(-1 !== e), n.splice(e, 1);
                    }
                } else if ("put" === a.type) {
                    if (null == a.response) throw l.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "put operation should have an associated response"
                    });
                    const s = a.request;
                    if (!k(s.url)) throw l.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "expected http or https scheme"
                    });
                    if ("GET" !== s.method) throw l.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "not get method"
                    });
                    if (null != a.options) throw l.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "options must not be defined"
                    });
                    e = this.#A(a.request);
                    for (const a of e){
                        const e = n.indexOf(a);
                        _(-1 !== e), n.splice(e, 1);
                    }
                    n.push([
                        a.request,
                        a.response
                    ]), t.push([
                        a.request,
                        a.response
                    ]);
                }
                s.push([
                    a.request,
                    a.response
                ]);
            }
            return s;
        } catch (e) {
            throw this.#i.length = 0, this.#i = a, e;
        }
    }
    #A(e, n, a) {
        const t = [], s = a ?? this.#i;
        for (const a of s){
            const [s, o] = a;
            this.#c(e, s, o, n) && t.push(a);
        }
        return t;
    }
    #c(e, n, a = null, t) {
        const r = new URL(e.url), i = new URL(n.url);
        if (t?.ignoreSearch && (i.search = "", r.search = ""), !s(r, i, !0)) return !1;
        if (null == a || t?.ignoreVary || !a.headersList.contains("vary")) return !0;
        const A = o(a.headersList.get("vary"));
        for (const a of A){
            if ("*" === a) return !1;
            if (n.headersList.get(a) !== e.headersList.get(a)) return !1;
        }
        return !0;
    }
}
Object.defineProperties(f.prototype, {
    [Symbol.toStringTag]: {
        value: "Cache",
        configurable: !0
    },
    match: r,
    matchAll: r,
    add: r,
    addAll: r,
    put: r,
    delete: r,
    keys: r
});
const B = [
    {
        key: "ignoreSearch",
        converter: l.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreMethod",
        converter: l.converters.boolean,
        defaultValue: !1
    },
    {
        key: "ignoreVary",
        converter: l.converters.boolean,
        defaultValue: !1
    }
];
l.converters.CacheQueryOptions = l.dictionaryConverter(B), l.converters.MultiCacheQueryOptions = l.dictionaryConverter([
    ...B,
    {
        key: "cacheName",
        converter: l.converters.DOMString
    }
]), l.converters.Response = l.interfaceConverter(c), l.converters["sequence<RequestInfo>"] = l.sequenceConverter(l.converters.RequestInfo), module.exports = {
    Cache: f
};
